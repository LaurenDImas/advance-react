import {motion, AnimatePresence} from "framer-motion"
import {useState} from "react";

const SlideInFromTheLeft = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex">
            <button
                className="mb-4 p-2 bg-blue-600 text-white rounded"
                onClick={() => setIsOpen(!isOpen)}
            >
                Toggle Sidebar
            </button>

            <motion.div
                // className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4 ${
                //     isOpen ? "" : "-translate-x-full"
                // }`}
                className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4`}
                initial={{x: "-100%"}}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-lg font-bold">Sidebar</h2>
                <p>Some rnadom content that will goes here</p>
            </motion.div>
        </div>
    )
}
export default SlideInFromTheLeft
