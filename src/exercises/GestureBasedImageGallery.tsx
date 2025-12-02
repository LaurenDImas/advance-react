import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

const images = [
    "https://images.unsplash.com/photo-1502154882433-a614dba12819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1761839257513-a921710a4291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670532202958-0fe6e64bd51f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
]


const GestureBasedImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (_: any, info: { offset: { x: number; }; }) => {
        if (info.offset.x > 100){

            setCurrentIndex((prev) => (prev-1 + images.length) % images.length);
        }else if (info.offset.x < -100){
            setCurrentIndex((prev) => (prev+1) % images.length);
        }
    }
    return (
        <div
            className="relative w-72 h-72 overflow-hidden"
        >
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="image"
                    drag={"x"}
                    dragConstraints={{top: 0, bottom: 0}}
                    onDragEnd={handleSwipe}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="w-full h-full rounded-lg"
                />
            </AnimatePresence>
        </div>
    )
}
export default GestureBasedImageGallery
