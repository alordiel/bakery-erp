"use client";
import axios from "axios";

async function addUser() {
    axios.post('http://localhost:3000/api/test','data')
        .then(a => { console.log(a)})
        .catch(e => {console.log(e)});
}
async function getUserData() {
    axios.get('http://localhost:3000/api/test')
        .then(a => { console.log(a)})
        .catch(e => {console.log(e)});
}

export default function Sells() {
    return (
        <main>
            <h1>Продажби</h1>
            <br/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addUser}>Add data</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get data</button>

        </main>
    )
};