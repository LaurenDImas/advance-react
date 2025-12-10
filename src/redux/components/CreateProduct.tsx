import {useAddNewProductMutation} from "../app/services/products";

const CreateProduct = () => {
    const [addNewProduct, {
        data,
        isError,
        isLoading,
    }] = useAddNewProductMutation();

    if (isError){
        return <h1 className="text-xl font-semibold">Error!!!!!!</h1>;
    }

    if (isLoading){
        return <h1 className="text-xl font-semibold">Loading...</h1>;
    }

    const handleAddProduct = async () => {
        const newProduct = {
            id: 1,
            title: "Amazing T-Shirt",
            description: "This is one of the best and amazing t-shirt in the market",
        }

        await addNewProduct(newProduct)
    }

    return (
        <div>
            <h1 className="text-xl font-semibold">{data?.id}</h1>
            <h1 className="text-xl font-semibold">{data?.title}</h1>
            <h1 className="text-xl font-semibold">{data?.description}</h1>
            <button onClick={handleAddProduct} className="bg-gray-400 px-4 py-2 rounded-lg" disabled={isLoading}>Add New Product</button>
        </div>
    )
}
export default CreateProduct
