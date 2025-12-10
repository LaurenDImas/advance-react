import {useGetAllProductQuery} from "../app/services/products";

const Products = () => {
    const {data, isError, isLoading} = useGetAllProductQuery();

    if (isError){
        return <h1 className="text-xl font-semibold">Error!!!!!!</h1>;
    }

    if (isLoading){
        return <h1 className="text-xl font-semibold">Loading...</h1>;
    }
    return (
        <div>
            {data?.products?.map((product) => (
                <div key={product.id}>
                    <h1 className="text-xl font-semibold">{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}
export default Products
