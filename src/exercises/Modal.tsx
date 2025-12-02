import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-col items-center">
            <button
                className="mb-4 p-2 bg-blue-600 text-white rounded"
                onClick={() => setIsOpen(true)}
            >Open</button>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="bg-white p-4 rounded transition"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0,  }}
                            animate={{ opacity: 1,  }}
                            exit={{  opacity: 0,  }}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                        >
                            <h2 className="text-lg font-bold text-black">Modal Title</h2>
                            <p className="text-black">This is some random modal content here.</p>

                            <button
                                className="mt-4 p-2 bg-red-600 text-white rounded"
                                onClick={() => setIsOpen(false)}
                            >Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
export default Modal
