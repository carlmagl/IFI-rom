import React, { useState } from "react";
import "./Rooms.css";
import { useContentful } from "react-contentful";

const Foreninger = () => {
  const [input, setInput] = useState("");

  //TODO: Uncomment when contentfull is implemented
  const { data, error, fetched, loading } = useContentful({
    contentType: "foreninger",
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
  const foreninger = data.items;
  console.log(foreninger);
  const shownList = foreninger
    .filter((room) =>
      room.fields.tittel.toLowerCase().includes(input.toLowerCase())
    )
    .sort((a, b) => a.fields.tittel.localeCompare(b.fields.tittel));
  return (
    <section className="mainContent">
      <div className="input">
        <input
          type="text"
          className="inputField"
          placeholder="Søk på navn"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <ul className="liste">
        {shownList.map((forening) => (
          <a
            className="roomLink"
            target="_blank"
            rel="noreferrer"
            href={`${forening.fields.url}`}
            key={forening.name}
          >
            <li className="room">
              {/* TODO: Add logos */}
              <h2>{forening.fields.tittel}</h2>
              <p>{forening.fields.subtext}</p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Foreninger;
