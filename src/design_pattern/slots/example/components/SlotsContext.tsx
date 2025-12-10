import {useMyContext} from "../hooks/useMyContext.ts";

const SlotsContext = () => {
	const {setValue} = useMyContext();
	return (
		<button onClick={() => setValue('New Value From SlotsContext')}>Update Context Value</button>
	)
}
export default SlotsContext
