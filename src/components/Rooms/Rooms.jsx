import React, { useEffect, useState } from "react";
import "./Rooms.css";
import { Link } from "react-router-dom";
import { useContentful } from "react-contentful";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

const LAT = "59.94337241086495";
const LONG = "10.718350157512722";

function Rooms() {
  const [temperature, setTemperature] = useState();
  const [tempSymbol, setTempSymbol] = useState();
  useEffect(() => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .get(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${LAT}&lon=${LONG}`,
        config
      )
      .then((response) => {
        setTemperature(
          response.data.properties.timeseries[0].data.instant.details
            .air_temperature
        );
        setTempSymbol(
          response.data.properties.timeseries[0].data.next_1_hours.summary
            .symbol_code
        );
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  const [input, setInput] = useState("");
  const { data, error, fetched, loading } = useContentful({
    contentType: "rooms",
  });

  if (loading || !fetched) {
    return (
      <section className="loading">
        <ScaleLoader color="#457b9d" />
        <p className="loadingText">Loading data</p>
      </section>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Could not find the data you were looking for</p>;
  }
  const rooms = data.items;
  const shownList = rooms
    .filter(
      (room) =>
        room.fields.name.toLowerCase().includes(input.toLowerCase()) ||
        room.fields.roomnumber.includes(input) ||
        room.fields.floor.includes(input)
    )
    .sort((a, b) => a.fields.name.localeCompare(b.fields.name));
  return (
    <section className="mainContent">
      <div className="weather">
        {temperature && (
          <>
            <p className="tempText">{temperature}</p>
            <p className="tempText">{"\u00B0"}</p>
          </>
        )}
        {tempSymbol && (
          <img
            className="weatherSymbol"
            src={`${process.env.PUBLIC_URL}/weathericon/svg/${tempSymbol}.svg`}
            alt={tempSymbol}
          />
        )}
      </div>
      <div className="input">
        <input
          type="text"
          className="inputField"
          placeholder="Søk på navn, etasje eller rom-nummer"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <ul className="liste" datatype-cy="rooms">
        {shownList.map((room) => (
          <Link
            className="roomLink"
            to={`/${room.fields.floor}/${room.fields.roomnumber}`}
            key={room.fields.roomnumber}
          >
            <li className="room" key={room.fields.roomnumber}>
              <i className="fas fa-map-marker-alt fa-lg positionLogo" />
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
}

export default Rooms;
