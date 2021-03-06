import React, { useEffect } from "react";
import "./Floor.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { ReactComponent as Floor1 } from "./floor1.svg";
import { ReactComponent as Floor2 } from "./floor2.svg";
import { ReactComponent as Floor3 } from "./floor3.svg";
import { ReactComponent as Floor1Mobile } from "./floor1-mobile.svg";
import { ReactComponent as Floor2Mobile } from "./floor2-mobile.svg";
import { ReactComponent as Floor3Mobile } from "./floor3-mobile.svg";
import { useParams, useHistory } from "react-router-dom";

function Floor() {
  let { floor, roomnumber } = useParams();
  const history = useHistory();
  useEffect(() => {
    if (roomnumber != null) {
      var element = document.getElementById(roomnumber);
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
      element.classList.add("active");
    }
  });

  return (
    <div className="floorContainer">
      <Button
        variant="contained"
        color="default"
        className="backButton"
        onClick={() => {
          history.push(`/`);
        }}
        startIcon={<ArrowBackIcon />}
      >
        Tilbake
      </Button>
      <div className="contentHeader">
        <h2 className="activeFloor">{`${floor}.etasje`}</h2>
      </div>
      {window.innerWidth >= 600 && (
        <section className="main">
          {parseInt(floor) === 1 && (
            <Floor1 height={window.innerHeight * 0.7} />
          )}

          {parseInt(floor) === 2 && (
            <Floor2 height={window.innerHeight * 0.7} />
          )}

          {parseInt(floor) === 3 && (
            <Floor3 height={window.innerHeight * 0.7} />
          )}
        </section>
      )}

      {window.innerWidth < 600 && (
        <section className="main-mobile">
          {parseInt(floor) === 1 && (
            <Floor1Mobile width={window.innerWidth * 0.9} />
          )}

          {parseInt(floor) === 2 && (
            <Floor2Mobile width={window.innerWidth * 0.9} />
          )}

          {parseInt(floor) === 3 && (
            <Floor3Mobile width={window.innerWidth * 0.9} />
          )}
        </section>
      )}
    </div>
  );
}

export default Floor;
