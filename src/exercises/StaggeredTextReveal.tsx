import {motion} from 'framer-motion'

const text = "Hello, Lauren Dimas"

const StaggeredTextReveal = () => {
    return (
        <motion.h1
            className="text-4xl font-bold text-white"
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial="hidden"
                    variants={{
                        hidden: {opacity:0},
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: index*0.09
                            }
                        },
                    }}
                    animate="visible"
                    
                >
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    )
}
export default StaggeredTextReveal
