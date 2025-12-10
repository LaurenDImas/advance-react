import {useDeleteProductMutation} from "../app/services/products";

const DeleteProduct = ({productId}) => {
    const [deleteProduct, {
        data,
        isError,
        isLoading
    }] = useDeleteProductMutation();

    if (isError){
        return <h1 className="text-xl font-semibold">Error!!!!!!</h1>;
    }

    if (isLoading){
        return <h1 className="text-xl font-semibold">Loading...</h1>;
    }

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(productId);
        }catch(e){
            console.error(e);
        }
    }

    return (
        <div>
            <h1>{data?.title ? `${data.title} successfully deleted` : ''}</h1>
            <button onClick={handleDeleteProduct} className="bg-gray-400 px-4 py-2 rounded-lg" disabled={isLoading}>Delete Product</button>

        </div>
    )
}
export default DeleteProduct
