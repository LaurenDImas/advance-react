import {motion} from "framer-motion";
import {useState} from "react";

const colors = ["bg-blue-500","bg-green-500","bg-red-500","bg-yellow"]

const TaoToChangeColor = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const handleTap = () => {
        setColorIndex(prevState =>  (prevState + 1) % colors.length);
    }
    return (
        <motion.div
            onTap={handleTap}
            className={`w-32 h-32 ${colors[colorIndex]} rounded-lg flex items-center justify-center cursor-pointer`}
        >
            Tap Me
        </motion.div>
    )
}
export default TaoToChangeColor
