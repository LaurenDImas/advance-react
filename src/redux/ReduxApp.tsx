import {store} from "./app/store.js";
import {Provider} from "react-redux";
// import UpdateProduct from "./components/UpdateProduct.tsx";
import DeleteProduct from "./components/DeleteProduct.tsx";
// import Counter from "./components/Counter.tsx";
// import Products from "./components/Products.tsx";
// import Product from "./components/Product.tsx";
// import CreateProduct from "./components/CreateProduct.tsx";

const ReduxApp = () => {
    return (
        <Provider store={store}>
            {/*<Products />*/}
            {/*<Product />*/}
            {/*<CreateProduct />*/}
            {/*<UpdateProduct productId={4} />*/}
            <DeleteProduct productId={2} />
        </Provider>
    )
}
export default ReduxApp
