import {motion} from "framer-motion";
import {useState} from "react";
import {variants} from "./varitans.tsx";

// const variants={
//     hidden: {opacity: 0, scale: 0.8},
//     visible: {opacity: 1, scale: 1},
//     exit: {opacity: 0, scale: 0.5},
// }

const Variants = () => {
    const [isVisible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <motion.div
                className="box"
                variants={variants}
                // variants={{
                //     hidden: {opacity: 0, scale: 0.8},
                //     visible: {opacity: 1, scale: 1},
                //     exit: {opacity: 0, scale: 0.5},
                // }}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                exit="exit"
                transition={{
                    duration: 1,
                }}
                onClick={() => setVisible(!isVisible)}
            >
            </motion.div>
        </div>
    )
}
export default Variants
