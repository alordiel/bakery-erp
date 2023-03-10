import Link from "next/link"
import axios from "axios";

async function getUserData() {
    axios.get('http://localhost:3000/api/product')
        .then(a => {
            console.log(a)
        })
        .catch(e => {
            console.log(e)
        });
}

export default function Production() {
    return (
        <main>
            <h1>Продукти</h1>
            <br/>
            <Link href={"/products/add-new"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add new product
            </Link>
        </main>
    )
};