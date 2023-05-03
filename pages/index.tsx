import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  CONTENTFUL_BASE_URL,
  getStaticPropsRevalidationTime,
} from "../constants";
import { Room } from "../types/room";
import Link from "next/link";
import { useState } from "react";
import { RoomCard } from "../components/RoomCard";
import { Header } from "../components/Header";

export const getStaticProps: GetStaticProps<{ rooms: Room[] }> = async () => {
  const roomsResponse = await axios.get(
    `${CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=rooms`
  );
  const rooms = roomsResponse.data.items;
  return {
    props: {
      rooms,
    },
    revalidate: getStaticPropsRevalidationTime,
  };
};

export default function Home({
  rooms,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Header title={"Hjem - IFI-rom"}>
      <section className="flex flex-col justify-center items-center gap-4 py-20">
        <h1 className="text-2xl font-bold text-center">Romoversikt</h1>
        <input
          type="text"
          value={searchValue}
          className={"border-2 rounded-md w-10/12 sm:w-4/12 p-2"}
          placeholder="Søk på navn, etasje etc"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className="flex flex-wrap justify-center gap-4 w-full">
          {rooms
            .sort((a, b) => a.fields.name.localeCompare(b.fields.name))
            .filter(
              (room: Room) =>
                room.fields.name
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase()) ||
                room.fields.floor
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase()) ||
                room.fields.roomnumber
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
            )
            .map((room: Room) => (
              <RoomCard room={room} key={room.sys.id} />
            ))}
        </ul>
      </section>
    </Header>
  );
}
