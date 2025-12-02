import {motion} from 'framer-motion'

const Loader = () => {
    return (
        <div
            className="flex items-center justify-center h-screen"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="relative h-10 w-10 border-t-4 border-red-500 border-solid rounded-full"
            >
                <motion.div
                   
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-r-4 border-solid rounded-full border-green-500"
                >
                    <motion.div
                       
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-l-4 border-solid rounded-full border-blue-500"
                    >
                        <motion.div
                            
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-b-4 border-solid rounded-full border-pink-500"
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Loader
