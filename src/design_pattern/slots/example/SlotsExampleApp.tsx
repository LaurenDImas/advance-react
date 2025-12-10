// import CardDefaultSlots from "./components/CardDefaultSlots.tsx";
import CardNamedSlots from "./components/CardNamedSlots.tsx";
import {MyProvider} from "./context/MyContext.tsx";
import SlotComponent from "./components/SlotComponent.tsx";
import SlotsContext from "./components/SlotsContext.tsx";

const SlotsExampleApp = () => {
	return (
		<div>
			{/*<CardDefaultSlots>*/}
			{/*	/!*Default Slots*!/*/}
			{/*	<h1>This is my CardDefaultSlots Title</h1>*/}
			{/*	<p>This is my CardDefaultSlots Content</p>*/}
			{/*	<button className="bg-black text-white p-2 px-3">Learn More</button>*/}
			{/*</CardDefaultSlots>*/}

			<CardNamedSlots
				cardTitle={<h1>This is my CardDefaultSlots Title</h1>}
				cardContent={<p>This is my CardDefaultSlots Content</p>}
				cardButton={<button className="bg-black text-white p-2 px-3">Learn More</button>}
			/>
			<hr />
			<MyProvider>
				<SlotComponent>
					<SlotsContext />
				</SlotComponent>
			</MyProvider>
			
		</div>
	)
}
export default SlotsExampleApp
