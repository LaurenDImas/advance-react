import {useUpdateProductMutation} from "../app/services/products";

const UpdateProduct = ({productId}) => {

    const [updateProduct, {
        data,
        isError,
        isLoading,
    }] = useUpdateProductMutation()

    if (isError){
        return <h1 className="text-xl font-semibold">Error!!!!!!</h1>;
    }

    if (isLoading){
        return <h1 className="text-xl font-semibold">Loading...</h1>;
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Title Updated",
            }

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData
            })
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            {/*<h1 className="text-xl font-semibold">{data?.id}</h1>*/}
            <h1 className="text-xl font-semibold">{data?.title}</h1>
            {/*<h1 className="text-xl font-semibold">{data?.description}</h1>*/}
            <button onClick={handleUpdateProduct} className="bg-gray-400 px-4 py-2 rounded-lg" disabled={isLoading}>Update Product</button>
        </div>
    )
}
export default UpdateProduct
