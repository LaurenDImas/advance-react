import {useState} from "react";
import Modal from "./components/Modal.tsx";

const CompoundChallenge = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);
	return (
		<div>
			<button onClick={openModal} className="px-4 py-2 bg-green-400 text-white rounded-sm">
				Open Modal
			</button>
			
			{isModalOpen && (
				<Modal>
					<Modal.Title>Modal Title</Modal.Title>
					<Modal.Body>This is the body of the modal</Modal.Body>
					<Modal.Footer>
						<button onClick={() => setModalOpen(false)} className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md text-sm">Cancel</button>
						<button className="px-4 py-2 text-white bg-teal-500 rounded-md text-sm">Confirm</button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	)
}
export default CompoundChallenge
