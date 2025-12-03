import {useStore} from "../stores/store.ts";
import {FaTimes} from "react-icons/fa";

const Modal = () => {
    const {
        isListModalOpen,
        isWorkspaceModalOpen,
        modalName,
        modalEmoji,
        modalType,
        setModalName,
        setModalEmoji,
        handleSaveModal,
        closeListModal,
        closeWorkspaceModal
    } = useStore();
    
    const handleClose = () => {
        if(modalType === 'List'){
            closeListModal();
        }else if(modalType === 'Workspace'){
            closeWorkspaceModal()
        }
    }
    
    if(!isListModalOpen && !isWorkspaceModalOpen) return null;
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 z-50">
            <div className="bg-white p-6 rounded-lg w-80">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">
                        {`Create New ${modalType}`}
                    </h2>
                    <div
                        onClick={handleClose}
                        className="text-gray-600 hover:text-gray-900">
                        <FaTimes />
                    </div>
                </div>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        placeholder={`Enter ${modalType} name`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={modalEmoji}
                        onChange={(e) => setModalEmoji(e.target.value)}
                        placeholder={`Enter ${modalType} Emoji`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <button
                        type="button"
                        onClick={handleSaveModal}
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal
