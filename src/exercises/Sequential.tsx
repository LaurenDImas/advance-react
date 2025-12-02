import {motion} from "framer-motion";

const Sequential = () => {
    return (
        <div className="mt-[600px] mb-56 flex">
            {[...Array(5)].map((_, index) => (
                <motion.div
                    key={index}
                    className="bg-teal-500 rounded-full w-20 h-20 mr-3"
                    // initial={{
                    //     y: 0
                    // }}
                    animate={{ y: [0, -100, 0]}}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        // repeatType: "reverse",
                        delay: index * 0.1
                    }}
                />
            ))}
        </div>
    )
}
export default Sequential
