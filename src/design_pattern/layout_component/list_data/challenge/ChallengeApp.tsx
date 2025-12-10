import RenderList from "./components/RenderList.tsx";
import {electronics, clothing, homeGoods} from "./data/data.ts";
import ProductInfo from "./components/ProductInfo.tsx";

const ChallengeApp = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <RenderList
                data={electronics}
                resourceName='product'
                dataToRender={ProductInfo}
            />
            
            <RenderList
                data={clothing}
                resourceName='product'
                dataToRender={ProductInfo}
            />
            
            <RenderList
                data={homeGoods}
                resourceName='product'
                dataToRender={ProductInfo}
            />
        </div>
    )
}
export default ChallengeApp
