import {useCounter} from "./storeCounter.ts";
import OtherComponent from "./OtherComponent.tsx";

const Counter = () => {
    const {count} =   useCounter()
    return (
        <div>
            <h1 className="font-bold text-3xl mb-3">Count: {count}</h1>
            <OtherComponent />
        </div>
    )
}
export default Counter
