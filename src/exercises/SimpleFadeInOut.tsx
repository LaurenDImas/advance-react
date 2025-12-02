import {motion, AnimatePresence} from "framer-motion"
import {useState} from "react";

const SimpleFadeInOut = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div
            className="flex flex-col items-center"
        >
            <button
                className="mb-4 bg-blue-600 text-white rounded"
                onClick={() => setVisible(!visible)}
            >
                Toggle
            </button>

            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="p-4 bg-gray-200 rounded"
                        initial={{opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 1 }}
                    >
                        Hello, I,am fading component
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
export default SimpleFadeInOut
