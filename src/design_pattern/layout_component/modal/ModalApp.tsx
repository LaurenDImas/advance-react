import Modal from "./components/Modal.tsx";
import GamesInfo from "./components/GameInfo.tsx";
import {games} from "./data/data.ts";

const ModalApp = () => {
    return (
        <>
            <Modal>
                <GamesInfo data={games} />
            </Modal>
        </>
    )
}
export default ModalApp
