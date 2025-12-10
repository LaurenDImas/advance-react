import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../app/features/counter/counterSlice";

const Counter = () => {
    // Read the data from the "store"
    const count = useSelector((state) => state.counter.value);
   // Changing the data by sending "action" to the store.
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button className="px-4 py-2 bg-gray-400" onClick={() => dispatch(decrement())}>-</button>
            <button className="px-4 py-2 bg-gray-400" onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
export default Counter
