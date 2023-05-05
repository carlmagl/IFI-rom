import Link from "next/link";
import { Room } from "../types/room";

export const RoomCard = ({ room }: { room: Room }) => {
  return (
    <li className="w-10/12 sm:w-3/12 rounded bg-white border-2 border-grey hover:shadow-xl hover:shadow-blue-default">
      <Link
        href={`/${room.fields.name.toLocaleLowerCase()}`}
        className="flex flex-col justify-center items-center gap-4 p-4"
      >
        <h2 className="text-xl text-center text-blue-dark">
          {room.fields.name}
        </h2>
        <div className="flex flex-col items-center text-blue-default">
          <p className="text-center">{room.fields.type}</p>
          <p>{room.fields.floor}.etasje</p>
          <p>{room.fields.roomnumber}</p>
        </div>
      </Link>
    </li>
  );
};
