import {motion} from 'framer-motion';

const BouncingLoader = () => {
    return (
        <div
            className="flex justify-center items-center space-x-2"
        >
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    className="h-4 w-4 bg-teal-500 rounded-full"
                    animate={{
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: index * 0.2
                    }}
                >
                
                </motion.div>
            ))}
        </div>
    )
}
export default BouncingLoader
