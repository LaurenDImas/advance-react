import {motion} from "framer-motion"

const BouncingBall = () => {
    return (
        <motion.div
            className="box"
            animate={{
                y: [0, -100, 0]
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
        >

        </motion.div>
    )
}
export default BouncingBall
