import {motion} from 'framer-motion';
import {useState} from "react";

const items = [
    {title: "Title 1", content: "This is content of item 1"},
    {title: "Title 2", content: "This is content of item 2"},
    {title: "Title 3", content: "This is content of item 3"},
    {title: "Title 4", content: "This is content of item 4"},
    {title: "Title 5", content: "This is content of item 5"},
]

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number|null>(null)
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => setOpenIndex(prevState =>  prevState === index ? null : index)}
                        className="w-full text-left p-2 bg-gray-300 rounded focus:outline-none text-black"
                    >
                        {item.title}

                        <motion.div
                            className="overflow-hidden"
                            initial={{ height:0}}
                            animate={{ height: openIndex === index ? 'auto' : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="p-2 bg-gray-200 rounded text-black">{item.content}</h1>
                        </motion.div>
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Accordion
