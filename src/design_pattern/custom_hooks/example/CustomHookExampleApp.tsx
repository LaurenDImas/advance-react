// import WithoutCustomHook from "./components/WithoutCustomHook.tsx";
// import WithCustomHook from "./components/WithCustomHook.tsx";
// import MyForm from "./components/MyForm.tsx";
// import ThemeToggle from "./components/ThemeToggle.tsx";
import Modal from "./components/Modal.tsx";
import useModal from "./hooks/useModal.ts";

const CustomHookExampleApp = () => {
    const {isOpen, openModal, closeModal} = useModal();
    return (
        <>
            <h1>My Amazing Modal</h1>
            <button onClick={openModal} className="hover:bg-blue-500">Open Modal</button>
            
            <Modal isOpen={isOpen} onClose={closeModal} />
            {/*<ThemeToggle />*/}
            {/*<MyForm/>*/}
            {/*<WithCustomHook />*/}
            {/*<WithoutCustomHook />*/}
        </>
    )
}
export default CustomHookExampleApp
