import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  CONTENTFUL_BASE_URL,
  IFI_LAT,
  IFI_LONG,
  YR_BASE_URL,
  getStaticPropsRevalidationTime,
} from "../constants";
import { useState } from "react";
import { RoomCard } from "../components/RoomCard";
import { Header } from "../components/Header";
import Image from "next/image";
import { Room } from "@/utils/types/room";

export const getStaticProps: GetStaticProps<{
  rooms: Room[];
  weather: any;
}> = async () => {
  const roomsResponse = await axios.get(
    `${CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=rooms`
  );
  const rooms = roomsResponse.data.items;

  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "User-Agent": "IFI-rom",
  });

  const weatherResponse = await fetch(
    `${YR_BASE_URL}?altitude=55&lat=${IFI_LAT}&lon=${IFI_LONG}`,
    {
      method: "GET",
      headers,
    }
  );

  const weather = await weatherResponse.json();

  return {
    props: {
      rooms,
      weather,
    },
    revalidate: 60,
  };
};

export default function Home({
  rooms,
  weather,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const { air_temperature } =
    weather?.properties?.timeseries[0]?.data?.instant?.details;
  const weathericon =
    weather.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
  return (
    <Header title={"IFI-rom - Rom på Ole Johan Dahls hus"}>
      <section className="flex flex-col justify-center items-center gap-4 py-20 relative">
        <div className="flex items-center gap-2 absolute top-2 right-5">
          <p>{air_temperature}</p>
          <Image
            src={`/weathericon/svg/${weathericon}.svg`}
            alt={""}
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-purple text-2xl font-bold text-center">
          Romoversikt
        </h1>
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
