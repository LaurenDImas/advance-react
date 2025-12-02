import {motion, useMotionValue, useSpring} from "framer-motion";

const DynamicRotation = () => {
    const rotate = useSpring(0);
    
    const rotateBox = () => rotate.set(rotate.get() + 100)
    return (
        <motion.div
            className="w-32 h-32 bg-blue-500 rounded"
            style={{rotate}}
            onClick={rotateBox}
            onHoverStart={rotateBox}
        >Click Me!</motion.div>
    )
}
export default DynamicRotation
