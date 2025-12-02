import {motion} from 'framer-motion';
import PulsingButton from "./PulsingButton.tsx";
import BouncingLoader from "./BouncingLoader.tsx";
import Variants from "./Variants.tsx";
import FlippingCard from "./FlippingCard.tsx";
import Gestures from "./Gestures.tsx";
import AnimatedCard from "./AnimatedCard.tsx";
import ImageGallery from "./ImageGallery.tsx";
import AnimatedShaped from "./AnimatedShaped.tsx";
import StaggerAnimation from "./StaggerAnimation.tsx";
import AnimatedGallery from "./AnimatedGallery.tsx";

const MotionApp = () => {
    return (
        // <div className="min-h-screen flex items-center justify-center ">
        <div className="">
            {/*<motion.div className="box" animate={{ x:100 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ y:100 }} ></motion.div>*/}
            
            {/*<motion.div className="box" animate={{ rotateX:60 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ rotateY:60 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ rotate:20 }} ></motion.div>*/}
            
            {/*<motion.div className="box" animate={{ scaleX:2 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ scaleY:2 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ scale:2 }} ></motion.div>*/}
            
            {/*<motion.div className="box" animate={{ skewX:20 }} ></motion.div>*/}
            {/*<motion.div className="box" animate={{ skewY:20 }} ></motion.div>*/}
            
            {/*<motion.div*/}
            {/*    className="box"*/}
            {/*    initial={{ x: -200, opacity: 0 }}*/}
            {/*    animate={{ x: 0, opacity: 1 }}*/}
            {/*    // animate={{ x: [0,200,0] }}*/}
            {/*    // transition={{ delay: 2 }}*/}
            {/*    transition={{ duration: 1 }}*/}
            {/*    // transition={{*/}
            {/*    //     duration: 1,*/}
            {/*    //     ease: 'easeInOut',*/}
            {/*    //     repeat: Infinity,     // ulang terus*/}
            {/*    //     repeatType: "reverse"*/}
            {/*    // }}*/}
            {/*></motion.div>*/}
            
            {/*<motion.div*/}
            {/*    className="box"*/}
            {/*    animate={{*/}
            {/*        // scale: [1, 2, 2, 3, 4, 3, 2, 1],*/}
            {/*        // rotate: [0, 0, 270, 270, 0],*/}
            {/*        // borderRadius: ["20%", "50%", "50%", "20%"],*/}
            {/*    }}*/}
            {/*    transition={{ duration: 5}}*/}
            {/*></motion.div>*/}
            
            {/*<PulsingButton />*/}
            {/*<BouncingLoader />*/}
            
            {/*<Variants />*/}
            {/*<FlippingCard />*/}
            {/*<Gestures/>*/}
            {/*<AnimatedCard />*/}
            {/*<ImageGallery />*/}
            {/*<AnimatedShaped />*/}
            {/*<StaggerAnimation />*/}
            <AnimatedGallery />
        </div>
    )
}
export default MotionApp
