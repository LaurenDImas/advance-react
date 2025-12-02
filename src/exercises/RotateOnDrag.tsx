import {motion} from "framer-motion";
import {useState} from "react";

const RotateOnDrag = () => {
    const [rotation, setRotation] = useState(0)

    const handleDrag = (e: any, info: { offset: { x: number; }; }) => {
        const newRotation = rotation + info.offset.x;
        console.log(newRotation);
        setRotation(newRotation);
    }

    return (
        <motion.div
            className="w-32 h-32 bg-red-600 rounded-lg flex items-center justify-center"
            drag
            onDrag={handleDrag}
            transition={{duration:5}}
            style={{ rotate: rotation }}
        >
            Drag Me!
        </motion.div>
    )
}
export default RotateOnDrag
