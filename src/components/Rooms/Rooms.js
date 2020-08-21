import React, { useState } from 'react';
import './Rooms.css';
import { Link } from 'react-router-dom';



function Rooms(){

const [input, setInput] = useState("");

const rooms = 
[
    {
        name: 'Scheme',
        floor: '1',
        roomnumber: '1251'
    },
    {
        name: 'Smalltalk',
        floor: '1',
        roomnumber: '1416'
    },
    {
        name: 'Simula',
        floor: '1',
        roomnumber: '1423'
    },
    {
        name: 'Sed',
        floor: '1',
        roomnumber: '1454'
    },
    {
        name: 'Shell',
        floor: '1',
        roomnumber: '1456'
    },
    {
        name: 'Python',
        floor: '2',
        roomnumber: '2269'
    },
    {
        name: 'Java',
        floor: '2',
        roomnumber: '2423'
    },
    {
        name: 'Lisp',
        floor: '2',
        roomnumber: '2428'
    },
    {
        name: 'Logo',
        floor: '2',
        roomnumber: '2438'
    },
    {
        name: 'Modula',
        floor: '2',
        roomnumber: '2443'
    },
    {
        name: 'Pascal',
        floor: '2',
        roomnumber: '2452'
    },
    {
        name: 'Perl',
        floor: '2',
        roomnumber: '2453'
    },
    {
        name: 'Postscript',
        floor: '2',
        roomnumber: '2458'
    },
    {
        name: 'Prolog',
        floor: '2',
        roomnumber: '2465'
    },
    {
        name: 'Awk',
        floor: '3',
        roomnumber: '3118'
    },
    {
        name: 'Ada',
        floor: '3',
        roomnumber: '3407'
    },
    {
        name: 'Assembler',
        floor: '3',
        roomnumber: '3417'
    },
    {
        name: 'Limbo',
        floor: '3',
        roomnumber: '3418'
    },
    {
        name: 'C',
        floor: '3',
        roomnumber: '3437'
    },
    {
        name: 'Caml',
        floor: '3',
        roomnumber: '3438'
    },
    {
        name: 'Chill',
        floor: '3',
        roomnumber: '3443'
    },
    {
        name: 'Cobol',
        floor: '3',
        roomnumber: '3452'
    },
    {
        name: 'Euler',
        floor: '3',
        roomnumber: '3459'
    },
    {
        name: 'Fortress',
        floor: '3',
        roomnumber: '3468'
    },
]
const shownList = rooms.filter(room => room.name.includes(input) || room.roomnumber.includes(input) || room.floor == input);
    return(
        <section>
            <div className="input">
                <p>Søk på navn, romnummer eller etasje</p>
                <input className="inputField" onChange={(e) =>{
                    setInput(e.target.value);
                }}/>
            </div>
            <ul className="liste">
                {shownList.map((room) =>
                <Link className="roomLink" to={`/${room.floor}etasje/${room.roomnumber}`}>
                    <li key={room.roomnumber} className="room">
                        <p>{room.name}</p>
                        <p>Etasje: {room.floor}</p>
                        <p>Nummer: {room.roomnumber}</p>
                    </li>
                </Link>
                )}
            </ul>
        </section>
    )
}

export default Rooms;