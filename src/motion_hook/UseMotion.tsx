import {motion, useMotionValue, useMotionValueEvent} from "framer-motion";

const UseMotion = () => {
    const x = useMotionValue(200)
    
    useMotionValueEvent(x, 'animationStart', () => {
        console.log("animation started on x")
    })
    
    useMotionValueEvent(x, 'change', (latest) => {
        console.log("x changed to", latest)
    })
    
    return (
        <motion.div
            className="box"
            drag
            dragConstraints={{
                left:0,
                right:200,
            }}
            style={{
                x
            }}
        >
        
        </motion.div>
    )
}
export default UseMotion
