import Link from "next/link";
import { Room } from "../types/room";

export const RoomCard = ({ room }: { room: Room }) => {
  return (
    <li className="w-10/12 sm:w-3/12 rounded bg-blue text-white border-grey hover:shadow-lg hover:shadow-blue">
      <Link
        href={`/${room.fields.name.toLocaleLowerCase()}`}
        className="flex flex-col justify-center items-center gap-4 p-4 w-full"
      >
        <h2 className="text-2xl text-center text-yellow font-bold">
          {room.fields.name}
        </h2>
        <div className="flex flex-col items-center text-blue-default">
          <p className="text-center">{room.fields.type}</p>
          <div className="w-full flex justify-between gap-5">
            <p>{room.fields.floor}. etasje</p>
            <p>{room.fields.roomnumber}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
