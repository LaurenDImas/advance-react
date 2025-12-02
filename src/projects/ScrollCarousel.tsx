import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {cards} from "./utils/data.ts";
import Card from "./Card.tsx";

const ScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

    return (
        <div className="relative h-[300vh] bg-neutral-900" ref={targetRef}>
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                <motion.div className="flex gap-4" style={{ x }}>
                    {cards.map((card, index) => (
                        <Card card={card} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
export default ScrollCarousel
