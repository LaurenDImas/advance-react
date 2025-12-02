import {motion, useMotionValue} from "framer-motion";

const HoverLinkedScale = () => {
    const scale = useMotionValue(1)
    
    return (
        <motion.div
            className="p-4 bg-blue-500 rounded-lg"
            onHoverStart={() => scale.set(1.2)}
            onHoverEnd={() => scale.set(1)}
            style={{scale}}
        >
            Hover Me!
        </motion.div>
    )
}
export default HoverLinkedScale
