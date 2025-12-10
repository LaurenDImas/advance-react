import ComponentFactory, {type ComponentConfig} from "./utils/ComponentFactory.tsx";

const buttonConfig: ComponentConfig = {
	type: 'button',
	props: {
		label: "Click Me",
		onClick: () => alert("Click me!"),
		disabled: false,
	}
}

const cardConfig: ComponentConfig = {
	type: 'card',
	props: {
		title: 'CardDefaultSlots Title',
		content: 'Some random content...',
		footer: 'footer'
	}
}

const FactoryChallenge = () => {
	return (
		<div>
			{ComponentFactory(buttonConfig)}
			<hr />
			{ComponentFactory(cardConfig)}
		</div>
	)
}
export default FactoryChallenge
