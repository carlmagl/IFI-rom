import React, { useState } from "react";
import "./Rooms.css";
import { Link } from "react-router-dom";
import { useContentful } from "react-contentful";

const Foreninger = (props) => {
  const [input, setInput] = useState("");
  const { data, error, fetched, loading } = useContentful({
    contentType: "rooms",
  });
  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Page does not exist.</p>;
  }
  const rooms = data.items;
  console.log(rooms);
  const shownList = rooms.filter(
    (room) =>
      room.fields.name.toLowerCase().includes(input.toLowerCase()) ||
      room.fields.roomnnumber.includes(input) ||
      room.fields.floor.includes(input)
  );
  return (
    <section className="mainContent">
      <div className="input">
        <input
          type="text"
          className="inputField"
          placeholder="Søk på navn, etasje eller nummer"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <ul className="liste">
        {shownList.map((room) => (
          <Link
            className="roomLink"
            to={`/${room.fields.floor}etasje/${room.fields.roomnumber}`}
            key={room.fields.roomnumber}
          >
            <li className="room">
              <p className="tittel">{room.fields.name}</p>
              {room.fields.type && <p>{room.fields.type}</p>}
              <p>Etasje: {room.fields.floor}</p>
              {room.fields.roomnumber && (
                <p>Nummer: {room.fields.roomnumber}</p>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Foreninger;