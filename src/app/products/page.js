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

export default function Dashboard() {
    return (
        <main>
            <h1>Продукти</h1>
            <br/>
            <button onClick={addUser}>Add data</button>
            <button onClick={getUserData}>Get data</button>

        </main>
    )
};