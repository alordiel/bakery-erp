import ProductForm from "@/components/product-form";
export default function AddNew() {

    return (
        <main>
            <div className="w-1/3 mx-auto max-w-screen-sm">
                <h1 className="text-5xl font-medium text-center mb-3">Add new product</h1>
                <ProductForm />
            </div>
        </main>
    )
}