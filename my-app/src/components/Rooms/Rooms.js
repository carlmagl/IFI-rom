import React from 'react';
import './Rooms.css';



function Rooms(){
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
        roomnumber: '1423'
    },
    {
        name: 'Assembler',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Limbo',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'C',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Caml',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Chill',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Cobol',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Euler',
        floor: '3',
        roomnumber: '1423'
    },
    {
        name: 'Fortress',
        floor: '3',
        roomnumber: '1423'
    },
]
    return(
        <section>
            <input/>
            <ul>
                {rooms.map((room) => 
                    <li key={room.roomnumber}>
                        <p>{room.name}</p>
                        <p>Etasje: {room.floor}</p>
                        <p>Rom nummer: {room.roomnumber}</p>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Rooms;