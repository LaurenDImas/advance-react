import type {ReactNode} from "react";
import ModalTitle from "./ModalTitle.tsx";
import ModalBody from "./ModalBody.tsx";
import ModalFooter from "./ModalFooter.tsx";

const Modal = ({children}: {children: ReactNode}) => {
	return (
		<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-lg w-[20rem]">{children}</div>
		</div>
	)
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal
