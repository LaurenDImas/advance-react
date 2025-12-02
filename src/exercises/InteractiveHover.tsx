import {motion} from "framer-motion"

const InteractiveHover = () => {
    return (
        <div
            className="grid grid-cols-2 gap-4"
        >
            {[1,2,3,4].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#6270ff" }}
                    transition={{ duration: 4 }}
                    className="bg-blue-500 rounded-lg p-6 text-white text-center"
                >{item}</motion.div>
            ))}
        </div>
    )
}
export default InteractiveHover
