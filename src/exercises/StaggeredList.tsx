import  {motion} from "framer-motion";

const items = ['item 1', 'item ', 'item 3', 'item 4', 'item 5'];

const staggerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

const StaggeredList = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{
                staggerChildren: 0.2
            }}
            
        >
            {items.map((item, index) => (
                <motion.li
                    variants={staggerVariants}
                    key={index}
                    className="mb-2 p-5 bg-amber-200 list-none"
                >{item}</motion.li>
            ))}
        </motion.div>
    )
}
export default StaggeredList
