import {motion} from "framer-motion";

const Combined = () => {
    return (
        <motion.div
            className="bg-purple-500 w-20 h-20 rounded"
            animate={{ rotate: 360, x: [0,300,0] }}
            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
        >

        </motion.div>
    )
}
export default Combined
