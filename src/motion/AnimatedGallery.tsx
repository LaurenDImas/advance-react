import {motion} from 'framer-motion';
import {useState} from "react";

const galleryImages = [
    "https://media.istockphoto.com/id/184961692/photo/log-cabin-living.webp?a=1&s=612x612&w=0&k=20&c=-1kJUWuAkWOfaIKhiuK7wyRRoq2YzIAVDSN6spQAdPI=",
    "https://media.istockphoto.com/id/467759668/photo/served-table-set-at-outdoor-cafe-with-perfect-view.webp?a=1&s=612x612&w=0&k=20&c=fJTkLfkPPNxT6SJf_0thhH10yf7CuZHgBsTIK5gUZNI=",
    "https://media.istockphoto.com/id/1269505557/photo/window-and-forest-looking-through-from-inside.webp?a=1&s=612x612&w=0&k=20&c=eTg_BE4nA1Y6u9AhUUseCBp6URknFaqzl3kOKnpuCxE=",
    "https://media.istockphoto.com/id/473158712/photo/kitchen.webp?a=1&s=612x612&w=0&k=20&c=ZVG2d0BnYsc5vOW17oAbqg__dLLFqPMx_ze8YSHVsK8=",
    "https://media.istockphoto.com/id/2206959318/photo/living-quarters-at-the-historic-old-mission-state-park-in-idaho.webp?a=1&s=612x612&w=0&k=20&c=0EdQCCM737RiJK-t7HasilYdJl-DgkttWhsaYBDTPrY=",
];

const parentVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition:{
            staggerChildren: 0.8,
            staggerDirection: 1,
        }
    },
}

const childVariants = {
    hidden: {opacity: 0, y:20},
    visible: {opacity: 1, y:0},
}

const AnimatedGallery = () => {
    const [showImages, setShowImages] = useState(false);
    return (
        <motion.div
        
        >
            <button
                className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
                onClick={() => setShowImages(prev => !prev)}
            >
                {showImages ? "Hide Images": "Show Images"}
            </button>
            
            <motion.div
                className="flex"
                variants={parentVariants}
                initial="hidden"
                animate={showImages ? "visible" : "hidden"}>
                {galleryImages.map((image, i) => (
                    <motion.img
                        src={image}
                        key={i}
                        alt={image}
                        className="ml-[2rem] w-full h-34 object-cover rounded"
                        variants={childVariants}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}
export default AnimatedGallery
