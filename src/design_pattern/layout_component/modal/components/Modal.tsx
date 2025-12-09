import {type ReactNode, useState} from "react";

const Modal = ({children}: {children: ReactNode}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button
                onClick={() => setShow(true)}
                className="border p-5 bg-gray-300"
            >
                Show Modal
            </button>
            
            {show && (
                <section
                    className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black bg-opacity-50"
                    onClick={() => setShow(false)}
                >
                    <div
                        className="bg-white mx-[10%] my-auto p-[20px] w-[50%]"
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                    >
                        <button
                            className="border p-5 bg-gray-300"
                            onClick={() => setShow(false)}
                        >
                            Hide Modal
                        </button>
                        {children}
                    </div>
                </section>
            )}
        </>
    )
}
export default Modal
