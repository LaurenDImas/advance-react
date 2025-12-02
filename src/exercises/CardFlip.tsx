import {motion} from "framer-motion";
import {useState} from "react";

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
        className="w-64 h-64"
        style={{
            perspective: 1000
        }}>
            <motion.div
                className="relative h-full w-full"
                initial={{ rotateY: 0}}
                whileInView={{ rotateY: isFlipped ? 0 : 180 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <motion.div
                    className="absolute w-full h-full bg-blue-500 flex items-center justify-center rounded"
                    style={{
                        backfaceVisibility: "hidden"
                    }}
                >
                    Front
                </motion.div>
                <motion.div
                    className="absolute w-full h-full bg-blue-500 flex items-center justify-center rounded"
                    style={{ backfaceVisibility: "hidden",  transform: "rotateY(180deg)" }}
                >
                    Back
                </motion.div>
            </motion.div>
        </div>
    )
}
export default CardFlip
