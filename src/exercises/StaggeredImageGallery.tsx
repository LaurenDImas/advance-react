import {motion} from 'framer-motion'

const images = [
    "https://images.unsplash.com/photo-1502154882433-a614dba12819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1761839257513-a921710a4291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670532202958-0fe6e64bd51f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
]

const StaggeredImageGallery = () => {
    return (
        <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.5,
                    }
                },
            }}
        >
            {images.map((image, i) => (
                <motion.img
                    key={i}
                    src={image}
                    alt={image}
                    variants={{
                        hidden: {opacity:0},
                        visible: {opacity:1},
                    }}
                    className="w-[2-rem] h-[10rem] ml-[2rem] rounded"
                />
            ))}
        </motion.div>
    )
}
export default StaggeredImageGallery
