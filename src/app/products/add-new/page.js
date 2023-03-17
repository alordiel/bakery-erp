"use client"

import axios from "axios";

async function addNewProduct() {
    axios.post('http://localhost:3000/api/product', 'data')
        .then(a => {
            console.log(a)
        })
        .catch(e => {
            console.log(e)
        });
}


export default function AddNew() {
    return (
        <main>
            <div className="w-1/3 mx-auto max-w-screen-sm">
                <h1 className="text-5xl font-medium text-center mb-3">Add new product</h1>
                <div className="grid grid-cols-1 gap-6 mb-3">
                    <label className="block">
                        <span className="text-gray-700">Product name</span>
                        <input type="text"
                               className="w-full border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder=""/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email address</span>
                        <input type="email" className="
                    mt-1
                    block
                    w-full border-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="john@example.com"/>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">When is your event?</span>
                        <input type="date" className="
                    mt-1
                    block border-1
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "/>
                    </label>

                    <label className="block">
                        <span className="text-gray-700">Additional notes</span>
                        <textarea
                            className="
                                mt-1 block w-full
                                rounded-md
                                border-1
                                border-gray-300
                                shadow-md
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                              " rows="3">
                        </textarea>
                    </label>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={addNewProduct}>
                    Add new product
                </button>
            </div>
        </main>
    )
}