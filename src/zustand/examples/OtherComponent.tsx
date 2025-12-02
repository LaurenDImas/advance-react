import {useCounter} from "./storeCounter.ts";

const OtherComponent = () => {
    const {increment, decrement} = useCounter();
    return (
        <div>
            <button className="px-3 py-1 bg-gray-400 hover:bg-gray-600 text-white mr-3" onClick={increment}>Increment</button>
            <button className="px-3 py-1 bg-gray-400 hover:bg-gray-600 text-white" onClick={decrement}>Decrement</button>
        </div>
    )
}
export default OtherComponent
