import {motion} from "framer-motion";

const StaggeredFadeAndSlideIn = () => {
    const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
    
    const listVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    }
    
    return (
        <motion.ul
            className="flex flex-col items-center"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="bg-blue-500 p-4 text-white my-2 rounded-lg"
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    )
}
export default StaggeredFadeAndSlideIn
