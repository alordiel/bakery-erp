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

async function deleteProduct(){

}

function ProductsList({allProducts}) {
     if (allProducts.products !== undefined && allProducts.products.length > 0) {
         const productRows = allProducts.products.map(product => {
             return <tr>
                 <td>{product.name }</td>
                 <td>{product.cost}</td>
                 <td>{product.finalPrice}</td>
                 <td>
                     <Link href={"/product/" + product.id}>edit</Link>
                     <a href="#">delete</a>
                 </td>
             </tr>
         })
               return <table>
                    <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Cost</th>
                        <th>Final price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>{productRows}</tbody>
                </table>
            }
               return <p> No Products found.</p>

}

export default async function Production() {

    const data = await fetch('http://localhost:3000/api/products', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const allProducts = await data.json();
    console.log("ALL Products server side");
    console.log(allProducts);

    return (
        <main>
            <h1>Продукти</h1>
            <br/>
            <ProductsList
               allProducts={allProducts}
            ></ProductsList>
            <Link href={"/products/add-new"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add new product
            </Link>
        </main>
    )
};