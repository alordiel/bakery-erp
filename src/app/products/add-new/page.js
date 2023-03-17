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

const productData = {
    name: '',
    productPrice: 0,
    tax: 0,
    finalPrice: 0,
    cost: 0,
    preparationTime: 0,
    shelfLife: 0,
    isResell: false,
    notes: '',  
}
export default function AddNew() {
    return (
        <main>
            <div className="w-1/3 mx-auto max-w-screen-sm">
                <h1 className="text-5xl font-medium text-center mb-3">Add new product</h1>
                <div className="grid grid-cols-1 gap-6 mb-3">

                    <label className="block">
                        Product name
                        <input type="text"
                               className="block w-96 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder=""/>
                    </label>

                    <label className="block">
                        Product price (without tax)
                        <input type="number"
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="0"/>
                    </label>

                    <label className="block">
                        Tax/VAT (%)
                        <input type="number"
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="0.0"/>
                    </label>

                    <label className="block">
                        Final price
                        <input type="number"
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="0"/>
                    </label>

                    <label className="block">
                        Preparation time (hours)
                        <input type="number"
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="1"/>
                    </label>

                    <label className="block">
                        Shelf life (hours)
                        <input type="number"
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="42"/>
                    </label>

                    <label className="block">
                        <input type="checkbox"
                               className="accent-pink-300 focus:accent-pink-500 mr-2"/>
                        This a reselling product
                    </label>


                    <label className="block">
                        Additional notes
                        <textarea
                            className="block mt-1 w-full
                                border-1 border-gray-300 border-solid rounded shadow-md
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="3">
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