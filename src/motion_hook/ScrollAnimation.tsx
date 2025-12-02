import {motion, useMotionValue, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

const ScrollAnimation = () => {
    
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1, 0.5])
    const borderRadius = useTransform(scrollY, [0, 1000],["0%", "50%"])

    
    return (
        <div className="relative h-screen overflow-hidden">
            <motion.img
                src="https://media.istockphoto.com/id/1360171050/id/foto/komposisi-kreatif-desain-interior-ruang-makan-dengan-meja-keluarga-kayu-kursi-berlengan-sepeda.jpg?s=612x612&w=0&k=20&c=7SHVPS4NJiqKWzF1Wyh-dl71Np5x92gDf_juw8TAivY="
                alt="s"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    scale,
                    borderRadius,
                }}
            />
            
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="text-white text-4xl">
                    Scroll To Animal
                </div>
            </div>
        </div>
    )
}
export default ScrollAnimation
