import {motion, useMotionValue, useMotionValueEvent} from "framer-motion";
import {useLayoutEffect, useRef, useState} from "react";
import {IoMdArrowBack} from "react-icons/io";
import {IoArrowForward} from "react-icons/io5";

const sidebarVariants = {
    open: {
        x: 0, opacity: 1, scale: 1,
    },
    closed: {
        x: "-100%", opacity: 0, scale: 0.8,
    }
}

const containerVariants ={
    open: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0,
        },
    }
}

const itemVariants = {
    open: {opacity: 1, y: 0, scale: 1},
    closed: {opacity: 0, y: -20, scale: 0.95},
}



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const ref = useRef(null);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const width = entries[0].contentRect.width;
            console.log("width:", width);
        })


        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, []);

    const backdropVariants = {
        open: {opacity: 0.6},
        closed: {opacity: 0},
    }

    return (
        <div className="relative" ref={ref}>
            {/*Backdrop*/}
            {/*Sidebar content*/}
            <motion.div
                className="fixed inset-0 bg-gray-800"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={backdropVariants}
                onClick={() => setIsOpen(!isOpen)}
            >

            </motion.div>

            <motion.div
                className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg"
                variants={sidebarVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="p-4"> {/* Tambah relative */}
                    <button onClick={() => setIsOpen(!isOpen)} className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none">
                        <IoMdArrowBack className="w-6 h-6" />
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>

                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                    >
                        <motion.div
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-semibold">Categories</h3>
                            <ul>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="ml-2">Option 1</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="ml-2">Option 2</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="ml-2">Option 3</span>
                                    </label>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-semibold">Price Range</h3>
                            <input type="range" min="0" max="100" className="w-full" step="10" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold">Rating</h3>
                            <ul>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="radio" name="rating" value="1"/>
                                        <span className="ml-2">1 Star</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="radio" name="rating" value="1"/>
                                        <span className="ml-2">2 Star</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="radio" name="rating" value="1"/>
                                        <span className="ml-2">3 Star</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="radio" name="rating" value="1"/>
                                        <span className="ml-2">4 Star</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="" className="inline-flex items-center mt-2">
                                        <input type="radio" name="rating" value="1"/>
                                        <span className="ml-2">5 Star</span>
                                    </label>
                                </li>
                            </ul>
                        </motion.div>

                    </motion.div>
                </div>
            </motion.div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-4 left-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none "
            >
                {isOpen ? (<IoMdArrowBack className="w-6 h-6" />) : (<IoArrowForward className="w-6 h-4" />)}
            </button>
        </div>
    )
}
export default Sidebar
