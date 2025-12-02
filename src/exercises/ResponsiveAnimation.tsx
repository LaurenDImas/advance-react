import {motion, AnimatePresence} from "framer-motion"

const ResponsiveAnimation = () => {
    return (
        <motion.div
            className="p-2 bg-blue-600 text-white rounded-md shadow transition-transform duration-100 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >Click Me</motion.div>
    )
}
export default ResponsiveAnimation
