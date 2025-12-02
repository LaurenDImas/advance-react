import {motion} from "framer-motion";

const BackgroundAnimation = () => {
    return (
        <motion.div
            className="w-screen h-screen"
            animate={{
                backgroundColor: ['#FF0000', '#00FF00', '#0000FFF', '#FF0000']
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
        />
    )
}
export default BackgroundAnimation
