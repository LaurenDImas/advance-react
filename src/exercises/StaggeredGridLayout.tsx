import {motion} from 'framer-motion'

const items = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]

const StaggeredGridLayout = () => {
    return (
        <motion.div
            className="grid grid-cols-3 gap-4"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className="p-4 bg-gray-200 rounded text-black"
                    // variants={{
                    //     hidden: {opacity: 0},
                    //     visible: {opacity: 1},
                    // }}
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: index * 0.2,
                    }}
                >{item}</motion.div>
            ))}
        </motion.div>
    )
}
export default StaggeredGridLayout
