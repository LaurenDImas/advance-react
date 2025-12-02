import  {motion} from "framer-motion";

const Zigzag = () => {
    return (
        <motion.div
            className="box"
            animate={{
                x: [0, 50, 0, -50, 0],
                y: [0, 50, 0, 50, 0],
            }}

            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    )
}
export default Zigzag
