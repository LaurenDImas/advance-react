import {motion} from "framer-motion";

const WaveEffect = () => {
    return (
        <div className="flex">
            {[...Array.from({length: 5})].map((_, index) => (
                <motion.div
                    key={index}
                    className="box"
                    animate={{
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.1,
                    }}
                />
            ))}
        </div>
    )
}
export default WaveEffect
