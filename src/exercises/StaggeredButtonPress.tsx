import {motion} from 'framer-motion'

const buttons = [
    'button1','button2','button3','button4','button5',
]

const StaggeredButtonPress = () => {
    return (
        <motion.div
            className="flex space-x-2"
            initial="hidden"
            variants={{
                hidden: { opacity: 0},
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.5,
                    }
                },
            }}
            transition={{
                staggerChildren: 0.5,
            }}
            animate={{
                opacity: 1,
            }}
            // whileHover={{
            //     transition: {
            //         staggerChildren: 0.5
            //     }
            // }}
        >
            {buttons.map((button, index) => (
                <motion.button
                    key={index}
                    className="p-2 bg-blue-500 text-white rounded ml-[2rem]"
                    whileHover={{scale:1.1}}
                >{button}</motion.button>
            ))}
        </motion.div>
    )
}
export default StaggeredButtonPress
