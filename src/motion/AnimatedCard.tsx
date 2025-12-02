import  {motion} from "framer-motion";

const AnimatedCard = () => {
    return (
        <motion.div
            initial= {{
                scale: 1, rotate: 0
            }}
            whileHover={{
                scale: 1.05,
                rotate: 3,
            }}
            whileTap={{
                scale: 0.95,
            }}
            drag
            dragConstraints={{
                left: -50,
                right: 50,
                top: -50,
                bottom: 50,
            }}
            dragElastic={0.2}
            transition={{
                type: "spring",
                stiffness: 0.2,
            }}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
        >
            <img
                src="https://images.unsplash.com/photo-1761839257658-23502c67f6d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Images"
                className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    Card Title
                </h2>
                
                <p className="text-gray-700 mb-4">
                    This is a simple card with Framer motion animations and tailwind css fot styling.
                </p>
                
                <button
                    className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400 transition duration-300 ease-in-out"
                >Learn More</button>
            </div>
        </motion.div>
    )
}
export default AnimatedCard
