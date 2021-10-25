import React, { useEffect } from "react";
import axios from "axios";


export function Cantine() {

    useEffect(() => {
        const config = {
          headers: {
            "content-type": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
          },
        };
        axios
          .get(
            `https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=284`,
            config
          )
          .then(function (response) {
           console.log(response)
          })
          .catch(function (error) {
            console.error(error);
          })
      }, []);
  return (
    <div className="floorContainer">
     
    </div>
  );
}


