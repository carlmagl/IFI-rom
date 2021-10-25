import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import "./Events.css";

function parseToISO(timeString) {
  var parsed = `${timeString.substring(6, 10)}-${timeString.substring(
    3,
    5
  )}-${timeString.substring(0, 2)}T${timeString.substring(11, 16)}`;
  return parsed;
}

function Events() {
  const [events, setEvents] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((response) => setEvents(response.data));
  }, []);
  console.log(events);
  return (
    <div className="eventContent">
      <h1>Eventer</h1>
      <ul className="eventList">
        {events &&
          events[0]
            .filter(
              (event) =>
                DateTime.fromISO(parseToISO(event.time)) > DateTime.now()
            )
            .map((event) => (
              <li className="event" key={event.link}>
                {console.log(parseToISO(event.time))}
                {console.log(DateTime.fromISO(parseToISO(event.time)))}
                {console.log(DateTime.now())}
                {console.log(
                  DateTime.fromISO(parseToISO(event.time)) > DateTime.now()
                )}
                <a
                  className="eventLink"
                  href={`https://ifinavet.no${event.link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>{event.text}</h2>
                  <div className="eventInfo">
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                  </div>
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Events;
