import {motion} from "framer-motion";
import {useState} from "react";

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
            onClick={() => setIsFlipped(prevState => !prevState)}
            style={{ perspective: 1000 }}
        >
            <motion.div
                variants={{
                    front: {rotateY:0},
                    back: {rotateY:180},
                }}
                initial="front"
                animate={isFlipped ? 'back' : 'front'}
                transition={{
                    duration: 0.6,
                }}
                className="
                    relative
                      w-64
                      h-40
                      bg-white
                      rounded-lg
                      shadow-lg
                      [transform-style:preserve-3d]
                "
            >
                {/* Front Side */}
                <div className="absolute inset-0 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold text-white [backface-visibility:hidden]">
                    Front Side
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-xl font-bold text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    Back Side
                </div>
            </motion.div>
        </div>
    
    )
}
export default FlippingCard
