import  {motion} from "framer-motion";

const VerticalMovement = () => {
    return (
        <motion.div
            className="bg-red-600 rounded-full w-20 h-20"
            animate={{ y: [0, -100, 0]}}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    )
}
export default VerticalMovement
