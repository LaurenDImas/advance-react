import {useGetProductByIdQuery} from "../app/services/products";

const Product = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(1);

    if (isError){
        return <h1 className="text-xl font-semibold">Error!!!!!!</h1>;
    }

    if (isLoading){
        return <h1 className="text-xl font-semibold">Loading...</h1>;
    }

    return (
        <div>
            <h1 className="text-xl font-semibold">{data?.brand}</h1>
            <h1 className="text-xl font-semibold">{data?.category}</h1>
            <h1 className="text-xl font-semibold">{data?.description}</h1>
        </div>
    )
}
export default Product
