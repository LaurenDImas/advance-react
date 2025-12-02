import  {motion} from "framer-motion";

const BasicTransition = () => {
    return (
        <motion.div
            className="box"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 2 }}
        >
        </motion.div>
    )
}
export default BasicTransition
