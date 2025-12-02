import {motion} from "framer-motion";

const ComplexTimelineAnimation = () => {
    const itemsVariants = {
        hidden: {opacity: 0, scale: 0.5, rotate: 100},
        visible: {opacity: 1, scale: 1, rotate: 0},
    }
    return (
        <motion.div
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            transition={{staggerChildren: 0.5, }}
        >
            {[1,2,3].map((item) => (
                <motion.div
                    key={item}
                    variants={itemsVariants}
                    className="bg-purple-500 ml-[2rem] p-4 text-white rounded-lg"
                >
                </motion.div>
            ))}
        </motion.div>
    )
}
export default ComplexTimelineAnimation
