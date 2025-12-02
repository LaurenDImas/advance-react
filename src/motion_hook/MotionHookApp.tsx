import UseMotion from "./UseMotion.tsx";
import RangeSlider from "./RangeSlider.tsx";
import DraggableBox from "./DraggableBox.tsx";
import WhileInVew from "./WhileInVew.tsx";
import ScrollAnimation from "./ScrollAnimation.tsx";

const MotionHookApp = () => {
    return (
        <div>
            {/*<UseMotion />*/}
            {/*<RangeSlider />*/}
            {/*<DraggableBox />*/}
            {/*<WhileInVew />*/}
            <ScrollAnimation />
            <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
                <h2 className="text-white">Scroll Down</h2>
            </div>
        </div>
    )
}
export default MotionHookApp
