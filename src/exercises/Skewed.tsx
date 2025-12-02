import {motion} from "framer-motion";
import {useState} from "react";

const Skewed = () => {
    const [isSkewed, setIsSkewed] = useState<boolean>()

    return (
        <motion.div
            className="bg-yellow-600 w-40 h-40"
            onClick={() => setIsSkewed((prev) => !prev)}
            animate={{ skewX: isSkewed ? 20:0 }}
            transition={{ duration: 0.8 }}
        />
    )
}
export default Skewed
