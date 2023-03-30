"use client"
import {useState} from "react";

export default function ProductForm({product}) {

    const [isLoading, setIsLoading] = useState(false);

    const isEdit = (product !== undefined && product.id !== undefined);
    const submitButtonText = isEdit ? "Update" : "Add";

    const [productData, setProductData] = useState({
        id: isEdit ? product.id : '',
        name: isEdit ? product.name : '',
        price: isEdit ? product.price : '',
        tax: isEdit ? product.tax : '',
        finalPrice: isEdit ? product.finalPrice : '',
        cost: isEdit ? product.cost : '',
        preparationTime: isEdit ? product.preparationTime : '',
        shelfLife: isEdit ? product.shelfLife : '',
        isResell: isEdit ? product.isResell : false,
        notes: isEdit ? product.notes : '',
    });

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

    // Tracks the changes of the product ID (when a new product is created)
    function handleProductID(id) {
        // TODO Add button for new product
        // TODO Add button for deleting current product
        setProductData({
            ...productData,
            id: id,
        });
    }

    // Monitors when the data is being sent to the database
    function handleIsLoading(status) {
        setIsLoading({
            isLoading: status
        });
    }

    // Send data to the server
    async function manageProduct() {
        // TODO Validate data before sending
        handleIsLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: productData.name,
                price: productData.price,
                tax: productData.tax,
                finalPrice: productData.finalPrice,
                cost: productData.cost,
                preparationTime: productData.preparationTime,
                shelfLife: productData.shelfLife,
                isResell: productData.isResell,
                notes: productData.notes,
            })
        }

        fetch('http://localhost:3000/api/products', options)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    return response.json();
                } else {
                    console.log(response.status + " : " + response.statusText);
                    throw new Error("Something went wrong on API server! Check the console for more details.");
                }
            })
            .then((json) => {
                handleIsLoading(false);
                handleProductID(json.id);
                if (!isEdit) {
                    window.location.href = '/products/' + json.id;
                }
            })
            .catch(e => {
                handleIsLoading(false);
                console.log(e)
            });
    }

    function DeleteButton() {
        if (isEdit) {
           return <button className="bg-red-500 hover:bg-red-700 text-white font-bold ml-5 py-2 px-4 rounded">
                Delete product
            </button>
        }
    }

    return (

        <div>
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
                        className="block mt-1 w-90 px-4 py-2
                                border border-gray-300 border-solid rounded shadow-md
                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows="3">
                        </textarea>
                </label>


            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={manageProduct}
            >
                {submitButtonText}
            </button>
            <DeleteButton/>
        </div>
    )
}