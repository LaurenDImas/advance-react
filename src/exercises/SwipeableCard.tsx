import {motion} from "framer-motion";
import {useState} from "react";

const SwipeableCard = () => {
    const [isRemoved, setIsRemoved] = useState(false);

    const handleSwipe = (_: never, info: { offset: { x: number; }; }) => {
        if (info.offset.x > 100){
            setIsRemoved(true)
        }else if(info.offset.x < -100){
            setIsRemoved(true)
        }
    }

    return (
        <motion.div
            className={`w-64 h-32 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white
            ${isRemoved ? 'hidden' : ''}`}
            drag='x'
            dragConstraints={{left: -100, right: 100}}
            onDragEnd={handleSwipe}
        >
            Swipe Me!</motion.div>
    )
}
export default SwipeableCard
