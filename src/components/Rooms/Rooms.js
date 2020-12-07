import React, { useState } from "react";
import "./Rooms.css";
import { Link } from "react-router-dom";
import { useContentful } from "react-contentful";

const Rooms = (props) => {
  const [input, setInput] = useState("");
  const { data, error, fetched, loading } = useContentful({
    contentType: "rooms",
  });

  /* {
      name: "Scheme",
      floor: "1",
      roomnumber: "1251",
    },
    {
      name: "Smalltalk",
      floor: "1",
      roomnumber: "1416",
    },
    {
      name: "Simula",
      floor: "1",
      roomnumber: "1423",
      type: "Forelesningssal",
    },
    {
      name: "Sed",
      floor: "1",
      roomnumber: "1454",
    },
    {
      name: "Shell",
      floor: "1",
      roomnumber: "1456",
    },
    {
      name: "Python",
      floor: "2",
      roomnumber: "2269",
    },
    {
      name: "Java",
      floor: "2",
      roomnumber: "2423",
    },
    {
      name: "Lisp",
      floor: "2",
      roomnumber: "2428",
    },
    {
      name: "Logo",
      floor: "2",
      roomnumber: "2438",
    },
    {
      name: "Modula",
      floor: "2",
      roomnumber: "2443",
    },
    {
      name: "Pascal",
      floor: "2",
      roomnumber: "2452",
    },
    {
      name: "Perl",
      floor: "2",
      roomnumber: "2453",
    },
    {
      name: "Postscript",
      floor: "2",
      roomnumber: "2458",
    },
    {
      name: "Prolog",
      floor: "2",
      roomnumber: "2465",
    },
    {
      name: "Awk",
      floor: "3",
      roomnumber: "3118",
    },
    {
      name: "Ada",
      floor: "3",
      roomnumber: "3407",
    },
    {
      name: "Assembler",
      floor: "3",
      roomnumber: "3417",
    },
    {
      name: "Limbo",
      floor: "3",
      roomnumber: "3418",
    },
    {
      name: "C",
      floor: "3",
      roomnumber: "3437",
    },
    {
      name: "Caml",
      floor: "3",
      roomnumber: "3438",
    },
    {
      name: "Chill",
      floor: "3",
      roomnumber: "3443",
    },
    {
      name: "Cobol",
      floor: "3",
      roomnumber: "3452",
    },
    {
      name: "Euler",
      floor: "3",
      roomnumber: "3459",
    },
    {
      name: "Fortress",
      floor: "3",
      roomnumber: "3468",
    },
  ]; */
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

export default Rooms;
