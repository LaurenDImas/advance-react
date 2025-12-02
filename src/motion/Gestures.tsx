import {motion} from "framer-motion";

const Gestures = () => {
    return (
        <div>
            {/*whileHover*/}
            {/*<motion.div*/}
            {/*    className="box"*/}
            {/*    whileHover={{*/}
            {/*        scale: 1,*/}
            {/*        rotate: 10*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        type: "spring",*/}
            {/*        stiffness: 300*/}
            {/*    }}*/}
            {/*/>*/}
            
            {/*whileTap*/}
            {/*<motion.div*/}
            {/*    className="box"*/}
            {/*    whileTap={{*/}
            {/*        scale: 0.8,*/}
            {/*        backgroundColor: "crimson"*/}
            {/*    }}*/}
            {/*    transition={{*/}
            {/*        type: "spring",*/}
            {/*        stiffness: 300*/}
            {/*    }}*/}
            {/*></motion.div>*/}
            
            
            {/*whileDrag*/}
            <motion.div
                className="box"
                drag
                dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                }}
            ></motion.div>
        </div>
    )
}
export default Gestures
