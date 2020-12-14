import React, { useEffect } from "react";
import "./Floor.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { useParams, useLocation, useHistory } from "react-router-dom";

function Floor3() {
  const location = useLocation();
  console.log(location.pathname);
  let { roomnumber } = useParams();
  console.log("RoomNumber:", roomnumber);
  const history = useHistory();

  function checkRoom(rnumb) {
    console.log(roomnumber);
    console.log(rnumb);
    console.log();
    if (parseInt(roomnumber) === rnumb) return "active";
    return "nonactive";
  }
  useEffect(() => {
    var element = document.getElementById(roomnumber);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
  });

  return (
    <section className="main">
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          history.push(`/dashboard`);
        }}
        startIcon={<ArrowBackIcon />}
      >
        Tilbake
      </Button>
      <svg
        className="floor"
        width="2413"
        height="631"
        overflow="scroll"
        viewBox="0 0 2413 631"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="60.5"
          y="501.5"
          width="292"
          height="2352"
          transform="rotate(-90 60.5 501.5)"
          fill="#EDDEB7"
          stroke="black"
        />
        <rect
          x="0.5"
          y="310.5"
          width="101"
          height="197"
          transform="rotate(-90 0.5 310.5)"
          fill="#C4C4C4"
          className={checkRoom(3468)}
          id="3468"
          stroke="black"
        />
        <rect
          x="197.5"
          y="310.5"
          width="101"
          height="165"
          transform="rotate(-90 197.5 310.5)"
          fill="#C4C4C4"
          className={checkRoom(3467)}
          id="3467"
          stroke="black"
        />
        <rect
          x="0.5"
          y="402.5"
          width="92"
          height="88"
          transform="rotate(-90 0.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="88.5"
          y="402.5"
          width="92"
          height="27"
          transform="rotate(-90 88.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="115.5"
          y="402.5"
          width="46"
          height="50"
          transform="rotate(-90 115.5 402.5)"
          fill="#C4C4C4"
          className={checkRoom(3269)}
          id="3269"
          stroke="black"
        />
        <rect
          x="115.5"
          y="356.5"
          width="46"
          height="50"
          transform="rotate(-90 115.5 356.5)"
          fill="#C4C4C4"
          className={checkRoom(3369)}
          id="3369"
          stroke="black"
        />
        <rect
          x="80.5"
          y="462.5"
          width="36"
          height="38"
          transform="rotate(-90 80.5 462.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="80.5"
          y="481.5"
          width="19"
          height="38"
          transform="rotate(-90 80.5 481.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="80.5"
          y="501.5"
          width="20"
          height="38"
          transform="rotate(-90 80.5 501.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="118.5"
          y="501.5"
          width="75"
          height="46"
          transform="rotate(-90 118.5 501.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="222.5"
          y="356.5"
          width="46"
          height="46"
          transform="rotate(-90 222.5 356.5)"
          fill="#C4C4C4"
          className={checkRoom(3367)}
          id="3367"
          stroke="black"
        />
        <rect
          x="268.5"
          y="402.5"
          width="92"
          height="53"
          transform="rotate(-90 268.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="321.5"
          y="402.5"
          width="31"
          height="41"
          transform="rotate(-90 321.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="321.5"
          y="371.5"
          width="31"
          height="41"
          transform="rotate(-90 321.5 371.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="321.5"
          y="340.5"
          width="30"
          height="41"
          transform="rotate(-90 321.5 340.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="362.5"
          y="402.5"
          width="92"
          height="30"
          transform="rotate(-90 362.5 402.5)"
          fill="#EDDEB7"
          stroke="black"
        />
        <mask id="path-18-inside-1" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M362 209V311H432.105V362H488L488 311V209H432.105H362Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M362 209V311H432.105V362H488L488 311V209H432.105H362Z"
          fill="#C4C4C4"
          className={checkRoom(3459)}
          id="3459"
        />
        <path
          d="M362 311H361V312H362V311ZM362 209V208H361V209H362ZM432.105 311H433.105V310H432.105V311ZM432.105 362H431.105V363H432.105V362ZM488 362V363H489V362L488 362ZM488 311H489H488ZM488 209H489V208H488V209ZM363 311V209H361V311H363ZM432.105 310H362V312H432.105V310ZM433.105 362V311H431.105V362H433.105ZM488 361H432.105V363H488V361ZM487 311L487 362L489 362L489 311H487ZM487 209V311H489V209H487ZM432.105 210H488V208H432.105V210ZM362 210H432.105V208H362V210Z"
          fill="black"
          mask="url(#path-18-inside-1)"
        />
        <rect
          x="392.5"
          y="402.5"
          width="92"
          height="44"
          transform="rotate(-90 392.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="514.5"
          y="402.5"
          width="52"
          height="48"
          transform="rotate(-90 514.5 402.5)"
          fill="#C4C4C4"
          className={checkRoom(3257)}
          id="3257"
          stroke="black"
        />
        <rect
          x="562.5"
          y="402.5"
          width="52"
          height="30"
          transform="rotate(-90 562.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2349.5"
          y="501.5"
          width="46"
          height="63"
          transform="rotate(-90 2349.5 501.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2349.5"
          y="455.5"
          width="51"
          height="63"
          transform="rotate(-90 2349.5 455.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2341.5"
          y="404.5"
          width="55"
          height="71"
          transform="rotate(-90 2341.5 404.5)"
          fill="#C4C4C4"
          className={checkRoom(3302)}
          id="3302"
          stroke="black"
        />
        <rect
          x="2236.5"
          y="402.5"
          width="53"
          height="29"
          transform="rotate(-90 2236.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2265.5"
          y="402.5"
          width="53"
          height="37"
          transform="rotate(-90 2265.5 402.5)"
          fill="#EDDEB7"
          stroke="black"
        />
        <rect
          x="1941.5"
          y="501.5"
          width="32"
          height="99"
          transform="rotate(-90 1941.5 501.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1786.5"
          y="630.5"
          width="179"
          height="73"
          transform="rotate(-90 1786.5 630.5)"
          fill="#C4C4C4"
          className={checkRoom(3118)}
          id="3118"
          stroke="black"
        />
        <rect
          x="854.5"
          y="501.5"
          width="32"
          height="99"
          transform="rotate(-90 854.5 501.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1579.5"
          y="402.5"
          width="52"
          height="49"
          transform="rotate(-90 1579.5 402.5)"
          fill="#C4C4C4"
          className={checkRoom(3225)}
          id="3225"
          stroke="black"
        />
        <rect
          x="1628.5"
          y="402.5"
          width="52"
          height="49"
          transform="rotate(-90 1628.5 402.5)"
          fill="#C4C4C4"
          className={checkRoom(3224)}
          id="3224"
          stroke="black"
        />
        <rect
          x="1874.5"
          y="402.5"
          width="94"
          height="56"
          transform="rotate(-90 1874.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1930.5"
          y="402.5"
          width="94"
          height="43"
          transform="rotate(-90 1930.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-35-inside-2" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M487 351V362H515V351H593V209H515H487V351Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M487 351V362H515V351H593V209H515H487V351Z"
          fill="#C4C4C4"
          className={checkRoom(3458)}
          id="3458"
        />
        <path
          d="M487 362H486V363H487V362ZM515 362V363H516V362H515ZM515 351V350H514V351H515ZM593 351V352H594V351H593ZM593 209H594V208H593V209ZM487 209V208H486V209H487ZM488 362V351H486V362H488ZM515 361H487V363H515V361ZM514 351V362H516V351H514ZM593 350H515V352H593V350ZM592 209V351H594V209H592ZM515 210H593V208H515V210ZM487 210H515V208H487V210ZM488 351V209H486V351H488Z"
          fill="black"
          mask="url(#path-35-inside-2)"
        />
        <mask id="path-37-inside-3" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M592 209V352H646V362H691V352V209H646H592Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M592 209V352H646V362H691V352V209H646H592Z"
          fill="#C4C4C4"
          className={checkRoom(3453)}
          id="3453"
        />
        <path
          d="M592 352H591V353H592V352ZM592 209V208H591V209H592ZM646 352H647V351H646V352ZM646 362H645V363H646V362ZM691 362V363H692V362H691ZM691 209H692V208H691V209ZM593 352V209H591V352H593ZM646 351H592V353H646V351ZM647 362V352H645V362H647ZM691 361H646V363H691V361ZM690 352V362H692V352H690ZM690 209V352H692V209H690ZM646 210H691V208H646V210ZM592 210H646V208H592V210Z"
          fill="black"
          mask="url(#path-37-inside-3)"
        />
        <mask id="path-39-inside-4" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M690 351V362H724V351H823V209H724H690V351Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M690 351V362H724V351H823V209H724H690V351Z"
          fill="#C4C4C4"
          className={checkRoom(3452)}
          id="3452"
        />
        <path
          d="M690 362H689V363H690V362ZM724 362V363H725V362H724ZM724 351V350H723V351H724ZM823 351V352H824V351H823ZM823 209H824V208H823V209ZM690 209V208H689V209H690ZM691 362V351H689V362H691ZM724 361H690V363H724V361ZM723 351V362H725V351H723ZM823 350H724V352H823V350ZM822 209V351H824V209H822ZM724 210H823V208H724V210ZM690 210H724V208H690V210ZM691 351V209H689V351H691Z"
          fill="black"
          mask="url(#path-39-inside-4)"
        />
        <mask id="path-41-inside-5" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M822 209V310H979V362H1020V310V210V209H822Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M822 209V310H979V362H1020V310V210V209H822Z"
          fill="#C4C4C4"
          className={checkRoom(3443)}
          id="3443"
        />
        <path
          d="M822 310H821V311H822V310ZM822 209V208H821V209H822ZM979 310H980V309H979V310ZM979 362H978V363H979V362ZM1020 362V363H1021V362H1020ZM1020 209H1021V208H1020V209ZM823 310V209H821V310H823ZM979 309H822V311H979V309ZM980 362V310H978V362H980ZM1020 361H979V363H1020V361ZM1019 310V362H1021V310H1019ZM1019 210V310H1021V210H1019ZM1019 209V210H1021V209H1019ZM822 210H1020V208H822V210Z"
          fill="black"
          mask="url(#path-41-inside-5)"
        />
        <mask id="path-43-inside-6" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1019 209V349H1152.81V362H1185V349V209H1152.81H1019Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1019 209V349H1152.81V362H1185V349V209H1152.81H1019Z"
          fill="#C4C4C4"
          className={checkRoom(3438)}
          id="3438"
        />
        <path
          d="M1019 349H1018V350H1019V349ZM1019 209V208H1018V209H1019ZM1152.81 349H1153.81V348H1152.81V349ZM1152.81 362H1151.81V363H1152.81V362ZM1185 362V363H1186V362H1185ZM1185 209H1186V208H1185V209ZM1020 349V209H1018V349H1020ZM1152.81 348H1019V350H1152.81V348ZM1153.81 362V349H1151.81V362H1153.81ZM1185 361H1152.81V363H1185V361ZM1184 349V362H1186V349H1184ZM1184 209V349H1186V209H1184ZM1152.81 210H1185V208H1152.81V210ZM1019 210H1152.81V208H1019V210Z"
          fill="black"
          mask="url(#path-43-inside-6)"
        />
        <rect
          x="1104.5"
          y="403.5"
          width="55"
          height="49"
          transform="rotate(-90 1104.5 403.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1019.5"
          y="403.5"
          width="55"
          height="30"
          transform="rotate(-90 1019.5 403.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1049.5"
          y="403.5"
          width="55"
          height="21"
          transform="rotate(-90 1049.5 403.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-48-inside-7" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1184 357V362H1264V357H1348V209H1264H1184V357Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1184 357V362H1264V357H1348V209H1264H1184V357Z"
          fill="#C4C4C4"
          className={checkRoom(3437)}
          id="3437"
        />
        <path
          d="M1184 362H1183V363H1184V362ZM1264 362V363H1265V362H1264ZM1264 357V356H1263V357H1264ZM1348 357V358H1349V357H1348ZM1348 209H1349V208H1348V209ZM1184 209V208H1183V209H1184ZM1185 362V357H1183V362H1185ZM1264 361H1184V363H1264V361ZM1263 357V362H1265V357H1263ZM1348 356H1264V358H1348V356ZM1347 209V357H1349V209H1347ZM1264 210H1348V208H1264V210ZM1184 210H1264V208H1184V210ZM1185 357V209H1183V357H1185Z"
          fill="black"
          mask="url(#path-48-inside-7)"
        />
        <mask id="path-50-inside-8" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2302 350V362H2342V350H2413V209H2342H2302V350Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2302 350V362H2342V350H2413V209H2342H2302V350Z"
          fill="#C4C4C4"
          className={checkRoom(3403)}
          id="3403"
        />
        <path
          d="M2302 362H2301V363H2302V362ZM2342 362V363H2343V362H2342ZM2342 350V349H2341V350H2342ZM2413 350V351H2414V350H2413ZM2413 209H2414V208H2413V209ZM2302 209V208H2301V209H2302ZM2303 362V350H2301V362H2303ZM2342 361H2302V363H2342V361ZM2341 350V362H2343V350H2341ZM2413 349H2342V351H2413V349ZM2412 209V350H2414V209H2412ZM2342 210H2413V208H2342V210ZM2302 210H2342V208H2302V210ZM2303 350V209H2301V350H2303Z"
          fill="black"
          mask="url(#path-50-inside-8)"
        />
        <mask id="path-52-inside-9" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2170 350V362H2237V350H2303V209H2237H2170V350Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2170 350V362H2237V350H2303V209H2237H2170V350Z"
          fill="#C4C4C4"
          className={checkRoom(3407)}
          id="3407"
        />
        <path
          d="M2170 362H2169V363H2170V362ZM2237 362V363H2238V362H2237ZM2237 350V349H2236V350H2237ZM2303 350V351H2304V350H2303ZM2303 209H2304V208H2303V209ZM2170 209V208H2169V209H2170ZM2171 362V350H2169V362H2171ZM2237 361H2170V363H2237V361ZM2236 350V362H2238V350H2236ZM2303 349H2237V351H2303V349ZM2302 209V350H2304V209H2302ZM2237 210H2303V208H2237V210ZM2170 210H2237V208H2170V210ZM2171 350V209H2169V350H2171Z"
          fill="black"
          mask="url(#path-52-inside-9)"
        />
        <mask id="path-54-inside-10" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2049 209V351H2104V362H2171V351V210V209H2049Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2049 209V351H2104V362H2171V351V210V209H2049Z"
          fill="#C4C4C4"
          className={checkRoom(3408)}
          id="3408"
        />
        <path
          d="M2049 351H2048V352H2049V351ZM2049 209V208H2048V209H2049ZM2104 351H2105V350H2104V351ZM2104 362H2103V363H2104V362ZM2171 362V363H2172V362H2171ZM2171 209H2172V208H2171V209ZM2050 351V209H2048V351H2050ZM2104 350H2049V352H2104V350ZM2105 362V351H2103V362H2105ZM2171 361H2104V363H2171V361ZM2170 351V362H2172V351H2170ZM2170 210V351H2172V210H2170ZM2170 209V210H2172V209H2170ZM2049 210H2171V208H2049V210Z"
          fill="black"
          mask="url(#path-54-inside-10)"
        />
        <mask id="path-56-inside-11" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1841 309V362H1875V309H2050V209H1875H1841V309Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1841 309V362H1875V309H2050V209H1875H1841V309Z"
          fill="#C4C4C4"
          className={checkRoom(3417)}
          id="3417"
        />
        <path
          d="M1841 362H1840V363H1841V362ZM1875 362V363H1876V362H1875ZM1875 309V308H1874V309H1875ZM2050 309V310H2051V309H2050ZM2050 209H2051V208H2050V209ZM1841 209V208H1840V209H1841ZM1842 362V309H1840V362H1842ZM1875 361H1841V363H1875V361ZM1874 309V362H1876V309H1874ZM2050 308H1875V310H2050V308ZM2049 209V309H2051V209H2049ZM1875 210H2050V208H1875V210ZM1841 210H1875V208H1841V210ZM1842 309V209H1840V309H1842Z"
          fill="black"
          mask="url(#path-56-inside-11)"
        />
        <rect
          x="2006.5"
          y="368.5"
          width="26"
          height="43"
          transform="rotate(-90 2006.5 368.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2022.5"
          y="342.5"
          width="17"
          height="27"
          transform="rotate(-90 2022.5 342.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2022.5"
          y="325.5"
          width="17"
          height="27"
          transform="rotate(-90 2022.5 325.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-61-inside-12" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1347 209V310H1507.8V362H1547V310V209H1507.8H1347Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1347 209V310H1507.8V362H1547V310V209H1507.8H1347Z"
          fill="#C4C4C4"
          className={checkRoom(3427)}
          id="3427"
        />
        <path
          d="M1347 310H1346V311H1347V310ZM1347 209V208H1346V209H1347ZM1507.8 310H1508.8V309H1507.8V310ZM1507.8 362H1506.8V363H1507.8V362ZM1547 362V363H1548V362H1547ZM1547 209H1548V208H1547V209ZM1348 310V209H1346V310H1348ZM1507.8 309H1347V311H1507.8V309ZM1508.8 362V310H1506.8V362H1508.8ZM1547 361H1507.8V363H1547V361ZM1546 310V362H1548V310H1546ZM1546 209V310H1548V209H1546ZM1507.8 210H1547V208H1507.8V210ZM1347 210H1507.8V208H1347V210Z"
          fill="black"
          mask="url(#path-61-inside-12)"
        />
        <mask id="path-63-inside-13" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1677 209V351H1786V362H1842V351V209H1786H1677Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1677 209V351H1786V362H1842V351V209H1786H1677Z"
          fill="#C4C4C4"
          className={checkRoom(3418)}
          id="3418"
        />
        <path
          d="M1677 351H1676V352H1677V351ZM1677 209V208H1676V209H1677ZM1786 351H1787V350H1786V351ZM1786 362H1785V363H1786V362ZM1842 362V363H1843V362H1842ZM1842 209H1843V208H1842V209ZM1678 351V209H1676V351H1678ZM1786 350H1677V352H1786V350ZM1787 362V351H1785V362H1787ZM1842 361H1786V363H1842V361ZM1841 351V362H1843V351H1841ZM1841 209V351H1843V209H1841ZM1786 210H1842V208H1786V210ZM1677 210H1786V208H1677V210Z"
          fill="black"
          mask="url(#path-63-inside-13)"
        />
        <rect
          x="2229.5"
          y="402.5"
          width="41"
          height="7"
          transform="rotate(-90 2229.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2095.5"
          y="402.5"
          width="41"
          height="8"
          transform="rotate(-90 2095.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-67-inside-14" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2049 362V403H2096V362H2105V350H2096H2049V362Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2049 362V403H2096V362H2105V350H2096H2049V362Z"
          fill="#C4C4C4"
          className={checkRoom(3210)}
          id="3210"
        />
        <path
          d="M2049 403H2048V404H2049V403ZM2096 403V404H2097V403H2096ZM2096 362V361H2095V362H2096ZM2105 362V363H2106V362H2105ZM2105 350H2106V349H2105V350ZM2049 350V349H2048V350H2049ZM2050 403V362H2048V403H2050ZM2096 402H2049V404H2096V402ZM2095 362V403H2097V362H2095ZM2105 361H2096V363H2105V361ZM2104 350V362H2106V350H2104ZM2096 351H2105V349H2096V351ZM2049 351H2096V349H2049V351ZM2050 362V350H2048V362H2050Z"
          fill="black"
          mask="url(#path-67-inside-14)"
        />
        <mask id="path-69-inside-15" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1546 351V362H1580.26V351H1678V209H1580.26H1546V351Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1546 351V362H1580.26V351H1678V209H1580.26H1546V351Z"
          fill="#C4C4C4"
          className={checkRoom(3426)}
          id="3426"
        />
        <path
          d="M1546 362H1545V363H1546V362ZM1580.26 362V363H1581.26V362H1580.26ZM1580.26 351V350H1579.26V351H1580.26ZM1678 351V352H1679V351H1678ZM1678 209H1679V208H1678V209ZM1546 209V208H1545V209H1546ZM1547 362V351H1545V362H1547ZM1580.26 361H1546V363H1580.26V361ZM1579.26 351V362H1581.26V351H1579.26ZM1678 350H1580.26V352H1678V350ZM1677 209V351H1679V209H1677ZM1580.26 210H1678V208H1580.26V210ZM1546 210H1580.26V208H1546V210ZM1547 351V209H1545V351H1547Z"
          fill="black"
          mask="url(#path-69-inside-15)"
        />
        <rect
          x="1347.5"
          y="402.5"
          width="46"
          height="45"
          transform="rotate(-90 1347.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1263.5"
          y="402.5"
          width="46"
          height="48"
          transform="rotate(-90 1263.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1255.5"
          y="402.5"
          width="41"
          height="8"
          transform="rotate(-90 1255.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1347.5"
          y="356.5"
          width="47"
          height="83"
          transform="rotate(-90 1347.5 356.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1392.5"
          y="402.5"
          width="46"
          height="38"
          transform="rotate(-90 1392.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1430.5"
          y="402.5"
          width="93"
          height="33"
          transform="rotate(-90 1430.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1463.5"
          y="392.5"
          width="83"
          height="45"
          transform="rotate(-90 1463.5 392.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1463.5"
          y="402.5"
          width="10"
          height="27"
          transform="rotate(-90 1463.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1490.5"
          y="402.5"
          width="10"
          height="18"
          transform="rotate(-90 1490.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-80-inside-16" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1677 384V403H1718V384V351V350H1677V351V384Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1677 384V403H1718V384V351V350H1677V351V384Z"
          fill="#C4C4C4"
        />
        <path
          d="M1677 403H1676V404H1677V403ZM1718 403V404H1719V403H1718ZM1718 350H1719V349H1718V350ZM1677 350V349H1676V350H1677ZM1678 403V384H1676V403H1678ZM1718 402H1677V404H1718V402ZM1717 384V403H1719V384H1717ZM1717 351V384H1719V351H1717ZM1717 350V351H1719V350H1717ZM1677 351H1718V349H1677V351ZM1678 351V350H1676V351H1678ZM1678 384V351H1676V384H1678Z"
          fill="black"
          mask="url(#path-80-inside-16)"
        />
        <rect
          x="1778.5"
          y="402.5"
          width="41"
          height="8"
          transform="rotate(-90 1778.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-83-inside-17" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1738 403V384V362V350H1778H1779H1787V362H1779V403H1738Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1738 403V384V362V350H1778H1779H1787V362H1779V403H1738Z"
          fill="#C4C4C4"
        />
        <path
          d="M1738 403H1737V404H1738V403ZM1738 350V349H1737V350H1738ZM1787 350H1788V349H1787V350ZM1787 362V363H1788V362H1787ZM1779 362V361H1778V362H1779ZM1779 403V404H1780V403H1779ZM1737 384V403H1739V384H1737ZM1737 362V384H1739V362H1737ZM1739 362V350H1737V362H1739ZM1738 351H1778V349H1738V351ZM1778 351H1779V349H1778V351ZM1779 351H1787V349H1779V351ZM1786 350V362H1788V350H1786ZM1787 361H1779V363H1787V361ZM1780 403V362H1778V403H1780ZM1738 404H1779V402H1738V404Z"
          fill="black"
          mask="url(#path-83-inside-17)"
        />
        <rect
          x="1717.5"
          y="384.5"
          width="34"
          height="21"
          transform="rotate(-90 1717.5 384.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="1311.5"
          y="384.5"
          width="28"
          height="36"
          transform="rotate(-90 1311.5 384.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="2006.5"
          y="402.5"
          width="34"
          height="43"
          transform="rotate(-90 2006.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-88-inside-18" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1973 343V403H2007V343H2023V308H2007H1973V343Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1973 343V403H2007V343H2023V308H2007H1973V343Z"
          fill="#EDDEB7"
        />
        <path
          d="M1973 403H1972V404H1973V403ZM2007 403V404H2008V403H2007ZM2007 343V342H2006V343H2007ZM2023 343V344H2024V343H2023ZM2023 308H2024V307H2023V308ZM1973 308V307H1972V308H1973ZM1974 403V343H1972V403H1974ZM2007 402H1973V404H2007V402ZM2006 343V403H2008V343H2006ZM2023 342H2007V344H2023V342ZM2022 308V343H2024V308H2022ZM2007 309H2023V307H2007V309ZM1973 309H2007V307H1973V309ZM1974 343V308H1972V343H1974Z"
          fill="black"
          mask="url(#path-88-inside-18)"
        />
        <rect
          x="935.5"
          y="402.5"
          width="9"
          height="29"
          transform="rotate(-90 935.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="964.5"
          y="402.5"
          width="9"
          height="15"
          transform="rotate(-90 964.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="935.5"
          y="393.5"
          width="84"
          height="44"
          transform="rotate(-90 935.5 393.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="902.5"
          y="402.5"
          width="93"
          height="33"
          transform="rotate(-90 902.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="863.5"
          y="402.5"
          width="48"
          height="39"
          transform="rotate(-90 863.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="822.5"
          y="402.5"
          width="48"
          height="41"
          transform="rotate(-90 822.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="822.5"
          y="354.5"
          width="45"
          height="80"
          transform="rotate(-90 822.5 354.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="786.5"
          y="384.5"
          width="34"
          height="36"
          transform="rotate(-90 786.5 384.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-98-inside-19" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M723 350V362H735V403H787V362V350H735H723Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M723 350V362H735V403H787V362V350H735H723Z"
          fill="#C4C4C4"
        />
        <path
          d="M723 362H722V363H723V362ZM723 350V349H722V350H723ZM735 362H736V361H735V362ZM735 403H734V404H735V403ZM787 403V404H788V403H787ZM787 350H788V349H787V350ZM724 362V350H722V362H724ZM735 361H723V363H735V361ZM736 403V362H734V403H736ZM787 402H735V404H787V402ZM786 362V403H788V362H786ZM786 350V362H788V350H786ZM735 351H787V349H735V351ZM723 351H735V349H723V351Z"
          fill="black"
          mask="url(#path-98-inside-19)"
        />
        <rect
          x="727.5"
          y="402.5"
          width="41"
          height="8"
          transform="rotate(-90 727.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="639.5"
          y="402.5"
          width="41"
          height="8"
          transform="rotate(-90 639.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <mask id="path-102-inside-20" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M592 362V403H640V362H647V350H592V350.981V362Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M592 362V403H640V362H647V350H592V350.981V362Z"
          fill="#C4C4C4"
          className={checkRoom(3255)}
          id="3255"
        />
        <path
          d="M592 403H591V404H592V403ZM640 403V404H641V403H640ZM640 362V361H639V362H640ZM647 362V363H648V362H647ZM647 350H648V349H647V350ZM592 350V349H591V350H592ZM593 403V362H591V403H593ZM640 402H592V404H640V402ZM639 362V403H641V362H639ZM647 361H640V363H647V361ZM646 350V362H648V350H646ZM592 351H647V349H592V351ZM593 350.981V350H591V350.981H593ZM593 362V350.981H591V362H593Z"
          fill="black"
          mask="url(#path-102-inside-20)"
        />
        <rect
          x="222.5"
          y="402.5"
          width="46"
          height="46"
          transform="rotate(-90 222.5 402.5)"
          fill="#C4C4C4"
          stroke="black"
        />
        <rect
          x="437.5"
          y="209.5"
          width="209"
          height="49"
          transform="rotate(-90 437.5 209.5)"
          stroke="black"
        />
        <path
          d="M82.6953 253.232H79.1152V257H77.9902V248.469H83.2754V249.395H79.1152V252.312H82.6953V253.232ZM84.0371 253.771C84.0371 253.15 84.1582 252.592 84.4004 252.096C84.6465 251.6 84.9863 251.217 85.4199 250.947C85.8574 250.678 86.3555 250.543 86.9141 250.543C87.7773 250.543 88.4746 250.842 89.0059 251.439C89.541 252.037 89.8086 252.832 89.8086 253.824V253.9C89.8086 254.518 89.6895 255.072 89.4512 255.564C89.2168 256.053 88.8789 256.434 88.4375 256.707C88 256.98 87.4961 257.117 86.9258 257.117C86.0664 257.117 85.3691 256.818 84.834 256.221C84.3027 255.623 84.0371 254.832 84.0371 253.848V253.771ZM85.127 253.9C85.127 254.604 85.2891 255.168 85.6133 255.594C85.9414 256.02 86.3789 256.232 86.9258 256.232C87.4766 256.232 87.9141 256.018 88.2383 255.588C88.5625 255.154 88.7246 254.549 88.7246 253.771C88.7246 253.076 88.5586 252.514 88.2266 252.084C87.8984 251.65 87.4609 251.434 86.9141 251.434C86.3789 251.434 85.9473 251.646 85.6191 252.072C85.291 252.498 85.127 253.107 85.127 253.9ZM94.2324 251.633C94.0684 251.605 93.8906 251.592 93.6992 251.592C92.9883 251.592 92.5059 251.895 92.252 252.5V257H91.168V250.66H92.2227L92.2402 251.393C92.5957 250.826 93.0996 250.543 93.752 250.543C93.9629 250.543 94.123 250.57 94.2324 250.625V251.633ZM96.998 249.125V250.66H98.1816V251.498H96.998V255.43C96.998 255.684 97.0508 255.875 97.1562 256.004C97.2617 256.129 97.4414 256.191 97.6953 256.191C97.8203 256.191 97.9922 256.168 98.2109 256.121V257C97.9258 257.078 97.6484 257.117 97.3789 257.117C96.8945 257.117 96.5293 256.971 96.2832 256.678C96.0371 256.385 95.9141 255.969 95.9141 255.43V251.498H94.7598V250.66H95.9141V249.125H96.998ZM102.518 251.633C102.354 251.605 102.176 251.592 101.984 251.592C101.273 251.592 100.791 251.895 100.537 252.5V257H99.4531V250.66H100.508L100.525 251.393C100.881 250.826 101.385 250.543 102.037 250.543C102.248 250.543 102.408 250.57 102.518 250.625V251.633ZM106.033 257.117C105.174 257.117 104.475 256.836 103.936 256.273C103.396 255.707 103.127 254.951 103.127 254.006V253.807C103.127 253.178 103.246 252.617 103.484 252.125C103.727 251.629 104.062 251.242 104.492 250.965C104.926 250.684 105.395 250.543 105.898 250.543C106.723 250.543 107.363 250.814 107.82 251.357C108.277 251.9 108.506 252.678 108.506 253.689V254.141H104.211C104.227 254.766 104.408 255.271 104.756 255.658C105.107 256.041 105.553 256.232 106.092 256.232C106.475 256.232 106.799 256.154 107.064 255.998C107.33 255.842 107.562 255.635 107.762 255.377L108.424 255.893C107.893 256.709 107.096 257.117 106.033 257.117ZM105.898 251.434C105.461 251.434 105.094 251.594 104.797 251.914C104.5 252.23 104.316 252.676 104.246 253.25H107.422V253.168C107.391 252.617 107.242 252.191 106.977 251.891C106.711 251.586 106.352 251.434 105.898 251.434ZM113.457 255.318C113.457 255.025 113.346 254.799 113.123 254.639C112.904 254.475 112.52 254.334 111.969 254.217C111.422 254.1 110.986 253.959 110.662 253.795C110.342 253.631 110.104 253.436 109.947 253.209C109.795 252.982 109.719 252.713 109.719 252.4C109.719 251.881 109.938 251.441 110.375 251.082C110.816 250.723 111.379 250.543 112.062 250.543C112.781 250.543 113.363 250.729 113.809 251.1C114.258 251.471 114.482 251.945 114.482 252.523H113.393C113.393 252.227 113.266 251.971 113.012 251.756C112.762 251.541 112.445 251.434 112.062 251.434C111.668 251.434 111.359 251.52 111.137 251.691C110.914 251.863 110.803 252.088 110.803 252.365C110.803 252.627 110.906 252.824 111.113 252.957C111.32 253.09 111.693 253.217 112.232 253.338C112.775 253.459 113.215 253.604 113.551 253.771C113.887 253.939 114.135 254.143 114.295 254.381C114.459 254.615 114.541 254.902 114.541 255.242C114.541 255.809 114.314 256.264 113.861 256.607C113.408 256.947 112.82 257.117 112.098 257.117C111.59 257.117 111.141 257.027 110.75 256.848C110.359 256.668 110.053 256.418 109.83 256.098C109.611 255.773 109.502 255.424 109.502 255.049H110.586C110.605 255.412 110.75 255.701 111.02 255.916C111.293 256.127 111.652 256.232 112.098 256.232C112.508 256.232 112.836 256.15 113.082 255.986C113.332 255.818 113.457 255.596 113.457 255.318ZM119.645 255.318C119.645 255.025 119.533 254.799 119.311 254.639C119.092 254.475 118.707 254.334 118.156 254.217C117.609 254.1 117.174 253.959 116.85 253.795C116.529 253.631 116.291 253.436 116.135 253.209C115.982 252.982 115.906 252.713 115.906 252.4C115.906 251.881 116.125 251.441 116.562 251.082C117.004 250.723 117.566 250.543 118.25 250.543C118.969 250.543 119.551 250.729 119.996 251.1C120.445 251.471 120.67 251.945 120.67 252.523H119.58C119.58 252.227 119.453 251.971 119.199 251.756C118.949 251.541 118.633 251.434 118.25 251.434C117.855 251.434 117.547 251.52 117.324 251.691C117.102 251.863 116.99 252.088 116.99 252.365C116.99 252.627 117.094 252.824 117.301 252.957C117.508 253.09 117.881 253.217 118.42 253.338C118.963 253.459 119.402 253.604 119.738 253.771C120.074 253.939 120.322 254.143 120.482 254.381C120.646 254.615 120.729 254.902 120.729 255.242C120.729 255.809 120.502 256.264 120.049 256.607C119.596 256.947 119.008 257.117 118.285 257.117C117.777 257.117 117.328 257.027 116.938 256.848C116.547 256.668 116.24 256.418 116.018 256.098C115.799 255.773 115.689 255.424 115.689 255.049H116.773C116.793 255.412 116.938 255.701 117.207 255.916C117.48 256.127 117.84 256.232 118.285 256.232C118.695 256.232 119.023 256.15 119.27 255.986C119.52 255.818 119.645 255.596 119.645 255.318Z"
          fill="black"
        />
        <path
          d="M20.9902 354V345.469H23.7793C24.7051 345.469 25.4004 345.66 25.8652 346.043C26.334 346.426 26.5684 346.992 26.5684 347.742C26.5684 348.141 26.4551 348.494 26.2285 348.803C26.002 349.107 25.6934 349.344 25.3027 349.512C25.7637 349.641 26.127 349.887 26.3926 350.25C26.6621 350.609 26.7969 351.039 26.7969 351.539C26.7969 352.305 26.5488 352.906 26.0527 353.344C25.5566 353.781 24.8555 354 23.9492 354H20.9902ZM22.1152 350.01V353.08H23.9727C24.4961 353.08 24.9082 352.945 25.209 352.676C25.5137 352.402 25.666 352.027 25.666 351.551C25.666 350.523 25.1074 350.01 23.9902 350.01H22.1152ZM22.1152 349.107H23.8145C24.3066 349.107 24.6992 348.984 24.9922 348.738C25.2891 348.492 25.4375 348.158 25.4375 347.736C25.4375 347.268 25.3008 346.928 25.0273 346.717C24.7539 346.502 24.3379 346.395 23.7793 346.395H22.1152V349.107ZM29.4746 354H28.3906V345H29.4746V354ZM35.1289 354C35.0664 353.875 35.0156 353.652 34.9766 353.332C34.4727 353.855 33.8711 354.117 33.1719 354.117C32.5469 354.117 32.0332 353.941 31.6309 353.59C31.2324 353.234 31.0332 352.785 31.0332 352.242C31.0332 351.582 31.2832 351.07 31.7832 350.707C32.2871 350.34 32.9941 350.156 33.9043 350.156H34.959V349.658C34.959 349.279 34.8457 348.979 34.6191 348.756C34.3926 348.529 34.0586 348.416 33.6172 348.416C33.2305 348.416 32.9062 348.514 32.6445 348.709C32.3828 348.904 32.252 349.141 32.252 349.418H31.1621C31.1621 349.102 31.2734 348.797 31.4961 348.504C31.7227 348.207 32.0273 347.973 32.4102 347.801C32.7969 347.629 33.2207 347.543 33.6816 347.543C34.4121 347.543 34.9844 347.727 35.3984 348.094C35.8125 348.457 36.0273 348.959 36.043 349.6V352.518C36.043 353.1 36.1172 353.562 36.2656 353.906V354H35.1289ZM33.3301 353.174C33.6699 353.174 33.9922 353.086 34.2969 352.91C34.6016 352.734 34.8223 352.506 34.959 352.225V350.924H34.1094C32.7812 350.924 32.1172 351.312 32.1172 352.09C32.1172 352.43 32.2305 352.695 32.457 352.887C32.6836 353.078 32.9746 353.174 33.3301 353.174ZM40.2852 353.232C40.6719 353.232 41.0098 353.115 41.2988 352.881C41.5879 352.646 41.748 352.354 41.7793 352.002H42.8047C42.7852 352.365 42.6602 352.711 42.4297 353.039C42.1992 353.367 41.8906 353.629 41.5039 353.824C41.1211 354.02 40.7148 354.117 40.2852 354.117C39.4219 354.117 38.7344 353.83 38.2227 353.256C37.7148 352.678 37.4609 351.889 37.4609 350.889V350.707C37.4609 350.09 37.5742 349.541 37.8008 349.061C38.0273 348.58 38.3516 348.207 38.7734 347.941C39.1992 347.676 39.7012 347.543 40.2793 347.543C40.9902 347.543 41.5801 347.756 42.0488 348.182C42.5215 348.607 42.7734 349.16 42.8047 349.84H41.7793C41.748 349.43 41.5918 349.094 41.3105 348.832C41.0332 348.566 40.6895 348.434 40.2793 348.434C39.7285 348.434 39.3008 348.633 38.9961 349.031C38.6953 349.426 38.5449 349.998 38.5449 350.748V350.953C38.5449 351.684 38.6953 352.246 38.9961 352.641C39.2969 353.035 39.7266 353.232 40.2852 353.232ZM45.793 351.064L45.1133 351.773V354H44.0293V345H45.1133V350.443L45.6934 349.746L47.668 347.66H48.9863L46.5195 350.309L49.2734 354H48.002L45.793 351.064ZM55.4727 350.9C55.4727 351.869 55.25 352.648 54.8047 353.238C54.3594 353.824 53.7617 354.117 53.0117 354.117C52.2109 354.117 51.5918 353.834 51.1543 353.268L51.1016 354H50.1055V345H51.1895V348.357C51.627 347.814 52.2305 347.543 53 347.543C53.7695 347.543 54.373 347.834 54.8105 348.416C55.252 348.998 55.4727 349.795 55.4727 350.807V350.9ZM54.3887 350.777C54.3887 350.039 54.2461 349.469 53.9609 349.066C53.6758 348.664 53.2656 348.463 52.7305 348.463C52.0156 348.463 51.502 348.795 51.1895 349.459V352.201C51.5215 352.865 52.0391 353.197 52.7422 353.197C53.2617 353.197 53.666 352.996 53.9551 352.594C54.2441 352.191 54.3887 351.586 54.3887 350.777ZM56.5566 350.771C56.5566 350.15 56.6777 349.592 56.9199 349.096C57.166 348.6 57.5059 348.217 57.9395 347.947C58.377 347.678 58.875 347.543 59.4336 347.543C60.2969 347.543 60.9941 347.842 61.5254 348.439C62.0605 349.037 62.3281 349.832 62.3281 350.824V350.9C62.3281 351.518 62.209 352.072 61.9707 352.564C61.7363 353.053 61.3984 353.434 60.957 353.707C60.5195 353.98 60.0156 354.117 59.4453 354.117C58.5859 354.117 57.8887 353.818 57.3535 353.221C56.8223 352.623 56.5566 351.832 56.5566 350.848V350.771ZM57.6465 350.9C57.6465 351.604 57.8086 352.168 58.1328 352.594C58.4609 353.02 58.8984 353.232 59.4453 353.232C59.9961 353.232 60.4336 353.018 60.7578 352.588C61.082 352.154 61.2441 351.549 61.2441 350.771C61.2441 350.076 61.0781 349.514 60.7461 349.084C60.418 348.65 59.9805 348.434 59.4336 348.434C58.8984 348.434 58.4668 348.646 58.1387 349.072C57.8105 349.498 57.6465 350.107 57.6465 350.9ZM65.6855 349.975L67.0918 347.66H68.3574L66.2832 350.795L68.4219 354H67.168L65.7031 351.627L64.2383 354H62.9785L65.1172 350.795L63.043 347.66H64.2969L65.6855 349.975Z"
          fill="black"
        />
        <path
          d="M262.695 253.232H259.115V257H257.99V248.469H263.275V249.395H259.115V252.312H262.695V253.232ZM264.037 253.771C264.037 253.15 264.158 252.592 264.4 252.096C264.646 251.6 264.986 251.217 265.42 250.947C265.857 250.678 266.355 250.543 266.914 250.543C267.777 250.543 268.475 250.842 269.006 251.439C269.541 252.037 269.809 252.832 269.809 253.824V253.9C269.809 254.518 269.689 255.072 269.451 255.564C269.217 256.053 268.879 256.434 268.438 256.707C268 256.98 267.496 257.117 266.926 257.117C266.066 257.117 265.369 256.818 264.834 256.221C264.303 255.623 264.037 254.832 264.037 253.848V253.771ZM265.127 253.9C265.127 254.604 265.289 255.168 265.613 255.594C265.941 256.02 266.379 256.232 266.926 256.232C267.477 256.232 267.914 256.018 268.238 255.588C268.562 255.154 268.725 254.549 268.725 253.771C268.725 253.076 268.559 252.514 268.227 252.084C267.898 251.65 267.461 251.434 266.914 251.434C266.379 251.434 265.947 251.646 265.619 252.072C265.291 252.498 265.127 253.107 265.127 253.9ZM274.232 251.633C274.068 251.605 273.891 251.592 273.699 251.592C272.988 251.592 272.506 251.895 272.252 252.5V257H271.168V250.66H272.223L272.24 251.393C272.596 250.826 273.1 250.543 273.752 250.543C273.963 250.543 274.123 250.57 274.232 250.625V251.633ZM276.998 249.125V250.66H278.182V251.498H276.998V255.43C276.998 255.684 277.051 255.875 277.156 256.004C277.262 256.129 277.441 256.191 277.695 256.191C277.82 256.191 277.992 256.168 278.211 256.121V257C277.926 257.078 277.648 257.117 277.379 257.117C276.895 257.117 276.529 256.971 276.283 256.678C276.037 256.385 275.914 255.969 275.914 255.43V251.498H274.76V250.66H275.914V249.125H276.998ZM282.518 251.633C282.354 251.605 282.176 251.592 281.984 251.592C281.273 251.592 280.791 251.895 280.537 252.5V257H279.453V250.66H280.508L280.525 251.393C280.881 250.826 281.385 250.543 282.037 250.543C282.248 250.543 282.408 250.57 282.518 250.625V251.633ZM287.199 257C287.137 256.875 287.086 256.652 287.047 256.332C286.543 256.855 285.941 257.117 285.242 257.117C284.617 257.117 284.104 256.941 283.701 256.59C283.303 256.234 283.104 255.785 283.104 255.242C283.104 254.582 283.354 254.07 283.854 253.707C284.357 253.34 285.064 253.156 285.975 253.156H287.029V252.658C287.029 252.279 286.916 251.979 286.689 251.756C286.463 251.529 286.129 251.416 285.688 251.416C285.301 251.416 284.977 251.514 284.715 251.709C284.453 251.904 284.322 252.141 284.322 252.418H283.232C283.232 252.102 283.344 251.797 283.566 251.504C283.793 251.207 284.098 250.973 284.48 250.801C284.867 250.629 285.291 250.543 285.752 250.543C286.482 250.543 287.055 250.727 287.469 251.094C287.883 251.457 288.098 251.959 288.113 252.6V255.518C288.113 256.1 288.188 256.562 288.336 256.906V257H287.199ZM285.4 256.174C285.74 256.174 286.062 256.086 286.367 255.91C286.672 255.734 286.893 255.506 287.029 255.225V253.924H286.18C284.852 253.924 284.188 254.312 284.188 255.09C284.188 255.43 284.301 255.695 284.527 255.887C284.754 256.078 285.045 256.174 285.4 256.174ZM290.838 250.66L290.873 251.457C291.357 250.848 291.99 250.543 292.771 250.543C294.111 250.543 294.787 251.299 294.799 252.811V257H293.715V252.805C293.711 252.348 293.605 252.01 293.398 251.791C293.195 251.572 292.877 251.463 292.443 251.463C292.092 251.463 291.783 251.557 291.518 251.744C291.252 251.932 291.045 252.178 290.896 252.482V257H289.812V250.66H290.838Z"
          fill="black"
        />
        <path
          d="M418.812 253.057H415.115V256.08H419.41V257H413.99V248.469H419.352V249.395H415.115V252.137H418.812V253.057ZM424.449 256.373C424.027 256.869 423.408 257.117 422.592 257.117C421.916 257.117 421.4 256.922 421.045 256.531C420.693 256.137 420.516 255.555 420.512 254.785V250.66H421.596V254.756C421.596 255.717 421.986 256.197 422.768 256.197C423.596 256.197 424.146 255.889 424.42 255.271V250.66H425.504V257H424.473L424.449 256.373ZM428.334 257H427.25V248H428.334V257ZM432.705 257.117C431.846 257.117 431.146 256.836 430.607 256.273C430.068 255.707 429.799 254.951 429.799 254.006V253.807C429.799 253.178 429.918 252.617 430.156 252.125C430.398 251.629 430.734 251.242 431.164 250.965C431.598 250.684 432.066 250.543 432.57 250.543C433.395 250.543 434.035 250.814 434.492 251.357C434.949 251.9 435.178 252.678 435.178 253.689V254.141H430.883C430.898 254.766 431.08 255.271 431.428 255.658C431.779 256.041 432.225 256.232 432.764 256.232C433.146 256.232 433.471 256.154 433.736 255.998C434.002 255.842 434.234 255.635 434.434 255.377L435.096 255.893C434.564 256.709 433.768 257.117 432.705 257.117ZM432.57 251.434C432.133 251.434 431.766 251.594 431.469 251.914C431.172 252.23 430.988 252.676 430.918 253.25H434.094V253.168C434.062 252.617 433.914 252.191 433.648 251.891C433.383 251.586 433.023 251.434 432.57 251.434ZM439.502 251.633C439.338 251.605 439.16 251.592 438.969 251.592C438.258 251.592 437.775 251.895 437.521 252.5V257H436.438V250.66H437.492L437.51 251.393C437.865 250.826 438.369 250.543 439.021 250.543C439.232 250.543 439.393 250.57 439.502 250.625V251.633Z"
          fill="black"
        />
        <path
          d="M535.812 253.057H532.115V256.08H536.41V257H530.99V248.469H536.352V249.395H532.115V252.137H535.812V253.057ZM541.449 256.373C541.027 256.869 540.408 257.117 539.592 257.117C538.916 257.117 538.4 256.922 538.045 256.531C537.693 256.137 537.516 255.555 537.512 254.785V250.66H538.596V254.756C538.596 255.717 538.986 256.197 539.768 256.197C540.596 256.197 541.146 255.889 541.42 255.271V250.66H542.504V257H541.473L541.449 256.373ZM546.699 256.232C547.086 256.232 547.424 256.115 547.713 255.881C548.002 255.646 548.162 255.354 548.193 255.002H549.219C549.199 255.365 549.074 255.711 548.844 256.039C548.613 256.367 548.305 256.629 547.918 256.824C547.535 257.02 547.129 257.117 546.699 257.117C545.836 257.117 545.148 256.83 544.637 256.256C544.129 255.678 543.875 254.889 543.875 253.889V253.707C543.875 253.09 543.988 252.541 544.215 252.061C544.441 251.58 544.766 251.207 545.188 250.941C545.613 250.676 546.115 250.543 546.693 250.543C547.404 250.543 547.994 250.756 548.463 251.182C548.936 251.607 549.188 252.16 549.219 252.84H548.193C548.162 252.43 548.006 252.094 547.725 251.832C547.447 251.566 547.104 251.434 546.693 251.434C546.143 251.434 545.715 251.633 545.41 252.031C545.109 252.426 544.959 252.998 544.959 253.748V253.953C544.959 254.684 545.109 255.246 545.41 255.641C545.711 256.035 546.141 256.232 546.699 256.232ZM551.615 257H550.531V248H551.615V257ZM554.533 257H553.449V250.66H554.533V257ZM553.361 248.979C553.361 248.803 553.414 248.654 553.52 248.533C553.629 248.412 553.789 248.352 554 248.352C554.211 248.352 554.371 248.412 554.48 248.533C554.59 248.654 554.645 248.803 554.645 248.979C554.645 249.154 554.59 249.301 554.48 249.418C554.371 249.535 554.211 249.594 554 249.594C553.789 249.594 553.629 249.535 553.52 249.418C553.414 249.301 553.361 249.154 553.361 248.979ZM556.01 253.777C556.01 252.805 556.24 252.023 556.701 251.434C557.162 250.84 557.766 250.543 558.512 250.543C559.254 250.543 559.842 250.797 560.275 251.305V248H561.359V257H560.363L560.311 256.32C559.877 256.852 559.273 257.117 558.5 257.117C557.766 257.117 557.166 256.816 556.701 256.215C556.24 255.613 556.01 254.828 556.01 253.859V253.777ZM557.094 253.9C557.094 254.619 557.242 255.182 557.539 255.588C557.836 255.994 558.246 256.197 558.77 256.197C559.457 256.197 559.959 255.889 560.275 255.271V252.359C559.951 251.762 559.453 251.463 558.781 251.463C558.25 251.463 557.836 251.668 557.539 252.078C557.242 252.488 557.094 253.096 557.094 253.9Z"
          fill="black"
        />
        <path
          d="M535.812 253.057H532.115V256.08H536.41V257H530.99V248.469H536.352V249.395H532.115V252.137H535.812V253.057ZM541.449 256.373C541.027 256.869 540.408 257.117 539.592 257.117C538.916 257.117 538.4 256.922 538.045 256.531C537.693 256.137 537.516 255.555 537.512 254.785V250.66H538.596V254.756C538.596 255.717 538.986 256.197 539.768 256.197C540.596 256.197 541.146 255.889 541.42 255.271V250.66H542.504V257H541.473L541.449 256.373ZM546.699 256.232C547.086 256.232 547.424 256.115 547.713 255.881C548.002 255.646 548.162 255.354 548.193 255.002H549.219C549.199 255.365 549.074 255.711 548.844 256.039C548.613 256.367 548.305 256.629 547.918 256.824C547.535 257.02 547.129 257.117 546.699 257.117C545.836 257.117 545.148 256.83 544.637 256.256C544.129 255.678 543.875 254.889 543.875 253.889V253.707C543.875 253.09 543.988 252.541 544.215 252.061C544.441 251.58 544.766 251.207 545.188 250.941C545.613 250.676 546.115 250.543 546.693 250.543C547.404 250.543 547.994 250.756 548.463 251.182C548.936 251.607 549.188 252.16 549.219 252.84H548.193C548.162 252.43 548.006 252.094 547.725 251.832C547.447 251.566 547.104 251.434 546.693 251.434C546.143 251.434 545.715 251.633 545.41 252.031C545.109 252.426 544.959 252.998 544.959 253.748V253.953C544.959 254.684 545.109 255.246 545.41 255.641C545.711 256.035 546.141 256.232 546.699 256.232ZM551.615 257H550.531V248H551.615V257ZM554.533 257H553.449V250.66H554.533V257ZM553.361 248.979C553.361 248.803 553.414 248.654 553.52 248.533C553.629 248.412 553.789 248.352 554 248.352C554.211 248.352 554.371 248.412 554.48 248.533C554.59 248.654 554.645 248.803 554.645 248.979C554.645 249.154 554.59 249.301 554.48 249.418C554.371 249.535 554.211 249.594 554 249.594C553.789 249.594 553.629 249.535 553.52 249.418C553.414 249.301 553.361 249.154 553.361 248.979ZM556.01 253.777C556.01 252.805 556.24 252.023 556.701 251.434C557.162 250.84 557.766 250.543 558.512 250.543C559.254 250.543 559.842 250.797 560.275 251.305V248H561.359V257H560.363L560.311 256.32C559.877 256.852 559.273 257.117 558.5 257.117C557.766 257.117 557.166 256.816 556.701 256.215C556.24 255.613 556.01 254.828 556.01 253.859V253.777ZM557.094 253.9C557.094 254.619 557.242 255.182 557.539 255.588C557.836 255.994 558.246 256.197 558.77 256.197C559.457 256.197 559.959 255.889 560.275 255.271V252.359C559.951 251.762 559.453 251.463 558.781 251.463C558.25 251.463 557.836 251.668 557.539 252.078C557.242 252.488 557.094 253.096 557.094 253.9Z"
          fill="black"
        />
        <path
          d="M632.812 253.057H629.115V256.08H633.41V257H627.99V248.469H633.352V249.395H629.115V252.137H632.812V253.057ZM635.818 257H634.734V250.66H635.818V257ZM634.646 248.979C634.646 248.803 634.699 248.654 634.805 248.533C634.914 248.412 635.074 248.352 635.285 248.352C635.496 248.352 635.656 248.412 635.766 248.533C635.875 248.654 635.93 248.803 635.93 248.979C635.93 249.154 635.875 249.301 635.766 249.418C635.656 249.535 635.496 249.594 635.285 249.594C635.074 249.594 634.914 249.535 634.805 249.418C634.699 249.301 634.646 249.154 634.646 248.979ZM638.092 257V251.498H637.09V250.66H638.092V250.01C638.092 249.33 638.273 248.805 638.637 248.434C639 248.062 639.514 247.877 640.178 247.877C640.428 247.877 640.676 247.91 640.922 247.977L640.863 248.855C640.68 248.82 640.484 248.803 640.277 248.803C639.926 248.803 639.654 248.906 639.463 249.113C639.271 249.316 639.176 249.609 639.176 249.992V250.66H640.529V251.498H639.176V257H638.092ZM642.264 257V251.498H641.262V250.66H642.264V250.01C642.264 249.33 642.445 248.805 642.809 248.434C643.172 248.062 643.686 247.877 644.35 247.877C644.6 247.877 644.848 247.91 645.094 247.977L645.035 248.855C644.852 248.82 644.656 248.803 644.449 248.803C644.098 248.803 643.826 248.906 643.635 249.113C643.443 249.316 643.348 249.609 643.348 249.992V250.66H644.701V251.498H643.348V257H642.264ZM648.393 257.117C647.533 257.117 646.834 256.836 646.295 256.273C645.756 255.707 645.486 254.951 645.486 254.006V253.807C645.486 253.178 645.605 252.617 645.844 252.125C646.086 251.629 646.422 251.242 646.852 250.965C647.285 250.684 647.754 250.543 648.258 250.543C649.082 250.543 649.723 250.814 650.18 251.357C650.637 251.9 650.865 252.678 650.865 253.689V254.141H646.57C646.586 254.766 646.768 255.271 647.115 255.658C647.467 256.041 647.912 256.232 648.451 256.232C648.834 256.232 649.158 256.154 649.424 255.998C649.689 255.842 649.922 255.635 650.121 255.377L650.783 255.893C650.252 256.709 649.455 257.117 648.393 257.117ZM648.258 251.434C647.82 251.434 647.453 251.594 647.156 251.914C646.859 252.23 646.676 252.676 646.605 253.25H649.781V253.168C649.75 252.617 649.602 252.191 649.336 251.891C649.07 251.586 648.711 251.434 648.258 251.434ZM653.303 257H652.219V248H653.303V257Z"
          fill="black"
        />
        <path
          d="M749.266 254.293C749.16 255.195 748.826 255.893 748.264 256.385C747.705 256.873 746.961 257.117 746.031 257.117C745.023 257.117 744.215 256.756 743.605 256.033C743 255.311 742.697 254.344 742.697 253.133V252.312C742.697 251.52 742.838 250.822 743.119 250.221C743.404 249.619 743.807 249.158 744.326 248.838C744.846 248.514 745.447 248.352 746.131 248.352C747.037 248.352 747.764 248.605 748.311 249.113C748.857 249.617 749.176 250.316 749.266 251.211H748.135C748.037 250.531 747.824 250.039 747.496 249.734C747.172 249.43 746.717 249.277 746.131 249.277C745.412 249.277 744.848 249.543 744.438 250.074C744.031 250.605 743.828 251.361 743.828 252.342V253.168C743.828 254.094 744.021 254.83 744.408 255.377C744.795 255.924 745.336 256.197 746.031 256.197C746.656 256.197 747.135 256.057 747.467 255.775C747.803 255.49 748.025 254.996 748.135 254.293H749.266ZM750.35 253.771C750.35 253.15 750.471 252.592 750.713 252.096C750.959 251.6 751.299 251.217 751.732 250.947C752.17 250.678 752.668 250.543 753.227 250.543C754.09 250.543 754.787 250.842 755.318 251.439C755.854 252.037 756.121 252.832 756.121 253.824V253.9C756.121 254.518 756.002 255.072 755.764 255.564C755.529 256.053 755.191 256.434 754.75 256.707C754.312 256.98 753.809 257.117 753.238 257.117C752.379 257.117 751.682 256.818 751.146 256.221C750.615 255.623 750.35 254.832 750.35 253.848V253.771ZM751.439 253.9C751.439 254.604 751.602 255.168 751.926 255.594C752.254 256.02 752.691 256.232 753.238 256.232C753.789 256.232 754.227 256.018 754.551 255.588C754.875 255.154 755.037 254.549 755.037 253.771C755.037 253.076 754.871 252.514 754.539 252.084C754.211 251.65 753.773 251.434 753.227 251.434C752.691 251.434 752.26 251.646 751.932 252.072C751.604 252.498 751.439 253.107 751.439 253.9ZM762.848 253.9C762.848 254.869 762.625 255.648 762.18 256.238C761.734 256.824 761.137 257.117 760.387 257.117C759.586 257.117 758.967 256.834 758.529 256.268L758.477 257H757.48V248H758.564V251.357C759.002 250.814 759.605 250.543 760.375 250.543C761.145 250.543 761.748 250.834 762.186 251.416C762.627 251.998 762.848 252.795 762.848 253.807V253.9ZM761.764 253.777C761.764 253.039 761.621 252.469 761.336 252.066C761.051 251.664 760.641 251.463 760.105 251.463C759.391 251.463 758.877 251.795 758.564 252.459V255.201C758.896 255.865 759.414 256.197 760.117 256.197C760.637 256.197 761.041 255.996 761.33 255.594C761.619 255.191 761.764 254.586 761.764 253.777ZM763.932 253.771C763.932 253.15 764.053 252.592 764.295 252.096C764.541 251.6 764.881 251.217 765.314 250.947C765.752 250.678 766.25 250.543 766.809 250.543C767.672 250.543 768.369 250.842 768.9 251.439C769.436 252.037 769.703 252.832 769.703 253.824V253.9C769.703 254.518 769.584 255.072 769.346 255.564C769.111 256.053 768.773 256.434 768.332 256.707C767.895 256.98 767.391 257.117 766.82 257.117C765.961 257.117 765.264 256.818 764.729 256.221C764.197 255.623 763.932 254.832 763.932 253.848V253.771ZM765.021 253.9C765.021 254.604 765.184 255.168 765.508 255.594C765.836 256.02 766.273 256.232 766.82 256.232C767.371 256.232 767.809 256.018 768.133 255.588C768.457 255.154 768.619 254.549 768.619 253.771C768.619 253.076 768.453 252.514 768.121 252.084C767.793 251.65 767.355 251.434 766.809 251.434C766.273 251.434 765.842 251.646 765.514 252.072C765.186 252.498 765.021 253.107 765.021 253.9ZM772.24 257H771.156V248H772.24V257Z"
          fill="black"
        />
        <path
          d="M914.266 254.293C914.16 255.195 913.826 255.893 913.264 256.385C912.705 256.873 911.961 257.117 911.031 257.117C910.023 257.117 909.215 256.756 908.605 256.033C908 255.311 907.697 254.344 907.697 253.133V252.312C907.697 251.52 907.838 250.822 908.119 250.221C908.404 249.619 908.807 249.158 909.326 248.838C909.846 248.514 910.447 248.352 911.131 248.352C912.037 248.352 912.764 248.605 913.311 249.113C913.857 249.617 914.176 250.316 914.266 251.211H913.135C913.037 250.531 912.824 250.039 912.496 249.734C912.172 249.43 911.717 249.277 911.131 249.277C910.412 249.277 909.848 249.543 909.438 250.074C909.031 250.605 908.828 251.361 908.828 252.342V253.168C908.828 254.094 909.021 254.83 909.408 255.377C909.795 255.924 910.336 256.197 911.031 256.197C911.656 256.197 912.135 256.057 912.467 255.775C912.803 255.49 913.025 254.996 913.135 254.293H914.266ZM916.721 251.428C917.201 250.838 917.826 250.543 918.596 250.543C919.936 250.543 920.611 251.299 920.623 252.811V257H919.539V252.805C919.535 252.348 919.43 252.01 919.223 251.791C919.02 251.572 918.701 251.463 918.268 251.463C917.916 251.463 917.607 251.557 917.342 251.744C917.076 251.932 916.869 252.178 916.721 252.482V257H915.637V248H916.721V251.428ZM923.424 257H922.34V250.66H923.424V257ZM922.252 248.979C922.252 248.803 922.305 248.654 922.41 248.533C922.52 248.412 922.68 248.352 922.891 248.352C923.102 248.352 923.262 248.412 923.371 248.533C923.48 248.654 923.535 248.803 923.535 248.979C923.535 249.154 923.48 249.301 923.371 249.418C923.262 249.535 923.102 249.594 922.891 249.594C922.68 249.594 922.52 249.535 922.41 249.418C922.305 249.301 922.252 249.154 922.252 248.979ZM926.342 257H925.258V248H926.342V257ZM929.26 257H928.176V248H929.26V257Z"
          fill="black"
        />
        <path
          d="M1097.27 254.293C1097.16 255.195 1096.83 255.893 1096.26 256.385C1095.71 256.873 1094.96 257.117 1094.03 257.117C1093.02 257.117 1092.21 256.756 1091.61 256.033C1091 255.311 1090.7 254.344 1090.7 253.133V252.312C1090.7 251.52 1090.84 250.822 1091.12 250.221C1091.4 249.619 1091.81 249.158 1092.33 248.838C1092.85 248.514 1093.45 248.352 1094.13 248.352C1095.04 248.352 1095.76 248.605 1096.31 249.113C1096.86 249.617 1097.18 250.316 1097.27 251.211H1096.13C1096.04 250.531 1095.82 250.039 1095.5 249.734C1095.17 249.43 1094.72 249.277 1094.13 249.277C1093.41 249.277 1092.85 249.543 1092.44 250.074C1092.03 250.605 1091.83 251.361 1091.83 252.342V253.168C1091.83 254.094 1092.02 254.83 1092.41 255.377C1092.79 255.924 1093.34 256.197 1094.03 256.197C1094.66 256.197 1095.13 256.057 1095.47 255.775C1095.8 255.49 1096.03 254.996 1096.13 254.293H1097.27ZM1102.55 257C1102.49 256.875 1102.44 256.652 1102.4 256.332C1101.89 256.855 1101.29 257.117 1100.59 257.117C1099.97 257.117 1099.46 256.941 1099.05 256.59C1098.65 256.234 1098.46 255.785 1098.46 255.242C1098.46 254.582 1098.71 254.07 1099.21 253.707C1099.71 253.34 1100.42 253.156 1101.33 253.156H1102.38V252.658C1102.38 252.279 1102.27 251.979 1102.04 251.756C1101.81 251.529 1101.48 251.416 1101.04 251.416C1100.65 251.416 1100.33 251.514 1100.07 251.709C1099.8 251.904 1099.67 252.141 1099.67 252.418H1098.58C1098.58 252.102 1098.7 251.797 1098.92 251.504C1099.14 251.207 1099.45 250.973 1099.83 250.801C1100.22 250.629 1100.64 250.543 1101.1 250.543C1101.83 250.543 1102.41 250.727 1102.82 251.094C1103.23 251.457 1103.45 251.959 1103.46 252.6V255.518C1103.46 256.1 1103.54 256.562 1103.69 256.906V257H1102.55ZM1100.75 256.174C1101.09 256.174 1101.41 256.086 1101.72 255.91C1102.02 255.734 1102.24 255.506 1102.38 255.225V253.924H1101.53C1100.2 253.924 1099.54 254.312 1099.54 255.09C1099.54 255.43 1099.65 255.695 1099.88 255.887C1100.11 256.078 1100.4 256.174 1100.75 256.174ZM1106.18 250.66L1106.21 251.363C1106.68 250.816 1107.3 250.543 1108.09 250.543C1108.98 250.543 1109.58 250.883 1109.9 251.562C1110.12 251.258 1110.39 251.012 1110.72 250.824C1111.06 250.637 1111.46 250.543 1111.93 250.543C1113.32 250.543 1114.02 251.279 1114.05 252.752V257H1112.96V252.816C1112.96 252.363 1112.86 252.025 1112.65 251.803C1112.45 251.576 1112.1 251.463 1111.61 251.463C1111.21 251.463 1110.87 251.584 1110.61 251.826C1110.34 252.064 1110.19 252.387 1110.14 252.793V257H1109.05V252.846C1109.05 251.924 1108.6 251.463 1107.7 251.463C1106.99 251.463 1106.5 251.766 1106.24 252.371V257H1105.16V250.66H1106.18ZM1116.87 257H1115.78V248H1116.87V257Z"
          fill="black"
        />
        <path
          d="M1269.27 254.293C1269.16 255.195 1268.83 255.893 1268.26 256.385C1267.71 256.873 1266.96 257.117 1266.03 257.117C1265.02 257.117 1264.21 256.756 1263.61 256.033C1263 255.311 1262.7 254.344 1262.7 253.133V252.312C1262.7 251.52 1262.84 250.822 1263.12 250.221C1263.4 249.619 1263.81 249.158 1264.33 248.838C1264.85 248.514 1265.45 248.352 1266.13 248.352C1267.04 248.352 1267.76 248.605 1268.31 249.113C1268.86 249.617 1269.18 250.316 1269.27 251.211H1268.13C1268.04 250.531 1267.82 250.039 1267.5 249.734C1267.17 249.43 1266.72 249.277 1266.13 249.277C1265.41 249.277 1264.85 249.543 1264.44 250.074C1264.03 250.605 1263.83 251.361 1263.83 252.342V253.168C1263.83 254.094 1264.02 254.83 1264.41 255.377C1264.79 255.924 1265.34 256.197 1266.03 256.197C1266.66 256.197 1267.13 256.057 1267.47 255.775C1267.8 255.49 1268.03 254.996 1268.13 254.293H1269.27Z"
          fill="black"
        />
        <path
          d="M1434.99 257V248.469H1437.78C1438.71 248.469 1439.4 248.66 1439.87 249.043C1440.33 249.426 1440.57 249.992 1440.57 250.742C1440.57 251.141 1440.46 251.494 1440.23 251.803C1440 252.107 1439.69 252.344 1439.3 252.512C1439.76 252.641 1440.13 252.887 1440.39 253.25C1440.66 253.609 1440.8 254.039 1440.8 254.539C1440.8 255.305 1440.55 255.906 1440.05 256.344C1439.56 256.781 1438.86 257 1437.95 257H1434.99ZM1436.12 253.01V256.08H1437.97C1438.5 256.08 1438.91 255.945 1439.21 255.676C1439.51 255.402 1439.67 255.027 1439.67 254.551C1439.67 253.523 1439.11 253.01 1437.99 253.01H1436.12ZM1436.12 252.107H1437.81C1438.31 252.107 1438.7 251.984 1438.99 251.738C1439.29 251.492 1439.44 251.158 1439.44 250.736C1439.44 250.268 1439.3 249.928 1439.03 249.717C1438.75 249.502 1438.34 249.395 1437.78 249.395H1436.12V252.107ZM1443.47 257H1442.39V248H1443.47V257ZM1446.39 257H1445.31V250.66H1446.39V257ZM1445.22 248.979C1445.22 248.803 1445.27 248.654 1445.38 248.533C1445.49 248.412 1445.65 248.352 1445.86 248.352C1446.07 248.352 1446.23 248.412 1446.34 248.533C1446.45 248.654 1446.5 248.803 1446.5 248.979C1446.5 249.154 1446.45 249.301 1446.34 249.418C1446.23 249.535 1446.07 249.594 1445.86 249.594C1445.65 249.594 1445.49 249.535 1445.38 249.418C1445.27 249.301 1445.22 249.154 1445.22 248.979ZM1451.82 255.318C1451.82 255.025 1451.71 254.799 1451.49 254.639C1451.27 254.475 1450.89 254.334 1450.34 254.217C1449.79 254.1 1449.35 253.959 1449.03 253.795C1448.71 253.631 1448.47 253.436 1448.31 253.209C1448.16 252.982 1448.09 252.713 1448.09 252.4C1448.09 251.881 1448.3 251.441 1448.74 251.082C1449.18 250.723 1449.75 250.543 1450.43 250.543C1451.15 250.543 1451.73 250.729 1452.18 251.1C1452.62 251.471 1452.85 251.945 1452.85 252.523H1451.76C1451.76 252.227 1451.63 251.971 1451.38 251.756C1451.13 251.541 1450.81 251.434 1450.43 251.434C1450.04 251.434 1449.73 251.52 1449.5 251.691C1449.28 251.863 1449.17 252.088 1449.17 252.365C1449.17 252.627 1449.27 252.824 1449.48 252.957C1449.69 253.09 1450.06 253.217 1450.6 253.338C1451.14 253.459 1451.58 253.604 1451.92 253.771C1452.25 253.939 1452.5 254.143 1452.66 254.381C1452.83 254.615 1452.91 254.902 1452.91 255.242C1452.91 255.809 1452.68 256.264 1452.23 256.607C1451.78 256.947 1451.19 257.117 1450.46 257.117C1449.96 257.117 1449.51 257.027 1449.12 256.848C1448.73 256.668 1448.42 256.418 1448.2 256.098C1447.98 255.773 1447.87 255.424 1447.87 255.049H1448.95C1448.97 255.412 1449.12 255.701 1449.39 255.916C1449.66 256.127 1450.02 256.232 1450.46 256.232C1450.88 256.232 1451.2 256.15 1451.45 255.986C1451.7 255.818 1451.82 255.596 1451.82 255.318ZM1458.01 255.318C1458.01 255.025 1457.9 254.799 1457.68 254.639C1457.46 254.475 1457.07 254.334 1456.52 254.217C1455.98 254.1 1455.54 253.959 1455.22 253.795C1454.9 253.631 1454.66 253.436 1454.5 253.209C1454.35 252.982 1454.27 252.713 1454.27 252.4C1454.27 251.881 1454.49 251.441 1454.93 251.082C1455.37 250.723 1455.93 250.543 1456.62 250.543C1457.34 250.543 1457.92 250.729 1458.36 251.1C1458.81 251.471 1459.04 251.945 1459.04 252.523H1457.95C1457.95 252.227 1457.82 251.971 1457.57 251.756C1457.32 251.541 1457 251.434 1456.62 251.434C1456.22 251.434 1455.91 251.52 1455.69 251.691C1455.47 251.863 1455.36 252.088 1455.36 252.365C1455.36 252.627 1455.46 252.824 1455.67 252.957C1455.88 253.09 1456.25 253.217 1456.79 253.338C1457.33 253.459 1457.77 253.604 1458.11 253.771C1458.44 253.939 1458.69 254.143 1458.85 254.381C1459.01 254.615 1459.1 254.902 1459.1 255.242C1459.1 255.809 1458.87 256.264 1458.42 256.607C1457.96 256.947 1457.38 257.117 1456.65 257.117C1456.14 257.117 1455.7 257.027 1455.3 256.848C1454.91 256.668 1454.61 256.418 1454.38 256.098C1454.17 255.773 1454.06 255.424 1454.06 255.049H1455.14C1455.16 255.412 1455.3 255.701 1455.57 255.916C1455.85 256.127 1456.21 256.232 1456.65 256.232C1457.06 256.232 1457.39 256.15 1457.64 255.986C1457.89 255.818 1458.01 255.596 1458.01 255.318Z"
          fill="black"
        />
        <path
          d="M1748.12 256.08H1752.16V257H1746.99V248.469H1748.12V256.08ZM1754.46 257H1753.37V250.66H1754.46V257ZM1753.28 248.979C1753.28 248.803 1753.34 248.654 1753.44 248.533C1753.55 248.412 1753.71 248.352 1753.92 248.352C1754.13 248.352 1754.29 248.412 1754.4 248.533C1754.51 248.654 1754.57 248.803 1754.57 248.979C1754.57 249.154 1754.51 249.301 1754.4 249.418C1754.29 249.535 1754.13 249.594 1753.92 249.594C1753.71 249.594 1753.55 249.535 1753.44 249.418C1753.34 249.301 1753.28 249.154 1753.28 248.979ZM1757.21 250.66L1757.24 251.363C1757.71 250.816 1758.34 250.543 1759.12 250.543C1760.01 250.543 1760.62 250.883 1760.94 251.562C1761.15 251.258 1761.42 251.012 1761.76 250.824C1762.1 250.637 1762.5 250.543 1762.96 250.543C1764.35 250.543 1765.05 251.279 1765.08 252.752V257H1763.99V252.816C1763.99 252.363 1763.89 252.025 1763.68 251.803C1763.48 251.576 1763.13 251.463 1762.64 251.463C1762.24 251.463 1761.9 251.584 1761.64 251.826C1761.37 252.064 1761.22 252.387 1761.18 252.793V257H1760.09V252.846C1760.09 251.924 1759.63 251.463 1758.73 251.463C1758.02 251.463 1757.54 251.766 1757.27 252.371V257H1756.19V250.66H1757.21ZM1772.09 253.9C1772.09 254.869 1771.86 255.648 1771.42 256.238C1770.97 256.824 1770.38 257.117 1769.62 257.117C1768.82 257.117 1768.21 256.834 1767.77 256.268L1767.71 257H1766.72V248H1767.8V251.357C1768.24 250.814 1768.84 250.543 1769.61 250.543C1770.38 250.543 1770.99 250.834 1771.42 251.416C1771.87 251.998 1772.09 252.795 1772.09 253.807V253.9ZM1771 253.777C1771 253.039 1770.86 252.469 1770.57 252.066C1770.29 251.664 1769.88 251.463 1769.34 251.463C1768.63 251.463 1768.12 251.795 1767.8 252.459V255.201C1768.13 255.865 1768.65 256.197 1769.36 256.197C1769.88 256.197 1770.28 255.996 1770.57 255.594C1770.86 255.191 1771 254.586 1771 253.777ZM1773.17 253.771C1773.17 253.15 1773.29 252.592 1773.53 252.096C1773.78 251.6 1774.12 251.217 1774.55 250.947C1774.99 250.678 1775.49 250.543 1776.05 250.543C1776.91 250.543 1777.61 250.842 1778.14 251.439C1778.67 252.037 1778.94 252.832 1778.94 253.824V253.9C1778.94 254.518 1778.82 255.072 1778.58 255.564C1778.35 256.053 1778.01 256.434 1777.57 256.707C1777.13 256.98 1776.63 257.117 1776.06 257.117C1775.2 257.117 1774.5 256.818 1773.97 256.221C1773.44 255.623 1773.17 254.832 1773.17 253.848V253.771ZM1774.26 253.9C1774.26 254.604 1774.42 255.168 1774.75 255.594C1775.07 256.02 1775.51 256.232 1776.06 256.232C1776.61 256.232 1777.05 256.018 1777.37 255.588C1777.7 255.154 1777.86 254.549 1777.86 253.771C1777.86 253.076 1777.69 252.514 1777.36 252.084C1777.03 251.65 1776.59 251.434 1776.05 251.434C1775.51 251.434 1775.08 251.646 1774.75 252.072C1774.42 252.498 1774.26 253.107 1774.26 253.9Z"
          fill="black"
        />
        <path
          d="M1817.7 535.773H1814.13L1813.32 538H1812.16L1815.42 529.469H1816.41L1819.67 538H1818.52L1817.7 535.773ZM1814.47 534.848H1817.37L1815.91 530.857L1814.47 534.848ZM1826.06 536.506L1827.28 531.66H1828.37L1826.52 538H1825.64L1824.1 533.195L1822.6 538H1821.72L1819.88 531.66H1820.96L1822.21 536.406L1823.68 531.66H1824.56L1826.06 536.506ZM1831.24 535.064L1830.56 535.773V538H1829.48V529H1830.56V534.443L1831.14 533.746L1833.12 531.66H1834.44L1831.97 534.309L1834.72 538H1833.45L1831.24 535.064Z"
          fill="black"
        />
        <path
          d="M1921.7 254.773H1918.13L1917.32 257H1916.16L1919.42 248.469H1920.41L1923.67 257H1922.52L1921.7 254.773ZM1918.47 253.848H1921.37L1919.91 249.857L1918.47 253.848ZM1928.34 255.318C1928.34 255.025 1928.23 254.799 1928.01 254.639C1927.79 254.475 1927.4 254.334 1926.85 254.217C1926.3 254.1 1925.87 253.959 1925.54 253.795C1925.22 253.631 1924.99 253.436 1924.83 253.209C1924.68 252.982 1924.6 252.713 1924.6 252.4C1924.6 251.881 1924.82 251.441 1925.26 251.082C1925.7 250.723 1926.26 250.543 1926.95 250.543C1927.66 250.543 1928.25 250.729 1928.69 251.1C1929.14 251.471 1929.37 251.945 1929.37 252.523H1928.28C1928.28 252.227 1928.15 251.971 1927.89 251.756C1927.64 251.541 1927.33 251.434 1926.95 251.434C1926.55 251.434 1926.24 251.52 1926.02 251.691C1925.8 251.863 1925.69 252.088 1925.69 252.365C1925.69 252.627 1925.79 252.824 1926 252.957C1926.2 253.09 1926.58 253.217 1927.12 253.338C1927.66 253.459 1928.1 253.604 1928.43 253.771C1928.77 253.939 1929.02 254.143 1929.18 254.381C1929.34 254.615 1929.42 254.902 1929.42 255.242C1929.42 255.809 1929.2 256.264 1928.74 256.607C1928.29 256.947 1927.7 257.117 1926.98 257.117C1926.47 257.117 1926.02 257.027 1925.63 256.848C1925.24 256.668 1924.94 256.418 1924.71 256.098C1924.49 255.773 1924.38 255.424 1924.38 255.049H1925.47C1925.49 255.412 1925.63 255.701 1925.9 255.916C1926.18 256.127 1926.54 256.232 1926.98 256.232C1927.39 256.232 1927.72 256.15 1927.96 255.986C1928.21 255.818 1928.34 255.596 1928.34 255.318ZM1934.53 255.318C1934.53 255.025 1934.42 254.799 1934.19 254.639C1933.97 254.475 1933.59 254.334 1933.04 254.217C1932.49 254.1 1932.06 253.959 1931.73 253.795C1931.41 253.631 1931.17 253.436 1931.02 253.209C1930.87 252.982 1930.79 252.713 1930.79 252.4C1930.79 251.881 1931.01 251.441 1931.45 251.082C1931.89 250.723 1932.45 250.543 1933.13 250.543C1933.85 250.543 1934.43 250.729 1934.88 251.1C1935.33 251.471 1935.55 251.945 1935.55 252.523H1934.46C1934.46 252.227 1934.34 251.971 1934.08 251.756C1933.83 251.541 1933.52 251.434 1933.13 251.434C1932.74 251.434 1932.43 251.52 1932.21 251.691C1931.98 251.863 1931.87 252.088 1931.87 252.365C1931.87 252.627 1931.98 252.824 1932.18 252.957C1932.39 253.09 1932.76 253.217 1933.3 253.338C1933.85 253.459 1934.29 253.604 1934.62 253.771C1934.96 253.939 1935.21 254.143 1935.37 254.381C1935.53 254.615 1935.61 254.902 1935.61 255.242C1935.61 255.809 1935.38 256.264 1934.93 256.607C1934.48 256.947 1933.89 257.117 1933.17 257.117C1932.66 257.117 1932.21 257.027 1931.82 256.848C1931.43 256.668 1931.12 256.418 1930.9 256.098C1930.68 255.773 1930.57 255.424 1930.57 255.049H1931.66C1931.68 255.412 1931.82 255.701 1932.09 255.916C1932.36 256.127 1932.72 256.232 1933.17 256.232C1933.58 256.232 1933.91 256.15 1934.15 255.986C1934.4 255.818 1934.53 255.596 1934.53 255.318ZM1939.65 257.117C1938.79 257.117 1938.1 256.836 1937.56 256.273C1937.02 255.707 1936.75 254.951 1936.75 254.006V253.807C1936.75 253.178 1936.87 252.617 1937.11 252.125C1937.35 251.629 1937.68 251.242 1938.11 250.965C1938.55 250.684 1939.02 250.543 1939.52 250.543C1940.34 250.543 1940.98 250.814 1941.44 251.357C1941.9 251.9 1942.13 252.678 1942.13 253.689V254.141H1937.83C1937.85 254.766 1938.03 255.271 1938.38 255.658C1938.73 256.041 1939.17 256.232 1939.71 256.232C1940.1 256.232 1940.42 256.154 1940.69 255.998C1940.95 255.842 1941.18 255.635 1941.38 255.377L1942.04 255.893C1941.51 256.709 1940.72 257.117 1939.65 257.117ZM1939.52 251.434C1939.08 251.434 1938.71 251.594 1938.42 251.914C1938.12 252.23 1937.94 252.676 1937.87 253.25H1941.04V253.168C1941.01 252.617 1940.86 252.191 1940.6 251.891C1940.33 251.586 1939.97 251.434 1939.52 251.434ZM1944.41 250.66L1944.44 251.363C1944.9 250.816 1945.53 250.543 1946.32 250.543C1947.2 250.543 1947.81 250.883 1948.13 251.562C1948.34 251.258 1948.61 251.012 1948.95 250.824C1949.29 250.637 1949.69 250.543 1950.15 250.543C1951.54 250.543 1952.25 251.279 1952.27 252.752V257H1951.19V252.816C1951.19 252.363 1951.08 252.025 1950.88 251.803C1950.67 251.576 1950.32 251.463 1949.83 251.463C1949.43 251.463 1949.1 251.584 1948.83 251.826C1948.56 252.064 1948.41 252.387 1948.37 252.793V257H1947.28V252.846C1947.28 251.924 1946.83 251.463 1945.92 251.463C1945.21 251.463 1944.73 251.766 1944.46 252.371V257H1943.38V250.66H1944.41ZM1959.28 253.9C1959.28 254.869 1959.05 255.648 1958.61 256.238C1958.16 256.824 1957.57 257.117 1956.82 257.117C1956.02 257.117 1955.4 256.834 1954.96 256.268L1954.91 257H1953.91V248H1954.99V251.357C1955.43 250.814 1956.04 250.543 1956.8 250.543C1957.57 250.543 1958.18 250.834 1958.62 251.416C1959.06 251.998 1959.28 252.795 1959.28 253.807V253.9ZM1958.19 253.777C1958.19 253.039 1958.05 252.469 1957.77 252.066C1957.48 251.664 1957.07 251.463 1956.54 251.463C1955.82 251.463 1955.31 251.795 1954.99 252.459V255.201C1955.33 255.865 1955.84 256.197 1956.55 256.197C1957.07 256.197 1957.47 255.996 1957.76 255.594C1958.05 255.191 1958.19 254.586 1958.19 253.777ZM1961.83 257H1960.74V248H1961.83V257ZM1966.2 257.117C1965.34 257.117 1964.64 256.836 1964.1 256.273C1963.56 255.707 1963.29 254.951 1963.29 254.006V253.807C1963.29 253.178 1963.41 252.617 1963.65 252.125C1963.89 251.629 1964.23 251.242 1964.66 250.965C1965.09 250.684 1965.56 250.543 1966.06 250.543C1966.89 250.543 1967.53 250.814 1967.98 251.357C1968.44 251.9 1968.67 252.678 1968.67 253.689V254.141H1964.38C1964.39 254.766 1964.57 255.271 1964.92 255.658C1965.27 256.041 1965.72 256.232 1966.26 256.232C1966.64 256.232 1966.96 256.154 1967.23 255.998C1967.49 255.842 1967.73 255.635 1967.93 255.377L1968.59 255.893C1968.06 256.709 1967.26 257.117 1966.2 257.117ZM1966.06 251.434C1965.62 251.434 1965.26 251.594 1964.96 251.914C1964.66 252.23 1964.48 252.676 1964.41 253.25H1967.59V253.168C1967.55 252.617 1967.41 252.191 1967.14 251.891C1966.88 251.586 1966.52 251.434 1966.06 251.434ZM1972.99 251.633C1972.83 251.605 1972.65 251.592 1972.46 251.592C1971.75 251.592 1971.27 251.895 1971.01 252.5V257H1969.93V250.66H1970.98L1971 251.393C1971.36 250.826 1971.86 250.543 1972.51 250.543C1972.72 250.543 1972.88 250.57 1972.99 250.625V251.633Z"
          fill="black"
        />
        <path
          d="M2103.7 254.773H2100.13L2099.32 257H2098.16L2101.42 248.469H2102.41L2105.67 257H2104.52L2103.7 254.773ZM2100.47 253.848H2103.37L2101.91 249.857L2100.47 253.848ZM2107.83 257H2106.74V248H2107.83V257ZM2109.31 253.777C2109.31 252.789 2109.54 252.004 2109.99 251.422C2110.45 250.836 2111.06 250.543 2111.81 250.543C2112.58 250.543 2113.19 250.816 2113.62 251.363L2113.67 250.66H2114.66V256.848C2114.66 257.668 2114.42 258.314 2113.93 258.787C2113.45 259.26 2112.79 259.496 2111.97 259.496C2111.52 259.496 2111.07 259.398 2110.63 259.203C2110.2 259.008 2109.86 258.74 2109.63 258.4L2110.19 257.75C2110.66 258.324 2111.23 258.611 2111.9 258.611C2112.43 258.611 2112.84 258.463 2113.13 258.166C2113.43 257.869 2113.57 257.451 2113.57 256.912V256.367C2113.14 256.867 2112.55 257.117 2111.8 257.117C2111.06 257.117 2110.46 256.818 2109.99 256.221C2109.54 255.623 2109.31 254.809 2109.31 253.777ZM2110.4 253.9C2110.4 254.615 2110.54 255.178 2110.84 255.588C2111.13 255.994 2111.54 256.197 2112.07 256.197C2112.75 256.197 2113.25 255.887 2113.57 255.266V252.371C2113.24 251.766 2112.74 251.463 2112.08 251.463C2111.55 251.463 2111.14 251.668 2110.84 252.078C2110.55 252.488 2110.4 253.096 2110.4 253.9ZM2116.02 253.771C2116.02 253.15 2116.14 252.592 2116.38 252.096C2116.63 251.6 2116.97 251.217 2117.4 250.947C2117.84 250.678 2118.34 250.543 2118.89 250.543C2119.76 250.543 2120.46 250.842 2120.99 251.439C2121.52 252.037 2121.79 252.832 2121.79 253.824V253.9C2121.79 254.518 2121.67 255.072 2121.43 255.564C2121.2 256.053 2120.86 256.434 2120.42 256.707C2119.98 256.98 2119.48 257.117 2118.91 257.117C2118.05 257.117 2117.35 256.818 2116.81 256.221C2116.28 255.623 2116.02 254.832 2116.02 253.848V253.771ZM2117.11 253.9C2117.11 254.604 2117.27 255.168 2117.59 255.594C2117.92 256.02 2118.36 256.232 2118.91 256.232C2119.46 256.232 2119.89 256.018 2120.22 255.588C2120.54 255.154 2120.71 254.549 2120.71 253.771C2120.71 253.076 2120.54 252.514 2120.21 252.084C2119.88 251.65 2119.44 251.434 2118.89 251.434C2118.36 251.434 2117.93 251.646 2117.6 252.072C2117.27 252.498 2117.11 253.107 2117.11 253.9ZM2124.33 257H2123.24V248H2124.33V257Z"
          fill="black"
        />
        <path
          d="M2313.7 253.232H2310.12V257H2308.99V248.469H2314.28V249.395H2310.12V252.312H2313.7V253.232ZM2315.04 253.771C2315.04 253.15 2315.16 252.592 2315.4 252.096C2315.65 251.6 2315.99 251.217 2316.42 250.947C2316.86 250.678 2317.36 250.543 2317.91 250.543C2318.78 250.543 2319.47 250.842 2320.01 251.439C2320.54 252.037 2320.81 252.832 2320.81 253.824V253.9C2320.81 254.518 2320.69 255.072 2320.45 255.564C2320.22 256.053 2319.88 256.434 2319.44 256.707C2319 256.98 2318.5 257.117 2317.93 257.117C2317.07 257.117 2316.37 256.818 2315.83 256.221C2315.3 255.623 2315.04 254.832 2315.04 253.848V253.771ZM2316.13 253.9C2316.13 254.604 2316.29 255.168 2316.61 255.594C2316.94 256.02 2317.38 256.232 2317.93 256.232C2318.48 256.232 2318.91 256.018 2319.24 255.588C2319.56 255.154 2319.72 254.549 2319.72 253.771C2319.72 253.076 2319.56 252.514 2319.23 252.084C2318.9 251.65 2318.46 251.434 2317.91 251.434C2317.38 251.434 2316.95 251.646 2316.62 252.072C2316.29 252.498 2316.13 253.107 2316.13 253.9ZM2325.23 251.633C2325.07 251.605 2324.89 251.592 2324.7 251.592C2323.99 251.592 2323.51 251.895 2323.25 252.5V257H2322.17V250.66H2323.22L2323.24 251.393C2323.6 250.826 2324.1 250.543 2324.75 250.543C2324.96 250.543 2325.12 250.57 2325.23 250.625V251.633ZM2328.75 257.117C2327.89 257.117 2327.19 256.836 2326.65 256.273C2326.11 255.707 2325.84 254.951 2325.84 254.006V253.807C2325.84 253.178 2325.96 252.617 2326.2 252.125C2326.44 251.629 2326.78 251.242 2327.21 250.965C2327.64 250.684 2328.11 250.543 2328.61 250.543C2329.44 250.543 2330.08 250.814 2330.54 251.357C2330.99 251.9 2331.22 252.678 2331.22 253.689V254.141H2326.93C2326.94 254.766 2327.12 255.271 2327.47 255.658C2327.82 256.041 2328.27 256.232 2328.81 256.232C2329.19 256.232 2329.51 256.154 2329.78 255.998C2330.04 255.842 2330.28 255.635 2330.48 255.377L2331.14 255.893C2330.61 256.709 2329.81 257.117 2328.75 257.117ZM2328.61 251.434C2328.18 251.434 2327.81 251.594 2327.51 251.914C2327.21 252.23 2327.03 252.676 2326.96 253.25H2330.14V253.168C2330.11 252.617 2329.96 252.191 2329.69 251.891C2329.43 251.586 2329.07 251.434 2328.61 251.434ZM2333.51 250.66L2333.54 251.457C2334.03 250.848 2334.66 250.543 2335.44 250.543C2336.78 250.543 2337.46 251.299 2337.47 252.811V257H2336.38V252.805C2336.38 252.348 2336.27 252.01 2336.07 251.791C2335.86 251.572 2335.54 251.463 2335.11 251.463C2334.76 251.463 2334.45 251.557 2334.19 251.744C2333.92 251.932 2333.71 252.178 2333.56 252.482V257H2332.48V250.66H2333.51ZM2340.28 257H2339.2V250.66H2340.28V257ZM2339.11 248.979C2339.11 248.803 2339.16 248.654 2339.27 248.533C2339.38 248.412 2339.54 248.352 2339.75 248.352C2339.96 248.352 2340.12 248.412 2340.23 248.533C2340.34 248.654 2340.39 248.803 2340.39 248.979C2340.39 249.154 2340.34 249.301 2340.23 249.418C2340.12 249.535 2339.96 249.594 2339.75 249.594C2339.54 249.594 2339.38 249.535 2339.27 249.418C2339.16 249.301 2339.11 249.154 2339.11 248.979ZM2343.04 250.66L2343.08 251.457C2343.56 250.848 2344.2 250.543 2344.98 250.543C2346.32 250.543 2346.99 251.299 2347.01 252.811V257H2345.92V252.805C2345.92 252.348 2345.81 252.01 2345.61 251.791C2345.4 251.572 2345.08 251.463 2344.65 251.463C2344.3 251.463 2343.99 251.557 2343.72 251.744C2343.46 251.932 2343.25 252.178 2343.1 252.482V257H2342.02V250.66H2343.04ZM2348.38 253.777C2348.38 252.789 2348.61 252.004 2349.07 251.422C2349.53 250.836 2350.13 250.543 2350.88 250.543C2351.66 250.543 2352.26 250.816 2352.7 251.363L2352.75 250.66H2353.74V256.848C2353.74 257.668 2353.49 258.314 2353.01 258.787C2352.52 259.26 2351.87 259.496 2351.05 259.496C2350.59 259.496 2350.14 259.398 2349.71 259.203C2349.27 259.008 2348.94 258.74 2348.71 258.4L2349.27 257.75C2349.73 258.324 2350.3 258.611 2350.97 258.611C2351.5 258.611 2351.91 258.463 2352.2 258.166C2352.5 257.869 2352.65 257.451 2352.65 256.912V256.367C2352.21 256.867 2351.62 257.117 2350.87 257.117C2350.13 257.117 2349.53 256.818 2349.07 256.221C2348.61 255.623 2348.38 254.809 2348.38 253.777ZM2349.47 253.9C2349.47 254.615 2349.62 255.178 2349.91 255.588C2350.21 255.994 2350.62 256.197 2351.14 256.197C2351.83 256.197 2352.33 255.887 2352.65 255.266V252.371C2352.32 251.766 2351.82 251.463 2351.15 251.463C2350.63 251.463 2350.21 251.668 2349.92 252.078C2349.62 252.488 2349.47 253.096 2349.47 253.9ZM2359.07 255.318C2359.07 255.025 2358.96 254.799 2358.74 254.639C2358.52 254.475 2358.13 254.334 2357.58 254.217C2357.04 254.1 2356.6 253.959 2356.28 253.795C2355.96 253.631 2355.72 253.436 2355.56 253.209C2355.41 252.982 2355.33 252.713 2355.33 252.4C2355.33 251.881 2355.55 251.441 2355.99 251.082C2356.43 250.723 2356.99 250.543 2357.68 250.543C2358.39 250.543 2358.98 250.729 2359.42 251.1C2359.87 251.471 2360.1 251.945 2360.1 252.523H2359.01C2359.01 252.227 2358.88 251.971 2358.62 251.756C2358.38 251.541 2358.06 251.434 2357.68 251.434C2357.28 251.434 2356.97 251.52 2356.75 251.691C2356.53 251.863 2356.42 252.088 2356.42 252.365C2356.42 252.627 2356.52 252.824 2356.73 252.957C2356.93 253.09 2357.31 253.217 2357.85 253.338C2358.39 253.459 2358.83 253.604 2359.16 253.771C2359.5 253.939 2359.75 254.143 2359.91 254.381C2360.07 254.615 2360.15 254.902 2360.15 255.242C2360.15 255.809 2359.93 256.264 2359.47 256.607C2359.02 256.947 2358.43 257.117 2357.71 257.117C2357.2 257.117 2356.75 257.027 2356.36 256.848C2355.97 256.668 2355.67 256.418 2355.44 256.098C2355.22 255.773 2355.12 255.424 2355.12 255.049H2356.2C2356.22 255.412 2356.36 255.701 2356.63 255.916C2356.91 256.127 2357.27 256.232 2357.71 256.232C2358.12 256.232 2358.45 256.15 2358.7 255.986C2358.95 255.818 2359.07 255.596 2359.07 255.318ZM2363.34 254.064L2362.66 254.773V257H2361.57V248H2362.66V253.443L2363.24 252.746L2365.21 250.66H2366.53L2364.06 253.309L2366.82 257H2365.54L2363.34 254.064ZM2367.36 253.771C2367.36 253.15 2367.48 252.592 2367.72 252.096C2367.97 251.6 2368.31 251.217 2368.74 250.947C2369.18 250.678 2369.68 250.543 2370.24 250.543C2371.1 250.543 2371.8 250.842 2372.33 251.439C2372.87 252.037 2373.13 252.832 2373.13 253.824V253.9C2373.13 254.518 2373.01 255.072 2372.78 255.564C2372.54 256.053 2372.2 256.434 2371.76 256.707C2371.32 256.98 2370.82 257.117 2370.25 257.117C2369.39 257.117 2368.69 256.818 2368.16 256.221C2367.63 255.623 2367.36 254.832 2367.36 253.848V253.771ZM2368.45 253.9C2368.45 254.604 2368.61 255.168 2368.94 255.594C2369.27 256.02 2369.7 256.232 2370.25 256.232C2370.8 256.232 2371.24 256.018 2371.56 255.588C2371.89 255.154 2372.05 254.549 2372.05 253.771C2372.05 253.076 2371.88 252.514 2371.55 252.084C2371.22 251.65 2370.79 251.434 2370.24 251.434C2369.7 251.434 2369.27 251.646 2368.94 252.072C2368.62 252.498 2368.45 253.107 2368.45 253.9ZM2375.52 250.66L2375.55 251.457C2376.04 250.848 2376.67 250.543 2377.45 250.543C2378.79 250.543 2379.47 251.299 2379.48 252.811V257H2378.39V252.805C2378.39 252.348 2378.29 252.01 2378.08 251.791C2377.88 251.572 2377.56 251.463 2377.12 251.463C2376.77 251.463 2376.46 251.557 2376.2 251.744C2375.93 251.932 2375.72 252.178 2375.58 252.482V257H2374.49V250.66H2375.52ZM2382.58 249.125V250.66H2383.77V251.498H2382.58V255.43C2382.58 255.684 2382.64 255.875 2382.74 256.004C2382.85 256.129 2383.03 256.191 2383.28 256.191C2383.41 256.191 2383.58 256.168 2383.8 256.121V257C2383.51 257.078 2383.23 257.117 2382.96 257.117C2382.48 257.117 2382.12 256.971 2381.87 256.678C2381.62 256.385 2381.5 255.969 2381.5 255.43V251.498H2380.35V250.66H2381.5V249.125H2382.58ZM2384.63 253.771C2384.63 253.15 2384.76 252.592 2385 252.096C2385.24 251.6 2385.58 251.217 2386.02 250.947C2386.46 250.678 2386.95 250.543 2387.51 250.543C2388.38 250.543 2389.07 250.842 2389.6 251.439C2390.14 252.037 2390.41 252.832 2390.41 253.824V253.9C2390.41 254.518 2390.29 255.072 2390.05 255.564C2389.81 256.053 2389.48 256.434 2389.04 256.707C2388.6 256.98 2388.09 257.117 2387.52 257.117C2386.66 257.117 2385.97 256.818 2385.43 256.221C2384.9 255.623 2384.63 254.832 2384.63 253.848V253.771ZM2385.72 253.9C2385.72 254.604 2385.89 255.168 2386.21 255.594C2386.54 256.02 2386.98 256.232 2387.52 256.232C2388.07 256.232 2388.51 256.018 2388.84 255.588C2389.16 255.154 2389.32 254.549 2389.32 253.771C2389.32 253.076 2389.16 252.514 2388.82 252.084C2388.5 251.65 2388.06 251.434 2387.51 251.434C2386.98 251.434 2386.54 251.646 2386.22 252.072C2385.89 252.498 2385.72 253.107 2385.72 253.9ZM2394.83 251.633C2394.67 251.605 2394.49 251.592 2394.3 251.592C2393.59 251.592 2393.1 251.895 2392.85 252.5V257H2391.77V250.66H2392.82L2392.84 251.393C2393.19 250.826 2393.7 250.543 2394.35 250.543C2394.56 250.543 2394.72 250.57 2394.83 250.625V251.633ZM2398.35 257.117C2397.49 257.117 2396.79 256.836 2396.25 256.273C2395.71 255.707 2395.44 254.951 2395.44 254.006V253.807C2395.44 253.178 2395.56 252.617 2395.8 252.125C2396.04 251.629 2396.38 251.242 2396.8 250.965C2397.24 250.684 2397.71 250.543 2398.21 250.543C2399.04 250.543 2399.68 250.814 2400.13 251.357C2400.59 251.9 2400.82 252.678 2400.82 253.689V254.141H2396.52C2396.54 254.766 2396.72 255.271 2397.07 255.658C2397.42 256.041 2397.87 256.232 2398.4 256.232C2398.79 256.232 2399.11 256.154 2399.38 255.998C2399.64 255.842 2399.88 255.635 2400.07 255.377L2400.74 255.893C2400.21 256.709 2399.41 257.117 2398.35 257.117ZM2398.21 251.434C2397.77 251.434 2397.41 251.594 2397.11 251.914C2396.81 252.23 2396.63 252.676 2396.56 253.25H2399.73V253.168C2399.7 252.617 2399.55 252.191 2399.29 251.891C2399.02 251.586 2398.66 251.434 2398.21 251.434ZM2403.55 249.125V250.66H2404.73V251.498H2403.55V255.43C2403.55 255.684 2403.6 255.875 2403.71 256.004C2403.81 256.129 2403.99 256.191 2404.25 256.191C2404.37 256.191 2404.54 256.168 2404.76 256.121V257C2404.48 257.078 2404.2 257.117 2403.93 257.117C2403.45 257.117 2403.08 256.971 2402.83 256.678C2402.59 256.385 2402.46 255.969 2402.46 255.43V251.498H2401.31V250.66H2402.46V249.125H2403.55Z"
          fill="black"
        />
        <path
          d="M2373.7 377.232H2370.12V381H2368.99V372.469H2374.28V373.395H2370.12V376.312H2373.7V377.232ZM2381.63 372.469V378.27C2381.62 379.074 2381.37 379.732 2380.87 380.244C2380.37 380.756 2379.69 381.043 2378.83 381.105L2378.53 381.117C2377.6 381.117 2376.85 380.865 2376.3 380.361C2375.74 379.857 2375.46 379.164 2375.45 378.281V372.469H2376.57V378.246C2376.57 378.863 2376.74 379.344 2377.08 379.688C2377.42 380.027 2377.9 380.197 2378.53 380.197C2379.17 380.197 2379.65 380.027 2379.99 379.688C2380.33 379.348 2380.5 378.869 2380.5 378.252V372.469H2381.63ZM2384.61 381H2383.49V372.469H2384.61V381Z"
          fill="black"
        />
        <path
          d="M2209.5 253.197C2208.54 252.92 2207.84 252.58 2207.39 252.178C2206.96 251.771 2206.74 251.271 2206.74 250.678C2206.74 250.006 2207.01 249.451 2207.54 249.014C2208.08 248.572 2208.78 248.352 2209.64 248.352C2210.22 248.352 2210.75 248.465 2211.2 248.691C2211.66 248.918 2212.02 249.23 2212.27 249.629C2212.52 250.027 2212.65 250.463 2212.65 250.936H2211.52C2211.52 250.42 2211.36 250.016 2211.03 249.723C2210.7 249.426 2210.24 249.277 2209.64 249.277C2209.08 249.277 2208.65 249.4 2208.34 249.646C2208.03 249.889 2207.88 250.227 2207.88 250.66C2207.88 251.008 2208.02 251.303 2208.31 251.545C2208.61 251.783 2209.11 252.002 2209.82 252.201C2210.53 252.4 2211.09 252.621 2211.48 252.863C2211.89 253.102 2212.18 253.381 2212.38 253.701C2212.57 254.021 2212.67 254.398 2212.67 254.832C2212.67 255.523 2212.4 256.078 2211.86 256.496C2211.32 256.91 2210.6 257.117 2209.7 257.117C2209.11 257.117 2208.56 257.006 2208.06 256.783C2207.55 256.557 2207.16 256.248 2206.88 255.857C2206.61 255.467 2206.47 255.023 2206.47 254.527H2207.6C2207.6 255.043 2207.79 255.451 2208.17 255.752C2208.55 256.049 2209.06 256.197 2209.7 256.197C2210.29 256.197 2210.75 256.076 2211.06 255.834C2211.38 255.592 2211.54 255.262 2211.54 254.844C2211.54 254.426 2211.39 254.104 2211.1 253.877C2210.8 253.646 2210.27 253.42 2209.5 253.197ZM2213.66 253.771C2213.66 253.15 2213.78 252.592 2214.02 252.096C2214.27 251.6 2214.61 251.217 2215.04 250.947C2215.48 250.678 2215.98 250.543 2216.54 250.543C2217.4 250.543 2218.1 250.842 2218.63 251.439C2219.16 252.037 2219.43 252.832 2219.43 253.824V253.9C2219.43 254.518 2219.31 255.072 2219.07 255.564C2218.84 256.053 2218.5 256.434 2218.06 256.707C2217.62 256.98 2217.12 257.117 2216.55 257.117C2215.69 257.117 2214.99 256.818 2214.46 256.221C2213.92 255.623 2213.66 254.832 2213.66 253.848V253.771ZM2214.75 253.9C2214.75 254.604 2214.91 255.168 2215.23 255.594C2215.56 256.02 2216 256.232 2216.55 256.232C2217.1 256.232 2217.54 256.018 2217.86 255.588C2218.18 255.154 2218.35 254.549 2218.35 253.771C2218.35 253.076 2218.18 252.514 2217.85 252.084C2217.52 251.65 2217.08 251.434 2216.54 251.434C2216 251.434 2215.57 251.646 2215.24 252.072C2214.91 252.498 2214.75 253.107 2214.75 253.9ZM2221.81 250.66L2221.85 251.457C2222.33 250.848 2222.97 250.543 2223.75 250.543C2225.09 250.543 2225.76 251.299 2225.78 252.811V257H2224.69V252.805C2224.69 252.348 2224.58 252.01 2224.38 251.791C2224.17 251.572 2223.85 251.463 2223.42 251.463C2223.07 251.463 2222.76 251.557 2222.49 251.744C2222.23 251.932 2222.02 252.178 2221.87 252.482V257H2220.79V250.66H2221.81ZM2230.04 257.117C2229.18 257.117 2228.48 256.836 2227.94 256.273C2227.4 255.707 2227.13 254.951 2227.13 254.006V253.807C2227.13 253.178 2227.25 252.617 2227.49 252.125C2227.73 251.629 2228.07 251.242 2228.5 250.965C2228.93 250.684 2229.4 250.543 2229.91 250.543C2230.73 250.543 2231.37 250.814 2231.83 251.357C2232.29 251.9 2232.51 252.678 2232.51 253.689V254.141H2228.22C2228.23 254.766 2228.42 255.271 2228.76 255.658C2229.12 256.041 2229.56 256.232 2230.1 256.232C2230.48 256.232 2230.81 256.154 2231.07 255.998C2231.34 255.842 2231.57 255.635 2231.77 255.377L2232.43 255.893C2231.9 256.709 2231.1 257.117 2230.04 257.117ZM2229.91 251.434C2229.47 251.434 2229.1 251.594 2228.8 251.914C2228.51 252.23 2228.32 252.676 2228.25 253.25H2231.43V253.168C2231.4 252.617 2231.25 252.191 2230.98 251.891C2230.72 251.586 2230.36 251.434 2229.91 251.434ZM2234.8 250.66L2234.83 251.457C2235.32 250.848 2235.95 250.543 2236.73 250.543C2238.07 250.543 2238.75 251.299 2238.76 252.811V257H2237.68V252.805C2237.67 252.348 2237.57 252.01 2237.36 251.791C2237.16 251.572 2236.84 251.463 2236.4 251.463C2236.05 251.463 2235.74 251.557 2235.48 251.744C2235.21 251.932 2235.01 252.178 2234.86 252.482V257H2233.77V250.66H2234.8ZM2240.61 257.732H2239.68L2243.24 248.469H2244.17L2240.61 257.732ZM2250.22 254.773H2246.65L2245.84 257H2244.68L2247.94 248.469H2248.93L2252.19 257H2251.04L2250.22 254.773ZM2246.99 253.848H2249.89L2248.43 249.857L2246.99 253.848ZM2252.9 253.777C2252.9 252.805 2253.13 252.023 2253.6 251.434C2254.06 250.84 2254.66 250.543 2255.41 250.543C2256.15 250.543 2256.74 250.797 2257.17 251.305V248H2258.25V257H2257.26L2257.21 256.32C2256.77 256.852 2256.17 257.117 2255.39 257.117C2254.66 257.117 2254.06 256.816 2253.6 256.215C2253.13 255.613 2252.9 254.828 2252.9 253.859V253.777ZM2253.99 253.9C2253.99 254.619 2254.14 255.182 2254.43 255.588C2254.73 255.994 2255.14 256.197 2255.66 256.197C2256.35 256.197 2256.85 255.889 2257.17 255.271V252.359C2256.85 251.762 2256.35 251.463 2255.68 251.463C2255.14 251.463 2254.73 251.668 2254.43 252.078C2254.14 252.488 2253.99 253.096 2253.99 253.9ZM2263.86 257C2263.79 256.875 2263.74 256.652 2263.7 256.332C2263.2 256.855 2262.6 257.117 2261.9 257.117C2261.27 257.117 2260.76 256.941 2260.36 256.59C2259.96 256.234 2259.76 255.785 2259.76 255.242C2259.76 254.582 2260.01 254.07 2260.51 253.707C2261.01 253.34 2261.72 253.156 2262.63 253.156H2263.69V252.658C2263.69 252.279 2263.57 251.979 2263.35 251.756C2263.12 251.529 2262.79 251.416 2262.34 251.416C2261.96 251.416 2261.63 251.514 2261.37 251.709C2261.11 251.904 2260.98 252.141 2260.98 252.418H2259.89C2259.89 252.102 2260 251.797 2260.22 251.504C2260.45 251.207 2260.75 250.973 2261.14 250.801C2261.52 250.629 2261.95 250.543 2262.41 250.543C2263.14 250.543 2263.71 250.727 2264.12 251.094C2264.54 251.457 2264.75 251.959 2264.77 252.6V255.518C2264.77 256.1 2264.84 256.562 2264.99 256.906V257H2263.86ZM2262.06 256.174C2262.4 256.174 2262.72 256.086 2263.02 255.91C2263.33 255.734 2263.55 255.506 2263.69 255.225V253.924H2262.84C2261.51 253.924 2260.84 254.312 2260.84 255.09C2260.84 255.43 2260.96 255.695 2261.18 255.887C2261.41 256.078 2261.7 256.174 2262.06 256.174Z"
          fill="black"
        />
        <path
          d="M1605.77 251.738L1607.82 248.469H1609.14L1606.45 252.699L1609.21 257H1607.87L1605.77 253.672L1603.66 257H1602.33L1605.1 252.699L1602.4 248.469H1603.72L1605.77 251.738ZM1611.36 250.66L1611.39 251.363C1611.86 250.816 1612.48 250.543 1613.27 250.543C1614.16 250.543 1614.76 250.883 1615.08 251.562C1615.29 251.258 1615.57 251.012 1615.9 250.824C1616.24 250.637 1616.64 250.543 1617.11 250.543C1618.5 250.543 1619.2 251.279 1619.23 252.752V257H1618.14V252.816C1618.14 252.363 1618.04 252.025 1617.83 251.803C1617.62 251.576 1617.28 251.463 1616.79 251.463C1616.39 251.463 1616.05 251.584 1615.79 251.826C1615.52 252.064 1615.37 252.387 1615.32 252.793V257H1614.23V252.846C1614.23 251.924 1613.78 251.463 1612.88 251.463C1612.17 251.463 1611.68 251.766 1611.42 252.371V257H1610.34V250.66H1611.36ZM1622.04 257H1620.96V248H1622.04V257Z"
          fill="black"
        />
        <rect
          x="1874.5"
          y="209.5"
          width="190"
          height="267"
          transform="rotate(-90 1874.5 209.5)"
          stroke="black"
        />
        <line
          x1="1691.52"
          y1="210.146"
          x2="1634.52"
          y2="23.1458"
          stroke="black"
        />
        <line x1="1344.5" y1="210" x2="1344.5" y2="112" stroke="black" />
        <line
          x1="1343.85"
          y1="112.522"
          x2="1634.85"
          y2="23.5219"
          stroke="black"
        />
        <path
          d="M2066.59 373.93H2064.76V379H2064.02V373.93H2062.19V373.312H2066.59V373.93ZM2068.04 375.285C2068.36 374.892 2068.78 374.695 2069.29 374.695C2070.19 374.695 2070.64 375.199 2070.64 376.207V379H2069.92V376.203C2069.92 375.898 2069.85 375.673 2069.71 375.527C2069.58 375.382 2069.36 375.309 2069.07 375.309C2068.84 375.309 2068.63 375.371 2068.46 375.496C2068.28 375.621 2068.14 375.785 2068.04 375.988V379H2067.32V373H2068.04V375.285ZM2073.48 379.078C2072.91 379.078 2072.44 378.891 2072.08 378.516C2071.72 378.138 2071.54 377.634 2071.54 377.004V376.871C2071.54 376.452 2071.62 376.078 2071.78 375.75C2071.94 375.419 2072.17 375.161 2072.45 374.977C2072.74 374.789 2073.05 374.695 2073.39 374.695C2073.94 374.695 2074.37 374.876 2074.67 375.238C2074.98 375.6 2075.13 376.118 2075.13 376.793V377.094H2072.27C2072.28 377.51 2072.4 377.848 2072.63 378.105C2072.86 378.361 2073.16 378.488 2073.52 378.488C2073.77 378.488 2073.99 378.436 2074.17 378.332C2074.35 378.228 2074.5 378.09 2074.63 377.918L2075.07 378.262C2074.72 378.806 2074.19 379.078 2073.48 379.078ZM2073.39 375.289C2073.1 375.289 2072.85 375.396 2072.66 375.609C2072.46 375.82 2072.34 376.117 2072.29 376.5H2074.41V376.445C2074.39 376.078 2074.29 375.794 2074.11 375.594C2073.93 375.391 2073.69 375.289 2073.39 375.289ZM2076.95 373.75V374.773H2077.74V375.332H2076.95V377.953C2076.95 378.122 2076.98 378.25 2077.05 378.336C2077.12 378.419 2077.24 378.461 2077.41 378.461C2077.5 378.461 2077.61 378.445 2077.76 378.414V379C2077.57 379.052 2077.38 379.078 2077.2 379.078C2076.88 379.078 2076.64 378.98 2076.47 378.785C2076.31 378.59 2076.23 378.312 2076.23 377.953V375.332H2075.46V374.773H2076.23V373.75H2076.95ZM2081.2 379C2081.15 378.917 2081.12 378.768 2081.09 378.555C2080.76 378.904 2080.36 379.078 2079.89 379.078C2079.47 379.078 2079.13 378.961 2078.86 378.727C2078.6 378.49 2078.46 378.19 2078.46 377.828C2078.46 377.388 2078.63 377.047 2078.96 376.805C2079.3 376.56 2079.77 376.438 2080.38 376.438H2081.08V376.105C2081.08 375.853 2081.01 375.652 2080.86 375.504C2080.7 375.353 2080.48 375.277 2080.19 375.277C2079.93 375.277 2079.71 375.342 2079.54 375.473C2079.36 375.603 2079.28 375.76 2079.28 375.945H2078.55C2078.55 375.734 2078.62 375.531 2078.77 375.336C2078.92 375.138 2079.13 374.982 2079.38 374.867C2079.64 374.753 2079.92 374.695 2080.23 374.695C2080.72 374.695 2081.1 374.818 2081.38 375.062C2081.65 375.305 2081.79 375.639 2081.8 376.066V378.012C2081.8 378.4 2081.85 378.708 2081.95 378.938V379H2081.2ZM2080 378.449C2080.22 378.449 2080.44 378.391 2080.64 378.273C2080.84 378.156 2080.99 378.004 2081.08 377.816V376.949H2080.52C2079.63 376.949 2079.19 377.208 2079.19 377.727C2079.19 377.953 2079.26 378.13 2079.41 378.258C2079.57 378.385 2079.76 378.449 2080 378.449Z"
          fill="black"
        />
        <path
          d="M1644.11 375.355L1643.41 376.078V378H1642.66V372.312H1643.41V375.125L1645.94 372.312H1646.84L1644.61 374.824L1647.02 378H1646.12L1644.11 375.355ZM1650.17 378C1650.13 377.917 1650.1 377.768 1650.07 377.555C1649.73 377.904 1649.33 378.078 1648.87 378.078C1648.45 378.078 1648.11 377.961 1647.84 377.727C1647.57 377.49 1647.44 377.19 1647.44 376.828C1647.44 376.388 1647.61 376.047 1647.94 375.805C1648.28 375.56 1648.75 375.438 1649.36 375.438H1650.06V375.105C1650.06 374.853 1649.98 374.652 1649.83 374.504C1649.68 374.353 1649.46 374.277 1649.16 374.277C1648.91 374.277 1648.69 374.342 1648.52 374.473C1648.34 374.603 1648.25 374.76 1648.25 374.945H1647.53C1647.53 374.734 1647.6 374.531 1647.75 374.336C1647.9 374.138 1648.1 373.982 1648.36 373.867C1648.62 373.753 1648.9 373.695 1649.21 373.695C1649.69 373.695 1650.08 373.818 1650.35 374.062C1650.63 374.305 1650.77 374.639 1650.78 375.066V377.012C1650.78 377.4 1650.83 377.708 1650.93 377.938V378H1650.17ZM1648.97 377.449C1649.2 377.449 1649.41 377.391 1649.62 377.273C1649.82 377.156 1649.97 377.004 1650.06 376.816V375.949H1649.49C1648.61 375.949 1648.16 376.208 1648.16 376.727C1648.16 376.953 1648.24 377.13 1648.39 377.258C1648.54 377.385 1648.74 377.449 1648.97 377.449ZM1655.48 375.934C1655.48 376.577 1655.34 377.095 1655.04 377.488C1654.75 377.882 1654.35 378.078 1653.85 378.078C1653.33 378.078 1652.93 377.915 1652.64 377.59V379.625H1651.91V373.773H1652.57L1652.61 374.242C1652.9 373.878 1653.31 373.695 1653.84 373.695C1654.34 373.695 1654.74 373.887 1655.04 374.27C1655.34 374.652 1655.48 375.185 1655.48 375.867V375.934ZM1654.76 375.852C1654.76 375.375 1654.66 374.999 1654.46 374.723C1654.25 374.447 1653.98 374.309 1653.62 374.309C1653.18 374.309 1652.86 374.503 1652.64 374.891V376.91C1652.85 377.296 1653.18 377.488 1653.63 377.488C1653.98 377.488 1654.25 377.352 1654.45 377.078C1654.66 376.802 1654.76 376.393 1654.76 375.852ZM1659.98 375.934C1659.98 376.577 1659.83 377.095 1659.54 377.488C1659.24 377.882 1658.84 378.078 1658.34 378.078C1657.83 378.078 1657.42 377.915 1657.13 377.59V379.625H1656.41V373.773H1657.07L1657.1 374.242C1657.4 373.878 1657.8 373.695 1658.33 373.695C1658.84 373.695 1659.24 373.887 1659.53 374.27C1659.83 374.652 1659.98 375.185 1659.98 375.867V375.934ZM1659.25 375.852C1659.25 375.375 1659.15 374.999 1658.95 374.723C1658.75 374.447 1658.47 374.309 1658.11 374.309C1657.68 374.309 1657.35 374.503 1657.13 374.891V376.91C1657.35 377.296 1657.68 377.488 1658.12 377.488C1658.47 377.488 1658.74 377.352 1658.95 377.078C1659.15 376.802 1659.25 376.393 1659.25 375.852ZM1663.51 378C1663.47 377.917 1663.43 377.768 1663.41 377.555C1663.07 377.904 1662.67 378.078 1662.2 378.078C1661.79 378.078 1661.44 377.961 1661.18 377.727C1660.91 377.49 1660.78 377.19 1660.78 376.828C1660.78 376.388 1660.94 376.047 1661.28 375.805C1661.61 375.56 1662.08 375.438 1662.69 375.438H1663.39V375.105C1663.39 374.853 1663.32 374.652 1663.17 374.504C1663.02 374.353 1662.79 374.277 1662.5 374.277C1662.24 374.277 1662.03 374.342 1661.85 374.473C1661.68 374.603 1661.59 374.76 1661.59 374.945H1660.86C1660.86 374.734 1660.94 374.531 1661.09 374.336C1661.24 374.138 1661.44 373.982 1661.7 373.867C1661.95 373.753 1662.24 373.695 1662.54 373.695C1663.03 373.695 1663.41 373.818 1663.69 374.062C1663.96 374.305 1664.11 374.639 1664.12 375.066V377.012C1664.12 377.4 1664.17 377.708 1664.27 377.938V378H1663.51ZM1662.31 377.449C1662.54 377.449 1662.75 377.391 1662.95 377.273C1663.16 377.156 1663.3 377.004 1663.39 376.816V375.949H1662.83C1661.94 375.949 1661.5 376.208 1661.5 376.727C1661.5 376.953 1661.58 377.13 1661.73 377.258C1661.88 377.385 1662.07 377.449 1662.31 377.449Z"
          fill="black"
        />
        <path
          d="M1590.41 377.387H1593.11V378H1589.66V372.312H1590.41V377.387ZM1596.46 378C1596.42 377.917 1596.39 377.768 1596.36 377.555C1596.02 377.904 1595.62 378.078 1595.16 378.078C1594.74 378.078 1594.4 377.961 1594.13 377.727C1593.86 377.49 1593.73 377.19 1593.73 376.828C1593.73 376.388 1593.9 376.047 1594.23 375.805C1594.57 375.56 1595.04 375.438 1595.64 375.438H1596.35V375.105C1596.35 374.853 1596.27 374.652 1596.12 374.504C1595.97 374.353 1595.75 374.277 1595.45 374.277C1595.2 374.277 1594.98 374.342 1594.8 374.473C1594.63 374.603 1594.54 374.76 1594.54 374.945H1593.82C1593.82 374.734 1593.89 374.531 1594.04 374.336C1594.19 374.138 1594.39 373.982 1594.65 373.867C1594.91 373.753 1595.19 373.695 1595.5 373.695C1595.98 373.695 1596.36 373.818 1596.64 374.062C1596.92 374.305 1597.06 374.639 1597.07 375.066V377.012C1597.07 377.4 1597.12 377.708 1597.22 377.938V378H1596.46ZM1595.26 377.449C1595.49 377.449 1595.7 377.391 1595.91 377.273C1596.11 377.156 1596.26 377.004 1596.35 376.816V375.949H1595.78C1594.9 375.949 1594.45 376.208 1594.45 376.727C1594.45 376.953 1594.53 377.13 1594.68 377.258C1594.83 377.385 1595.02 377.449 1595.26 377.449ZM1598.88 373.773L1598.9 374.242C1599.21 373.878 1599.63 373.695 1600.16 373.695C1600.75 373.695 1601.15 373.922 1601.36 374.375C1601.5 374.172 1601.69 374.008 1601.91 373.883C1602.14 373.758 1602.4 373.695 1602.71 373.695C1603.64 373.695 1604.11 374.186 1604.12 375.168V378H1603.4V375.211C1603.4 374.909 1603.33 374.684 1603.2 374.535C1603.06 374.384 1602.83 374.309 1602.5 374.309C1602.23 374.309 1602.01 374.389 1601.83 374.551C1601.65 374.71 1601.55 374.924 1601.52 375.195V378H1600.8V375.23C1600.8 374.616 1600.5 374.309 1599.89 374.309C1599.42 374.309 1599.1 374.51 1598.92 374.914V378H1598.2V373.773H1598.88ZM1608.8 375.934C1608.8 376.579 1608.65 377.099 1608.35 377.492C1608.05 377.883 1607.66 378.078 1607.16 378.078C1606.62 378.078 1606.21 377.889 1605.92 377.512L1605.88 378H1605.22V372H1605.94V374.238C1606.23 373.876 1606.64 373.695 1607.15 373.695C1607.66 373.695 1608.06 373.889 1608.36 374.277C1608.65 374.665 1608.8 375.197 1608.8 375.871V375.934ZM1608.07 375.852C1608.07 375.359 1607.98 374.979 1607.79 374.711C1607.6 374.443 1607.33 374.309 1606.97 374.309C1606.49 374.309 1606.15 374.53 1605.94 374.973V376.801C1606.16 377.243 1606.51 377.465 1606.98 377.465C1607.32 377.465 1607.59 377.331 1607.79 377.062C1607.98 376.794 1608.07 376.391 1608.07 375.852ZM1609.54 375.852C1609.54 375.203 1609.69 374.682 1610 374.289C1610.3 373.893 1610.71 373.695 1611.2 373.695C1611.7 373.695 1612.09 373.865 1612.38 374.203V372H1613.1V378H1612.44L1612.4 377.547C1612.11 377.901 1611.71 378.078 1611.2 378.078C1610.71 378.078 1610.31 377.878 1610 377.477C1609.69 377.076 1609.54 376.552 1609.54 375.906V375.852ZM1610.26 375.934C1610.26 376.413 1610.36 376.788 1610.55 377.059C1610.75 377.329 1611.03 377.465 1611.38 377.465C1611.83 377.465 1612.17 377.259 1612.38 376.848V374.906C1612.16 374.508 1611.83 374.309 1611.38 374.309C1611.03 374.309 1610.75 374.445 1610.55 374.719C1610.36 374.992 1610.26 375.397 1610.26 375.934ZM1616.84 378C1616.79 377.917 1616.76 377.768 1616.73 377.555C1616.4 377.904 1616 378.078 1615.53 378.078C1615.11 378.078 1614.77 377.961 1614.5 377.727C1614.24 377.49 1614.11 377.19 1614.11 376.828C1614.11 376.388 1614.27 376.047 1614.61 375.805C1614.94 375.56 1615.41 375.438 1616.02 375.438H1616.72V375.105C1616.72 374.853 1616.65 374.652 1616.5 374.504C1616.35 374.353 1616.12 374.277 1615.83 374.277C1615.57 374.277 1615.35 374.342 1615.18 374.473C1615.01 374.603 1614.92 374.76 1614.92 374.945H1614.19C1614.19 374.734 1614.27 374.531 1614.41 374.336C1614.57 374.138 1614.77 373.982 1615.02 373.867C1615.28 373.753 1615.56 373.695 1615.87 373.695C1616.36 373.695 1616.74 373.818 1617.02 374.062C1617.29 374.305 1617.43 374.639 1617.45 375.066V377.012C1617.45 377.4 1617.49 377.708 1617.59 377.938V378H1616.84ZM1615.64 377.449C1615.86 377.449 1616.08 377.391 1616.28 377.273C1616.48 377.156 1616.63 377.004 1616.72 376.816V375.949H1616.16C1615.27 375.949 1614.83 376.208 1614.83 376.727C1614.83 376.953 1614.9 377.13 1615.05 377.258C1615.21 377.385 1615.4 377.449 1615.64 377.449Z"
          fill="black"
        />
        <path
          d="M612.629 372.312L614.488 376.953L616.348 372.312H617.32V378H616.57V375.785L616.641 373.395L614.773 378H614.199L612.336 373.406L612.41 375.785V378H611.66V372.312H612.629ZM619.914 376.941L620.898 373.773H621.672L619.973 378.652C619.71 379.355 619.292 379.707 618.719 379.707L618.582 379.695L618.312 379.645V379.059L618.508 379.074C618.753 379.074 618.943 379.025 619.078 378.926C619.216 378.827 619.329 378.646 619.418 378.383L619.578 377.953L618.07 373.773H618.859L619.914 376.941Z"
          fill="black"
        />
        <path
          d="M536.41 376.773V379H535.66V373.312H537.758C538.38 373.312 538.867 373.471 539.219 373.789C539.573 374.107 539.75 374.527 539.75 375.051C539.75 375.603 539.577 376.029 539.23 376.328C538.887 376.625 538.393 376.773 537.75 376.773H536.41ZM536.41 376.16H537.758C538.159 376.16 538.466 376.066 538.68 375.879C538.893 375.689 539 375.415 539 375.059C539 374.72 538.893 374.449 538.68 374.246C538.466 374.043 538.173 373.938 537.801 373.93H536.41V376.16ZM541.379 379H540.656V374.773H541.379V379ZM540.598 373.652C540.598 373.535 540.633 373.436 540.703 373.355C540.776 373.275 540.883 373.234 541.023 373.234C541.164 373.234 541.271 373.275 541.344 373.355C541.417 373.436 541.453 373.535 541.453 373.652C541.453 373.77 541.417 373.867 541.344 373.945C541.271 374.023 541.164 374.062 541.023 374.062C540.883 374.062 540.776 374.023 540.703 373.945C540.633 373.867 540.598 373.77 540.598 373.652Z"
          fill="black"
        />
        <path
          d="M135.41 376.773V379H134.66V373.312H136.758C137.38 373.312 137.867 373.471 138.219 373.789C138.573 374.107 138.75 374.527 138.75 375.051C138.75 375.603 138.577 376.029 138.23 376.328C137.887 376.625 137.393 376.773 136.75 376.773H135.41ZM135.41 376.16H136.758C137.159 376.16 137.466 376.066 137.68 375.879C137.893 375.689 138 375.415 138 375.059C138 374.72 137.893 374.449 137.68 374.246C137.466 374.043 137.173 373.938 136.801 373.93H135.41V376.16ZM142.055 377.879C142.055 377.684 141.98 377.533 141.832 377.426C141.686 377.316 141.43 377.223 141.062 377.145C140.698 377.066 140.408 376.973 140.191 376.863C139.978 376.754 139.819 376.624 139.715 376.473C139.613 376.322 139.562 376.142 139.562 375.934C139.562 375.587 139.708 375.294 140 375.055C140.294 374.815 140.669 374.695 141.125 374.695C141.604 374.695 141.992 374.819 142.289 375.066C142.589 375.314 142.738 375.63 142.738 376.016H142.012C142.012 375.818 141.927 375.647 141.758 375.504C141.591 375.361 141.38 375.289 141.125 375.289C140.862 375.289 140.656 375.346 140.508 375.461C140.359 375.576 140.285 375.725 140.285 375.91C140.285 376.085 140.354 376.216 140.492 376.305C140.63 376.393 140.879 376.478 141.238 376.559C141.6 376.639 141.893 376.736 142.117 376.848C142.341 376.96 142.507 377.095 142.613 377.254C142.723 377.41 142.777 377.602 142.777 377.828C142.777 378.206 142.626 378.509 142.324 378.738C142.022 378.965 141.63 379.078 141.148 379.078C140.81 379.078 140.51 379.018 140.25 378.898C139.99 378.779 139.785 378.612 139.637 378.398C139.491 378.182 139.418 377.949 139.418 377.699H140.141C140.154 377.941 140.25 378.134 140.43 378.277C140.612 378.418 140.852 378.488 141.148 378.488C141.422 378.488 141.641 378.434 141.805 378.324C141.971 378.212 142.055 378.064 142.055 377.879ZM144.504 379H143.781V374.773H144.504V379ZM143.723 373.652C143.723 373.535 143.758 373.436 143.828 373.355C143.901 373.275 144.008 373.234 144.148 373.234C144.289 373.234 144.396 373.275 144.469 373.355C144.542 373.436 144.578 373.535 144.578 373.652C144.578 373.77 144.542 373.867 144.469 373.945C144.396 374.023 144.289 374.062 144.148 374.062C144.008 374.062 143.901 374.023 143.828 373.945C143.758 373.867 143.723 373.77 143.723 373.652Z"
          fill="black"
        />
        <path
          d="M240.41 330.773V333H239.66V327.312H241.758C242.38 327.312 242.867 327.471 243.219 327.789C243.573 328.107 243.75 328.527 243.75 329.051C243.75 329.603 243.577 330.029 243.23 330.328C242.887 330.625 242.393 330.773 241.75 330.773H240.41ZM240.41 330.16H241.758C242.159 330.16 242.466 330.066 242.68 329.879C242.893 329.689 243 329.415 243 329.059C243 328.72 242.893 328.449 242.68 328.246C242.466 328.043 242.173 327.938 241.801 327.93H240.41V330.16ZM245.316 329.285C245.637 328.892 246.053 328.695 246.566 328.695C247.46 328.695 247.91 329.199 247.918 330.207V333H247.195V330.203C247.193 329.898 247.122 329.673 246.984 329.527C246.849 329.382 246.637 329.309 246.348 329.309C246.113 329.309 245.908 329.371 245.73 329.496C245.553 329.621 245.415 329.785 245.316 329.988V333H244.594V327H245.316V329.285ZM249.785 333H249.062V328.773H249.785V333ZM249.004 327.652C249.004 327.535 249.039 327.436 249.109 327.355C249.182 327.275 249.289 327.234 249.43 327.234C249.57 327.234 249.677 327.275 249.75 327.355C249.823 327.436 249.859 327.535 249.859 327.652C249.859 327.77 249.823 327.867 249.75 327.945C249.677 328.023 249.57 328.062 249.43 328.062C249.289 328.062 249.182 328.023 249.109 327.945C249.039 327.867 249.004 327.77 249.004 327.652Z"
          fill="black"
        />
        <path
          d="M132.035 330.34C132.035 330.897 131.941 331.384 131.754 331.801C131.566 332.215 131.301 332.531 130.957 332.75C130.613 332.969 130.212 333.078 129.754 333.078C129.306 333.078 128.909 332.969 128.562 332.75C128.216 332.529 127.947 332.215 127.754 331.809C127.564 331.4 127.466 330.927 127.461 330.391V329.98C127.461 329.434 127.556 328.951 127.746 328.531C127.936 328.112 128.204 327.792 128.551 327.57C128.9 327.346 129.298 327.234 129.746 327.234C130.202 327.234 130.603 327.345 130.949 327.566C131.298 327.785 131.566 328.104 131.754 328.523C131.941 328.94 132.035 329.426 132.035 329.98V330.34ZM131.289 329.973C131.289 329.298 131.154 328.781 130.883 328.422C130.612 328.06 130.233 327.879 129.746 327.879C129.272 327.879 128.898 328.06 128.625 328.422C128.354 328.781 128.215 329.281 128.207 329.922V330.34C128.207 330.993 128.344 331.508 128.617 331.883C128.893 332.255 129.272 332.441 129.754 332.441C130.238 332.441 130.613 332.266 130.879 331.914C131.145 331.56 131.281 331.053 131.289 330.395V329.973ZM133.727 328.773L133.746 329.242C134.056 328.878 134.474 328.695 135 328.695C135.591 328.695 135.993 328.922 136.207 329.375C136.348 329.172 136.53 329.008 136.754 328.883C136.98 328.758 137.247 328.695 137.555 328.695C138.482 328.695 138.953 329.186 138.969 330.168V333H138.246V330.211C138.246 329.909 138.177 329.684 138.039 329.535C137.901 329.384 137.669 329.309 137.344 329.309C137.076 329.309 136.853 329.389 136.676 329.551C136.499 329.71 136.396 329.924 136.367 330.195V333H135.641V330.23C135.641 329.616 135.34 329.309 134.738 329.309C134.264 329.309 133.94 329.51 133.766 329.914V333H133.043V328.773H133.727ZM141.816 333.078C141.243 333.078 140.777 332.891 140.418 332.516C140.059 332.138 139.879 331.634 139.879 331.004V330.871C139.879 330.452 139.958 330.078 140.117 329.75C140.279 329.419 140.503 329.161 140.789 328.977C141.078 328.789 141.391 328.695 141.727 328.695C142.276 328.695 142.703 328.876 143.008 329.238C143.312 329.6 143.465 330.118 143.465 330.793V331.094H140.602C140.612 331.51 140.733 331.848 140.965 332.105C141.199 332.361 141.496 332.488 141.855 332.488C142.111 332.488 142.327 332.436 142.504 332.332C142.681 332.228 142.836 332.09 142.969 331.918L143.41 332.262C143.056 332.806 142.525 333.078 141.816 333.078ZM141.727 329.289C141.435 329.289 141.19 329.396 140.992 329.609C140.794 329.82 140.672 330.117 140.625 330.5H142.742V330.445C142.721 330.078 142.622 329.794 142.445 329.594C142.268 329.391 142.029 329.289 141.727 329.289ZM144.133 330.852C144.133 330.193 144.285 329.669 144.59 329.281C144.895 328.891 145.298 328.695 145.801 328.695C146.316 328.695 146.719 328.878 147.008 329.242L147.043 328.773H147.703V332.898C147.703 333.445 147.54 333.876 147.215 334.191C146.892 334.507 146.457 334.664 145.91 334.664C145.605 334.664 145.307 334.599 145.016 334.469C144.724 334.339 144.501 334.16 144.348 333.934L144.723 333.5C145.033 333.883 145.411 334.074 145.859 334.074C146.211 334.074 146.484 333.975 146.68 333.777C146.878 333.579 146.977 333.301 146.977 332.941V332.578C146.688 332.911 146.293 333.078 145.793 333.078C145.298 333.078 144.897 332.879 144.59 332.48C144.285 332.082 144.133 331.539 144.133 330.852ZM144.859 330.934C144.859 331.41 144.957 331.785 145.152 332.059C145.348 332.329 145.621 332.465 145.973 332.465C146.428 332.465 146.763 332.258 146.977 331.844V329.914C146.755 329.51 146.423 329.309 145.98 329.309C145.629 329.309 145.354 329.445 145.156 329.719C144.958 329.992 144.859 330.397 144.859 330.934ZM151.406 333C151.365 332.917 151.331 332.768 151.305 332.555C150.969 332.904 150.568 333.078 150.102 333.078C149.685 333.078 149.342 332.961 149.074 332.727C148.809 332.49 148.676 332.19 148.676 331.828C148.676 331.388 148.842 331.047 149.176 330.805C149.512 330.56 149.983 330.438 150.59 330.438H151.293V330.105C151.293 329.853 151.217 329.652 151.066 329.504C150.915 329.353 150.693 329.277 150.398 329.277C150.141 329.277 149.924 329.342 149.75 329.473C149.576 329.603 149.488 329.76 149.488 329.945H148.762C148.762 329.734 148.836 329.531 148.984 329.336C149.135 329.138 149.339 328.982 149.594 328.867C149.852 328.753 150.134 328.695 150.441 328.695C150.928 328.695 151.31 328.818 151.586 329.062C151.862 329.305 152.005 329.639 152.016 330.066V332.012C152.016 332.4 152.065 332.708 152.164 332.938V333H151.406ZM150.207 332.449C150.434 332.449 150.648 332.391 150.852 332.273C151.055 332.156 151.202 332.004 151.293 331.816V330.949H150.727C149.841 330.949 149.398 331.208 149.398 331.727C149.398 331.953 149.474 332.13 149.625 332.258C149.776 332.385 149.97 332.449 150.207 332.449Z"
          fill="black"
        />
        <g clip-path="url(#clip0)">
          <path
            d="M95.1683 467.279C95.7903 467.279 96.2944 466.769 96.2944 466.14C96.2944 465.511 95.7903 465.001 95.1683 465.001C94.5464 465.001 94.0422 465.511 94.0422 466.14C94.0422 466.769 94.5464 467.279 95.1683 467.279Z"
            fill="black"
          />
          <path
            d="M95.0124 474.5V478.461C95.0065 479.181 93.9476 479.181 93.9383 478.461V474.5H92.5523L94.0422 469.207H93.7997L92.9334 472.222C92.7145 472.889 91.8233 472.619 92.0326 471.906L93.0027 468.646C93.1143 468.272 93.5807 467.611 94.3887 467.595H95.1163H95.9479C96.7326 467.611 97.201 468.278 97.3339 468.646L98.3041 471.906C98.5009 472.615 97.6168 472.906 97.4032 472.222L96.5369 469.207H96.2598L97.7843 474.5H96.3637V478.461C96.3748 479.181 95.3201 479.177 95.3242 478.461V474.5H95.0124Z"
            fill="black"
          />
          <path
            d="M104.385 467.279C105.007 467.279 105.511 466.769 105.511 466.14C105.511 465.511 105.007 465.001 104.385 465.001C103.763 465.001 103.259 465.511 103.259 466.14C103.259 466.769 103.763 467.279 104.385 467.279Z"
            fill="black"
          />
          <path
            d="M103.189 467.595C102.324 467.595 101.769 468.353 101.769 469.102V472.607C101.761 473.292 102.736 473.292 102.739 472.607V469.383H102.982V478.286C102.967 479.216 104.265 479.189 104.264 478.286V473.098H104.471V478.286C104.488 479.189 105.794 479.216 105.788 478.286V469.383H106.031V472.607C106.019 473.298 106.989 473.298 107.001 472.607V469.102C106.987 468.353 106.411 467.608 105.546 467.595H103.189Z"
            fill="black"
          />
          <path
            d="M100.487 465.141H99.2046V478.917H100.487V465.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip1)">
          <path
            d="M2024.17 350.279C2024.79 350.279 2025.29 349.769 2025.29 349.14C2025.29 348.511 2024.79 348.001 2024.17 348.001C2023.55 348.001 2023.04 348.511 2023.04 349.14C2023.04 349.769 2023.55 350.279 2024.17 350.279Z"
            fill="black"
          />
          <path
            d="M2024.01 357.5V361.461C2024.01 362.181 2022.95 362.181 2022.94 361.461V357.5H2021.55L2023.04 352.207H2022.8L2021.93 355.222C2021.71 355.889 2020.82 355.619 2021.03 354.906L2022 351.646C2022.11 351.272 2022.58 350.611 2023.39 350.595H2024.12H2024.95C2025.73 350.611 2026.2 351.278 2026.33 351.646L2027.3 354.906C2027.5 355.615 2026.62 355.906 2026.4 355.222L2025.54 352.207H2025.26L2026.78 357.5H2025.36V361.461C2025.37 362.181 2024.32 362.177 2024.32 361.461V357.5H2024.01Z"
            fill="black"
          />
          <path
            d="M2033.38 350.279C2034.01 350.279 2034.51 349.769 2034.51 349.14C2034.51 348.511 2034.01 348.001 2033.38 348.001C2032.76 348.001 2032.26 348.511 2032.26 349.14C2032.26 349.769 2032.76 350.279 2033.38 350.279Z"
            fill="black"
          />
          <path
            d="M2032.19 350.595C2031.32 350.595 2030.77 351.353 2030.77 352.102V355.607C2030.76 356.292 2031.74 356.292 2031.74 355.607V352.383H2031.98V361.286C2031.97 362.216 2033.26 362.189 2033.26 361.286V356.098H2033.47V361.286C2033.49 362.189 2034.79 362.216 2034.79 361.286V352.383H2035.03V355.607C2035.02 356.298 2035.99 356.298 2036 355.607V352.102C2035.99 351.353 2035.41 350.608 2034.55 350.595H2032.19Z"
            fill="black"
          />
          <path
            d="M2029.49 348.141H2028.2V361.917H2029.49V348.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip2)">
          <path
            d="M95.1683 439.279C95.7903 439.279 96.2944 438.769 96.2944 438.14C96.2944 437.511 95.7903 437.001 95.1683 437.001C94.5464 437.001 94.0422 437.511 94.0422 438.14C94.0422 438.769 94.5464 439.279 95.1683 439.279Z"
            fill="black"
          />
          <path
            d="M95.0124 446.5V450.461C95.0065 451.181 93.9476 451.181 93.9383 450.461V446.5H92.5523L94.0422 441.207H93.7997L92.9334 444.222C92.7145 444.889 91.8233 444.619 92.0326 443.906L93.0027 440.646C93.1143 440.272 93.5807 439.611 94.3887 439.595H95.1163H95.9479C96.7326 439.611 97.201 440.278 97.3339 440.646L98.3041 443.906C98.5009 444.615 97.6168 444.906 97.4032 444.222L96.5369 441.207H96.2598L97.7843 446.5H96.3637V450.461C96.3748 451.181 95.3201 451.177 95.3242 450.461V446.5H95.0124Z"
            fill="black"
          />
          <path
            d="M104.385 439.279C105.007 439.279 105.511 438.769 105.511 438.14C105.511 437.511 105.007 437.001 104.385 437.001C103.763 437.001 103.259 437.511 103.259 438.14C103.259 438.769 103.763 439.279 104.385 439.279Z"
            fill="black"
          />
          <path
            d="M103.189 439.595C102.324 439.595 101.769 440.353 101.769 441.102V444.607C101.761 445.292 102.736 445.292 102.739 444.607V441.383H102.982V450.286C102.967 451.216 104.265 451.189 104.264 450.286V445.098H104.471V450.286C104.488 451.189 105.794 451.216 105.788 450.286V441.383H106.031V444.607C106.019 445.298 106.989 445.298 107.001 444.607V441.102C106.987 440.353 106.411 439.608 105.546 439.595H103.189Z"
            fill="black"
          />
          <path
            d="M100.487 437.141H99.2046V450.917H100.487V437.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip3)">
          <path
            d="M95.1683 486.279C95.7903 486.279 96.2944 485.769 96.2944 485.14C96.2944 484.511 95.7903 484.001 95.1683 484.001C94.5464 484.001 94.0422 484.511 94.0422 485.14C94.0422 485.769 94.5464 486.279 95.1683 486.279Z"
            fill="black"
          />
          <path
            d="M95.0124 493.5V497.461C95.0065 498.181 93.9476 498.181 93.9383 497.461V493.5H92.5523L94.0422 488.207H93.7997L92.9334 491.222C92.7145 491.889 91.8233 491.619 92.0326 490.906L93.0027 487.646C93.1143 487.272 93.5807 486.611 94.3887 486.595H95.1163H95.9479C96.7326 486.611 97.201 487.278 97.3339 487.646L98.3041 490.906C98.5009 491.615 97.6168 491.906 97.4032 491.222L96.5369 488.207H96.2598L97.7843 493.5H96.3637V497.461C96.3748 498.181 95.3201 498.177 95.3242 497.461V493.5H95.0124Z"
            fill="black"
          />
          <path
            d="M104.385 486.279C105.007 486.279 105.511 485.769 105.511 485.14C105.511 484.511 105.007 484.001 104.385 484.001C103.763 484.001 103.259 484.511 103.259 485.14C103.259 485.769 103.763 486.279 104.385 486.279Z"
            fill="black"
          />
          <path
            d="M103.189 486.595C102.324 486.595 101.769 487.353 101.769 488.102V491.607C101.761 492.292 102.736 492.292 102.739 491.607V488.383H102.982V497.286C102.967 498.216 104.265 498.189 104.264 497.286V492.098H104.471V497.286C104.488 498.189 105.794 498.216 105.788 497.286V488.383H106.031V491.607C106.019 492.298 106.989 492.298 107.001 491.607V488.102C106.987 487.353 106.411 486.608 105.546 486.595H103.189Z"
            fill="black"
          />
          <path
            d="M100.487 484.141H99.2046V497.917H100.487V484.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip4)">
          <path
            d="M2032.17 329.279C2032.79 329.279 2033.29 328.769 2033.29 328.14C2033.29 327.511 2032.79 327.001 2032.17 327.001C2031.55 327.001 2031.04 327.511 2031.04 328.14C2031.04 328.769 2031.55 329.279 2032.17 329.279Z"
            fill="black"
          />
          <path
            d="M2032.01 336.5V340.461C2032.01 341.181 2030.95 341.181 2030.94 340.461V336.5H2029.55L2031.04 331.207H2030.8L2029.93 334.222C2029.71 334.889 2028.82 334.619 2029.03 333.906L2030 330.646C2030.11 330.272 2030.58 329.611 2031.39 329.595H2032.12H2032.95C2033.73 329.611 2034.2 330.278 2034.33 330.646L2035.3 333.906C2035.5 334.615 2034.62 334.906 2034.4 334.222L2033.54 331.207H2033.26L2034.78 336.5H2033.36V340.461C2033.37 341.181 2032.32 341.177 2032.32 340.461V336.5H2032.01Z"
            fill="black"
          />
          <path
            d="M2041.38 329.279C2042.01 329.279 2042.51 328.769 2042.51 328.14C2042.51 327.511 2042.01 327.001 2041.38 327.001C2040.76 327.001 2040.26 327.511 2040.26 328.14C2040.26 328.769 2040.76 329.279 2041.38 329.279Z"
            fill="black"
          />
          <path
            d="M2040.19 329.595C2039.32 329.595 2038.77 330.353 2038.77 331.102V334.607C2038.76 335.292 2039.74 335.292 2039.74 334.607V331.383H2039.98V340.286C2039.97 341.216 2041.26 341.189 2041.26 340.286V335.098H2041.47V340.286C2041.49 341.189 2042.79 341.216 2042.79 340.286V331.383H2043.03V334.607C2043.02 335.298 2043.99 335.298 2044 334.607V331.102C2043.99 330.353 2043.41 329.608 2042.55 329.595H2040.19Z"
            fill="black"
          />
          <path
            d="M2037.49 327.141H2036.2V340.917H2037.49V327.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip5)">
          <path
            d="M1693.17 371.279C1693.79 371.279 1694.29 370.769 1694.29 370.14C1694.29 369.511 1693.79 369.001 1693.17 369.001C1692.55 369.001 1692.04 369.511 1692.04 370.14C1692.04 370.769 1692.55 371.279 1693.17 371.279Z"
            fill="black"
          />
          <path
            d="M1693.01 378.5V382.461C1693.01 383.181 1691.95 383.181 1691.94 382.461V378.5H1690.55L1692.04 373.207H1691.8L1690.93 376.222C1690.71 376.889 1689.82 376.619 1690.03 375.906L1691 372.646C1691.11 372.272 1691.58 371.611 1692.39 371.595H1693.12H1693.95C1694.73 371.611 1695.2 372.278 1695.33 372.646L1696.3 375.906C1696.5 376.615 1695.62 376.906 1695.4 376.222L1694.54 373.207H1694.26L1695.78 378.5H1694.36V382.461C1694.37 383.181 1693.32 383.177 1693.32 382.461V378.5H1693.01Z"
            fill="black"
          />
          <path
            d="M1702.38 371.279C1703.01 371.279 1703.51 370.769 1703.51 370.14C1703.51 369.511 1703.01 369.001 1702.38 369.001C1701.76 369.001 1701.26 369.511 1701.26 370.14C1701.26 370.769 1701.76 371.279 1702.38 371.279Z"
            fill="black"
          />
          <path
            d="M1701.19 371.595C1700.32 371.595 1699.77 372.353 1699.77 373.102V376.607C1699.76 377.292 1700.74 377.292 1700.74 376.607V373.383H1700.98V382.286C1700.97 383.216 1702.26 383.189 1702.26 382.286V377.098H1702.47V382.286C1702.49 383.189 1703.79 383.216 1703.79 382.286V373.383H1704.03V376.607C1704.02 377.298 1704.99 377.298 1705 376.607V373.102C1704.99 372.353 1704.41 371.608 1703.55 371.595H1701.19Z"
            fill="black"
          />
          <path
            d="M1698.49 369.141H1697.2V382.917H1698.49V369.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip6)">
          <path
            d="M1283.17 371.279C1283.79 371.279 1284.29 370.769 1284.29 370.14C1284.29 369.511 1283.79 369.001 1283.17 369.001C1282.55 369.001 1282.04 369.511 1282.04 370.14C1282.04 370.769 1282.55 371.279 1283.17 371.279Z"
            fill="black"
          />
          <path
            d="M1283.01 378.5V382.461C1283.01 383.181 1281.95 383.181 1281.94 382.461V378.5H1280.55L1282.04 373.207H1281.8L1280.93 376.222C1280.71 376.889 1279.82 376.619 1280.03 375.906L1281 372.646C1281.11 372.272 1281.58 371.611 1282.39 371.595H1283.12H1283.95C1284.73 371.611 1285.2 372.278 1285.33 372.646L1286.3 375.906C1286.5 376.615 1285.62 376.906 1285.4 376.222L1284.54 373.207H1284.26L1285.78 378.5H1284.36V382.461C1284.37 383.181 1283.32 383.177 1283.32 382.461V378.5H1283.01Z"
            fill="black"
          />
          <path
            d="M1292.38 371.279C1293.01 371.279 1293.51 370.769 1293.51 370.14C1293.51 369.511 1293.01 369.001 1292.38 369.001C1291.76 369.001 1291.26 369.511 1291.26 370.14C1291.26 370.769 1291.76 371.279 1292.38 371.279Z"
            fill="black"
          />
          <path
            d="M1291.19 371.595C1290.32 371.595 1289.77 372.353 1289.77 373.102V376.607C1289.76 377.292 1290.74 377.292 1290.74 376.607V373.383H1290.98V382.286C1290.97 383.216 1292.26 383.189 1292.26 382.286V377.098H1292.47V382.286C1292.49 383.189 1293.79 383.216 1293.79 382.286V373.383H1294.03V376.607C1294.02 377.298 1294.99 377.298 1295 376.607V373.102C1294.99 372.353 1294.41 371.608 1293.55 371.595H1291.19Z"
            fill="black"
          />
          <path
            d="M1288.49 369.141H1287.2V382.917H1288.49V369.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip7)">
          <path
            d="M1366.17 373.279C1366.79 373.279 1367.29 372.769 1367.29 372.14C1367.29 371.511 1366.79 371.001 1366.17 371.001C1365.55 371.001 1365.04 371.511 1365.04 372.14C1365.04 372.769 1365.55 373.279 1366.17 373.279Z"
            fill="black"
          />
          <path
            d="M1366.01 380.5V384.461C1366.01 385.181 1364.95 385.181 1364.94 384.461V380.5H1363.55L1365.04 375.207H1364.8L1363.93 378.222C1363.71 378.889 1362.82 378.619 1363.03 377.906L1364 374.646C1364.11 374.272 1364.58 373.611 1365.39 373.595H1366.12H1366.95C1367.73 373.611 1368.2 374.278 1368.33 374.646L1369.3 377.906C1369.5 378.615 1368.62 378.906 1368.4 378.222L1367.54 375.207H1367.26L1368.78 380.5H1367.36V384.461C1367.37 385.181 1366.32 385.177 1366.32 384.461V380.5H1366.01Z"
            fill="black"
          />
          <path
            d="M1375.38 373.279C1376.01 373.279 1376.51 372.769 1376.51 372.14C1376.51 371.511 1376.01 371.001 1375.38 371.001C1374.76 371.001 1374.26 371.511 1374.26 372.14C1374.26 372.769 1374.76 373.279 1375.38 373.279Z"
            fill="black"
          />
          <path
            d="M1374.19 373.595C1373.32 373.595 1372.77 374.353 1372.77 375.102V378.607C1372.76 379.292 1373.74 379.292 1373.74 378.607V375.383H1373.98V384.286C1373.97 385.216 1375.26 385.189 1375.26 384.286V379.098H1375.47V384.286C1375.49 385.189 1376.79 385.216 1376.79 384.286V375.383H1377.03V378.607C1377.02 379.298 1377.99 379.298 1378 378.607V375.102C1377.99 374.353 1377.41 373.608 1376.55 373.595H1374.19Z"
            fill="black"
          />
          <path
            d="M1371.49 371.141H1370.2V384.917H1371.49V371.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip8)">
          <path
            d="M1758.17 371.279C1758.79 371.279 1759.29 370.769 1759.29 370.14C1759.29 369.511 1758.79 369.001 1758.17 369.001C1757.55 369.001 1757.04 369.511 1757.04 370.14C1757.04 370.769 1757.55 371.279 1758.17 371.279Z"
            fill="black"
          />
          <path
            d="M1758.01 378.5V382.461C1758.01 383.181 1756.95 383.181 1756.94 382.461V378.5H1755.55L1757.04 373.207H1756.8L1755.93 376.222C1755.71 376.889 1754.82 376.619 1755.03 375.906L1756 372.646C1756.11 372.272 1756.58 371.611 1757.39 371.595H1758.12H1758.95C1759.73 371.611 1760.2 372.278 1760.33 372.646L1761.3 375.906C1761.5 376.615 1760.62 376.906 1760.4 376.222L1759.54 373.207H1759.26L1760.78 378.5H1759.36V382.461C1759.37 383.181 1758.32 383.177 1758.32 382.461V378.5H1758.01Z"
            fill="black"
          />
          <path
            d="M1767.38 371.279C1768.01 371.279 1768.51 370.769 1768.51 370.14C1768.51 369.511 1768.01 369.001 1767.38 369.001C1766.76 369.001 1766.26 369.511 1766.26 370.14C1766.26 370.769 1766.76 371.279 1767.38 371.279Z"
            fill="black"
          />
          <path
            d="M1766.19 371.595C1765.32 371.595 1764.77 372.353 1764.77 373.102V376.607C1764.76 377.292 1765.74 377.292 1765.74 376.607V373.383H1765.98V382.286C1765.97 383.216 1767.26 383.189 1767.26 382.286V377.098H1767.47V382.286C1767.49 383.189 1768.79 383.216 1768.79 382.286V373.383H1769.03V376.607C1769.02 377.298 1769.99 377.298 1770 376.607V373.102C1769.99 372.353 1769.41 371.608 1768.55 371.595H1766.19Z"
            fill="black"
          />
          <path
            d="M1763.49 369.141H1762.2V382.917H1763.49V369.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip9)">
          <path
            d="M839.168 373.279C839.79 373.279 840.294 372.769 840.294 372.14C840.294 371.511 839.79 371.001 839.168 371.001C838.546 371.001 838.042 371.511 838.042 372.14C838.042 372.769 838.546 373.279 839.168 373.279Z"
            fill="black"
          />
          <path
            d="M839.012 380.5V384.461C839.006 385.181 837.948 385.181 837.938 384.461V380.5H836.552L838.042 375.207H837.8L836.933 378.222C836.714 378.889 835.823 378.619 836.033 377.906L837.003 374.646C837.114 374.272 837.581 373.611 838.389 373.595H839.116H839.948C840.733 373.611 841.201 374.278 841.334 374.646L842.304 377.906C842.501 378.615 841.617 378.906 841.403 378.222L840.537 375.207H840.26L841.784 380.5H840.364V384.461C840.375 385.181 839.32 385.177 839.324 384.461V380.5H839.012Z"
            fill="black"
          />
          <path
            d="M848.385 373.279C849.007 373.279 849.511 372.769 849.511 372.14C849.511 371.511 849.007 371.001 848.385 371.001C847.763 371.001 847.259 371.511 847.259 372.14C847.259 372.769 847.763 373.279 848.385 373.279Z"
            fill="black"
          />
          <path
            d="M847.189 373.595C846.324 373.595 845.769 374.353 845.769 375.102V378.607C845.761 379.292 846.736 379.292 846.739 378.607V375.383H846.982V384.286C846.967 385.216 848.265 385.189 848.264 384.286V379.098H848.471V384.286C848.488 385.189 849.794 385.216 849.788 384.286V375.383H850.031V378.607C850.019 379.298 850.989 379.298 851.001 378.607V375.102C850.987 374.353 850.411 373.608 849.546 373.595H847.189Z"
            fill="black"
          />
          <path
            d="M844.487 371.141H843.205V384.917H844.487V371.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip10)">
          <path
            d="M752.168 373.279C752.79 373.279 753.294 372.769 753.294 372.14C753.294 371.511 752.79 371.001 752.168 371.001C751.546 371.001 751.042 371.511 751.042 372.14C751.042 372.769 751.546 373.279 752.168 373.279Z"
            fill="black"
          />
          <path
            d="M752.012 380.5V384.461C752.006 385.181 750.948 385.181 750.938 384.461V380.5H749.552L751.042 375.207H750.8L749.933 378.222C749.714 378.889 748.823 378.619 749.033 377.906L750.003 374.646C750.114 374.272 750.581 373.611 751.389 373.595H752.116H752.948C753.733 373.611 754.201 374.278 754.334 374.646L755.304 377.906C755.501 378.615 754.617 378.906 754.403 378.222L753.537 375.207H753.26L754.784 380.5H753.364V384.461C753.375 385.181 752.32 385.177 752.324 384.461V380.5H752.012Z"
            fill="black"
          />
          <path
            d="M761.385 373.279C762.007 373.279 762.511 372.769 762.511 372.14C762.511 371.511 762.007 371.001 761.385 371.001C760.763 371.001 760.259 371.511 760.259 372.14C760.259 372.769 760.763 373.279 761.385 373.279Z"
            fill="black"
          />
          <path
            d="M760.189 373.595C759.324 373.595 758.769 374.353 758.769 375.102V378.607C758.761 379.292 759.736 379.292 759.739 378.607V375.383H759.982V384.286C759.967 385.216 761.265 385.189 761.264 384.286V379.098H761.471V384.286C761.488 385.189 762.794 385.216 762.788 384.286V375.383H763.031V378.607C763.019 379.298 763.989 379.298 764.001 378.607V375.102C763.987 374.353 763.411 373.608 762.546 373.595H760.189Z"
            fill="black"
          />
          <path
            d="M757.487 371.141H756.205V384.917H757.487V371.141Z"
            fill="black"
          />
        </g>
        <g clip-path="url(#clip11)">
          <path
            d="M2032.17 312.279C2032.79 312.279 2033.29 311.769 2033.29 311.14C2033.29 310.511 2032.79 310.001 2032.17 310.001C2031.55 310.001 2031.04 310.511 2031.04 311.14C2031.04 311.769 2031.55 312.279 2032.17 312.279Z"
            fill="black"
          />
          <path
            d="M2032.01 319.5V323.461C2032.01 324.181 2030.95 324.181 2030.94 323.461V319.5H2029.55L2031.04 314.207H2030.8L2029.93 317.222C2029.71 317.889 2028.82 317.619 2029.03 316.906L2030 313.646C2030.11 313.272 2030.58 312.611 2031.39 312.595H2032.12H2032.95C2033.73 312.611 2034.2 313.278 2034.33 313.646L2035.3 316.906C2035.5 317.615 2034.62 317.906 2034.4 317.222L2033.54 314.207H2033.26L2034.78 319.5H2033.36V323.461C2033.37 324.181 2032.32 324.177 2032.32 323.461V319.5H2032.01Z"
            fill="black"
          />
          <path
            d="M2041.38 312.279C2042.01 312.279 2042.51 311.769 2042.51 311.14C2042.51 310.511 2042.01 310.001 2041.38 310.001C2040.76 310.001 2040.26 310.511 2040.26 311.14C2040.26 311.769 2040.76 312.279 2041.38 312.279Z"
            fill="black"
          />
          <path
            d="M2040.19 312.595C2039.32 312.595 2038.77 313.353 2038.77 314.102V317.607C2038.76 318.292 2039.74 318.292 2039.74 317.607V314.383H2039.98V323.286C2039.97 324.216 2041.26 324.189 2041.26 323.286V318.098H2041.47V323.286C2041.49 324.189 2042.79 324.216 2042.79 323.286V314.383H2043.03V317.607C2043.02 318.298 2043.99 318.298 2044 317.607V314.102C2043.99 313.353 2043.41 312.608 2042.55 312.595H2040.19Z"
            fill="black"
          />
          <path
            d="M2037.49 310.141H2036.2V323.917H2037.49V310.141Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(92 465)"
            />
          </clipPath>
          <clipPath id="clip1">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(2021 348)"
            />
          </clipPath>
          <clipPath id="clip2">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(92 437)"
            />
          </clipPath>
          <clipPath id="clip3">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(92 484)"
            />
          </clipPath>
          <clipPath id="clip4">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(2029 327)"
            />
          </clipPath>
          <clipPath id="clip5">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(1690 369)"
            />
          </clipPath>
          <clipPath id="clip6">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(1280 369)"
            />
          </clipPath>
          <clipPath id="clip7">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(1363 371)"
            />
          </clipPath>
          <clipPath id="clip8">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(1755 369)"
            />
          </clipPath>
          <clipPath id="clip9">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(836 371)"
            />
          </clipPath>
          <clipPath id="clip10">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(749 371)"
            />
          </clipPath>
          <clipPath id="clip11">
            <rect
              width="15"
              height="14"
              fill="white"
              transform="translate(2029 310)"
            />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}

export default Floor3;
