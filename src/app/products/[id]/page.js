import ProductForm from "@/components/product-form";
export default async function Page({params}) {

    const data = await fetch('http://localhost:3000/api/products/' + params.id, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const singleProduct = await data.json();

    return <main>
        <h2>Edit Product: {singleProduct.product.name}</h2>
        <ProductForm product={singleProduct.product} />
    </main>
}