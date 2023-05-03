import Link from "next/link";
import { Room } from "../types/room";

export const RoomCard = ({ room }: { room: Room }) => {
  return (
    <li className="w-10/12 sm:w-3/12 rounded bg-blue-default hover:shadow-xl hover:shadow-blue-default text-teal">
      <Link
        href={`/${room.fields.name.toLocaleLowerCase()}`}
        className="flex flex-col justify-center items-center gap-4 p-4"
      >
        <h2 className="text-xl">{room.fields.name}</h2>
        <div className="flex flex-col items-center">
          <p>{room.fields.description}</p>
          <p>{room.fields.floor}.etasje</p>
          <p>{room.fields.roomnumber}</p>
        </div>
      </Link>
    </li>
  );
};
