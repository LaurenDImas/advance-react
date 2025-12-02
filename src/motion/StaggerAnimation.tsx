import {motion} from "framer-motion";

// const parentVariants = {
//     hidden: {opacity: 0},
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.8,
//         }
//     },
// }
//
// const childVariants = {
//     hidden: {opacity: 0, y: 20},
//     visible: {opacity: 1, y: 0},
// }
//

const parentVariants = {
    visible: {opacity: 1},
    hidden: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        }
    },
}

const childVariants = {
    hidden: {opacity: 1, y: 0},
    visible: {opacity: 1, y: -20},
}

const StaggerAnimation = () => {
    return (
        <motion.div
            variants={parentVariants}
            initial="visible"
            animate="hidden"
        >
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="box mt-2"
                    variants={childVariants}
                />
            ))}
        </motion.div>
    )
}
export default StaggerAnimation
