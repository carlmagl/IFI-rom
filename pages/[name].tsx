import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CONTENTFUL_BASE_URL } from "../constants";
import { Room } from "../types/room";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

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

export default function Room({
  room,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(room);
  return (
    <section>
      <h1>{room.fields.name}</h1>
      <p>{room.fields.description}</p>
      <p>{room.fields.floor}</p>
      <p>{room.fields.roomnumber}</p>
    </section>
  );
}
