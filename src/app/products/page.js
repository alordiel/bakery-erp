import Link from "next/link"

async function deleteProduct() {

}

function ProductsList({allProducts}) {
    if (allProducts.products !== undefined && allProducts.products.length > 0) {
        const productRows = allProducts.products.map(product => {
            return <tr key={product.id}>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.name}</td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.cost}</td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{product.finalPrice}</td>
                <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                    <Link href={"/product/" + product.id}>edit</Link> &nbsp;
                    <a href="#">delete</a>
                </td>
            </tr>
        })
        return <table
            className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
            <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
                <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Product
                    name
                </th>
                <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Cost</th>
                <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Final
                    price
                </th>
                <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Actions</th>
            </tr>
            </thead>
            <tbody>{productRows}</tbody>
        </table>
    }
    return <p>No Products found.</p>

}

export default async function Production() {

    const data = await fetch('http://localhost:3000/api/products', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const allProducts = await data.json();

    return (
        <main>
            <h1 className="text-4xl">Продукти</h1>
            <br/>
            <div className="mb-5">
                <ProductsList
                    allProducts={allProducts}
                ></ProductsList>
            </div>
            <Link href={"/products/add-new"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add new product
            </Link>
        </main>
    )
};