import React, { useState } from "react";
import "./Foreninger.css";
import { useContentful } from "react-contentful";
import PropagateLoader from "react-spinners/PropagateLoader";

const Foreninger = () => {
  const [input, setInput] = useState("");
  const { data, error, fetched, loading } = useContentful({
    contentType: "foreninger",
  });

  if (loading || !fetched) {
    return (
      <section className="loading">
        <PropagateLoader color="#457b9d" />
        <p className="loadingText">Loading data...</p>
      </section>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Could not find the page you are looking for.</p>;
  }

  const foreninger = data.items;
  const shownList = foreninger
    .filter((room) =>
      room.fields.tittel.toLowerCase().includes(input.toLowerCase())
    )
    .sort((a, b) => a.fields.tittel.localeCompare(b.fields.tittel));
  return (
    <section className="foreningContent">
      <div className="input">
        <input
          type="text"
          className="foreningInput"
          placeholder="Søk på navn"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <ul className="liste">
        {shownList.map((forening) => (
          <a
            className="foreningLink"
            target="_blank"
            rel="noreferrer"
            href={`${forening.fields.url}`}
            key={forening.name}
          >
            <li className="forening">
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
