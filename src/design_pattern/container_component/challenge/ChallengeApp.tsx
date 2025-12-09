import DataSource from "./shared/DataSource.tsx";
import ProductList from "./components/ProductList.tsx";
import axios from "axios";

const getServerData = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
}

const ChallengeApp = () => {
    
    return (
        <div className="mt-[20px]">
            <h1>Welcome to the Fase Store</h1>
            <DataSource
                getDataFunc={() => getServerData("https://fakestoreapi.com/products")}
                resourceName="products"
            >
                <ProductList products={null} />
            </DataSource>
        </div>
    )
}
export default ChallengeApp
