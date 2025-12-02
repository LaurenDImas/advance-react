import {motion, useMotionValue, useMotionValueEvent} from "framer-motion";
import {useState} from "react";

const DraggableBox = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useMotionValueEvent(x, 'change', (latest) => {
        setPos(prev => ({...prev, x: latest}))
    })
    
    useMotionValueEvent(y, 'change', (latest) => {
        setPos(prev => ({...prev, y: latest}))
    })
    
    return (
        <div className="flex flex-col items-center">
            <motion.div
                className="w-32 h-32 bg-green-500 rounded-lg shadow-lg"
                drag
                style={{x,y}}
            />
            <p>
                Position: ({x.get().toFixed(2)}, {y.get().toFixed(2)})
            </p>
        </div>
    )
}
export default DraggableBox
