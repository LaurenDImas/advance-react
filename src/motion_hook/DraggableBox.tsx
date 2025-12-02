import {useTransform, useMotionValue, motion} from "framer-motion"

const DraggableBox = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const backgroundColor = useTransform(
        x,
        [-100, 100],
        ["red","#f08080"])
    
    return (
        <motion.div
            drag
            dragConstraints={{
                left: -200,
                right: 200,
                top: -200,
                bottom: 200,
            }}
            style={{
                x,
                y,
                backgroundColor
            }}
            className="w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
        >
            <span className="text-white">Drag Me!</span>
        </motion.div>
    )
}
export default DraggableBox
