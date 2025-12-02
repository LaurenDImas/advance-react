import {motion, useScroll, useTransform} from 'framer-motion'

const ScrollIndicator = () => {
    const {scrollYProgress} = useScroll()
    
    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    
    return (
        <div
            className="h-[200vh] p-[20px]"
        >
            <motion.div
                className="fixed top-0 left-0 h-[5px] bg-red-500"
                style={{
                    width: lineWidth,
                    transition: 'width 0.1s',
                }}
            />
            <div className="mt-[50px]">
                {[...Array(50)].map((_, i) => (
                    <p key={i} className="mt-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores dolores dolorum et explicabo ipsum reiciendis saepe sit veniam! Ea laboriosam libero praesentium similique sint tempore? Aperiam labore optio repudiandae.
                    </p>
                ))}
            </div>
            
        </div>
    )
}
export default ScrollIndicator
