import  {motion} from "framer-motion";

const ColorChangeSquare = () => {
    return (
        <motion.div
            className="w-32 h-32"
            animate={{
                backgroundColor: ['#FF0000', '#00FF00', '#0000FFF', '#FF0000']
            }}
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
            }}
        />
    )
}
export default ColorChangeSquare
