import {motion} from "framer-motion";

const Rotation = () => {

    return (
        <motion.img
            src="https://images.unsplash.com/photo-1762764919450-560fd6515192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
            className="w-20 h-20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}
export default Rotation
