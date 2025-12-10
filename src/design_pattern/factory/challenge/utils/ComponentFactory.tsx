import type {ButtonProps, CardProps, ModalProps} from "./component-types.ts";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import Modal from "../components/Modal.tsx";

export type ComponentConfig =
	| { type: 'button', props: ButtonProps }
	| { type: 'card', props: CardProps }
	| { type: 'modal', props: ModalProps }

function ComponentFactory(config: ComponentConfig){
	switch (config.type) {
		case 'button':
			return <Button {...config.props} />
		case 'card':
			return <Card {...config.props} />
		case 'modal':
			return <Modal {...config.props} />
		default:
			throw new Error("Unknown component type")
	}
}

export default ComponentFactory;