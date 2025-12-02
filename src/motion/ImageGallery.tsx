import {motion} from "framer-motion";

const images = [
    {
        src: "https://images.unsplash.com/photo-1761839257658-23502c67f6d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
        caption: "Caption or Image 1"
    },
    {
        src: "https://images.unsplash.com/photo-1763641302132-d27dad02a19a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        caption: "Caption or Image 2"
    },
    {
        src: "https://images.unsplash.com/photo-1763757575218-de57fe98fd9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        caption: "Caption or Image 3"
    },
]
const ImageGallery = () => {
    return (
        <div
            className="w-[80%] flex "
        >
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition duration-200 ease-in-out"
                    // whileHover={{
                    //     scale: 1.05,
                    // }}
                >
                    <img src={image.src} alt={image.caption} className="w-full h-full" />
                    
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    >
                        <p className="text-left">{image.caption}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}
export default ImageGallery
