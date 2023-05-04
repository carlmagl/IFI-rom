import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CONTENTFUL_BASE_URL } from "../constants";
import { Room } from "../types/room";
import { ParsedUrlQuery } from "querystring";
import { Floor1 } from "../components/Floors/floor1";
import { Floor2 } from "../components/Floors/floor2";
import { Floor3 } from "../components/Floors/floor3";
import { Floor1Mobile } from "../components/Floors/floor1mobile";
import { Floor2Mobile } from "../components/Floors/floor2mobile";
import { Floor3Mobile } from "../components/Floors/floor3mobile";
import { Header } from "../components/Header";
import { useEffect } from "react";
import Link from "next/link";

interface IParams extends ParsedUrlQuery {
  name: string;
}

export const getStaticPaths = async () => {
  const roomsResponse = await axios.get(
    `${CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=rooms`
  );
  const rooms = roomsResponse.data.items;
  return {
    paths: rooms.map((room: Room) => ({
      params: { name: room.fields.name.toLocaleLowerCase() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ room: Room }> = async (
  context
) => {
  const roomsResponse = await axios.get(
    `${CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=rooms`
  );
  const rooms: Room[] = roomsResponse.data.items;
  const { name } = context.params as IParams;
  const room = rooms.find(
    (room) => room.fields.name.toLocaleLowerCase() === name
  );
  if (room === undefined) return { notFound: true };
  return {
    props: {
      room,
    },
  };
};

const floor = (room: Room) => {
  switch (room.fields.floor) {
    case "1":
      return <Floor1 />;
    case "2":
      return <Floor2 />;
    case "3":
      return <Floor3 />;
  }
};

const mobileFloor = (room: Room) => {
  switch (room.fields.floor) {
    case "1":
      return <Floor1Mobile />;
    case "2":
      return <Floor2Mobile />;
    case "3":
      return <Floor3Mobile />;
  }
};

export default function MapView({
  room,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    if (room.fields.roomnumber != null) {
      const element = document.getElementById(room.fields.roomnumber);
      if (element == null) return;
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      element.classList.add("active");
    }
  });
  return (
    <Header title={`${room.fields.name} - IFI-rom`}>
      <section className="min-h-full sm:h-screen flex flex-col justify-center relative">
        <Link
          href={"/"}
          className="absolute top-5 right-5 bg-blue-dark h-[35px] w-[35px] text-white rounded-full flex justify-center items-center z-20"
        >
          X
        </Link>
        {/* <div className="flex flex-col gap-2 justify-center items-center p-5">
          <h1 className="text-blue-dark text-2xl">{room.fields.name}</h1>
          <div className="flex flex-col">
            <p>{room.fields.type}</p>
            <p>{room.fields.floor}</p>
          </div>
        </div> */}
        <div className="hidden sm:block h-full relative overflow-scroll p-10 flex flex-col justify-center items-center">
          {floor(room)}
        </div>
        <div className="sm:hidden p-10">{mobileFloor(room)}</div>
      </section>
    </Header>
  );
}
