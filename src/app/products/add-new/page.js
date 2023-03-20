"use client"
import axios from "axios";
import {useState} from "react";

export default function AddNew() {

    const [productData, setProductData] = useState({
        name: '',
        price: 0,
        tax: 0,
        finalPrice: 0,
        cost: 0,
        preparationTime: 0,
        shelfLife: 0,
        isResell: false,
        notes: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    // Handles all the changes for the input fields and updates the productData
    function handleChange(e) {
        let finalPrice = productData.finalPrice;
        if (e.target.name === 'price' || e.target.name === 'tax') {
            if (e.target.name === 'price') {
                finalPrice = ((1 + productData.tax) * e.target.value).toFixed(2);
            } else {
                finalPrice = ((1 + (e.target.value / 100)) * productData.price).toFixed(2);
            }
        }
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
            finalPrice: finalPrice
        });
    }

    // Tracks the changes of the checkbox
    function handleCheckboxChange(e) {
        setProductData({
            ...productData,
            isResell: e.target.checked,
        });
    }
    // Monitors when the data is being sent to the database
    function handleIsLoading(status) {
        setIsLoading({
            isLoading: status
        });
    }

    function addNewProduct(productData) {
        handleIsLoading(true);
        const dataCopy = {...productData};
        console.log(dataCopy)
        const data = JSON.stringify(...productData)
        console.log(data);
        axios.post('http://localhost:3000/api/product', data)
            .then(a => {
                handleIsLoading(false);
                console.log(a)
            })
            .catch(e => {
                handleIsLoading(false);
                console.log(e)
            });
    }

    return (
        <main>
            <div className="w-1/3 mx-auto max-w-screen-sm">
                <h1 className="text-5xl font-medium text-center mb-3">Add new product</h1>
                <div className="grid grid-cols-1 gap-6 mb-3">

                    <label className="block">
                        Product name
                        <input type="text"
                               name="name"
                               value={productData.name}
                               onChange={handleChange}
                               className="block w-96 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder=""/>
                    </label>

                    <label className="block">
                        Product price (without tax)
                        <input type="number"
                               name="price"
                               value={productData.price}
                               onChange={handleChange}
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="0"/>
                    </label>

                    <label className="block">
                        Tax/VAT (%)
                        <input type="number"
                               name="tax"
                               value={productData.tax}
                               onChange={handleChange}
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="0.0"/>
                    </label>

                    <label className="block">
                        Final price
                        <input type="text"
                               name="finalPrice"
                               value={productData.finalPrice}
                               readOnly
                               disabled
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm disabled:opacity-75 read-only:bg-gray-100"
                               placeholder="0"/>
                    </label>

                    <label className="block">
                        Preparation time (hours)
                        <input type="number"
                               name="preparationTime"
                               value={productData.preparationTime}
                               onChange={handleChange}
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="1"/>
                    </label>

                    <label className="block">
                        Shelf life (hours)
                        <input type="number"
                               name="shelfLife"
                               value={productData.shelfLife}
                               onChange={handleChange}
                               className="block w-24 border-1 rounded border-gray-500 ring-offset-2 ring-2 shadow-sm
                               focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               placeholder="42"/>
                    </label>

                    <label className="block">
                        <input type="checkbox"
                               name="isResell"
                               checked={productData.isResell}
                               onChange={handleCheckboxChange}
                               className="accent-pink-300 focus:accent-pink-500 mr-2"/>
                        This a reselling product
                    </label>


                    <label className="block">
                        Additional notes
                        <textarea
                            name="notes"
                            value={productData.notes}
                            onChange={handleChange}
                            className="block mt-1 w-full
                                border-1 border-gray-300 border-solid rounded shadow-md
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            rows="3">
                        </textarea>
                    </label>


                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={addNewProduct}
                        disabled={isLoading}
                >
                    Add new product
                </button>
            </div>
        </main>
    )
}