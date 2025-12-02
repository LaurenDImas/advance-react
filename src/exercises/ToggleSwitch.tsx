import {motion} from "framer-motion";
import {useState} from "react";

const switchVariants = {
    off: {x: 0},
    on: {x: 70}
}

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div
            className="relative inline-block w-36 h-16"
        >
            <div
                className={`w-full h-full rounded-full bg-gray-600 cursor-pointer
                ${isOn ? 'bg-green-500' : ''}`}
                onClick={() => setIsOn(prevState =>  !prevState)}
            >
                <motion.div
                    className="absolute bg-white top-1 left-1 w-14 h-14 rounded-full shadow"
                    variants={switchVariants}
                    animate={ isOn ? 'on' : 'off' }
                    transition={{type: 'spring', stiffness: 100}}
                />
            </div>
        </div>
    )
}
export default ToggleSwitch
