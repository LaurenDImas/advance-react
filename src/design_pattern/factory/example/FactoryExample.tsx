import ButtonFactory from "./shared/ButtonFactory.tsx";

const FactoryExample = () => {
	
	const buttonType = "primary";
	const buttonLabel = "Click Me";
	
	return (
		<div>{ButtonFactory(buttonType, buttonLabel)}</div>
	)
}
export default FactoryExample
