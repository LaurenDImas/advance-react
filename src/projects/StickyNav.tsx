import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function StickyNav() {
    const [open, setOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
    };

    return (
        <div className="min-h-screen bg-black">

            {/* NAVBAR */}
            <motion.div
                className="fixed top-0 left-0 w-full bg-white shadow-lg p-6"
                onHoverStart={() => setOpen(true)}     // <-- hover hanya di NAVBAR
                onHoverEnd={() => setOpen(false)}      // <-- ketika mouse ke dropdown, ini TIDAK TRIGGER
            >
                <div className="flex justify-between items-center">
                    <div className="font-bold uppercase text-lg">HuXn</div>

                    <div className="hidden md:flex space-x-6">
                        <a>Products</a>
                        <a>Use Cases</a>
                        <a>Resources</a>
                        <a>Pricing</a>
                    </div>

                    <div>Join</div>
                </div>
            </motion.div>

            {/* DROPDOWN — SIBLING, BUKAN CHILD */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed top-16 left-0 w-full bg-white p-8 shadow-xl"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* CONTENT BEBAS SEPANJANG APAPUN — TIDAK MEMPENGARUHI HOVER */}
                        <div className="border-t border-gray-300 pt-4">

                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 border border-black rounded text-xs">Apple</span>
                                <span>MacBook Pro</span>
                            </div>

                            <div className="grid grid-cols-6 gap-6 mt-6">
                                {[...Array(6)].map((_, idx) => (
                                    <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                        <img
                                            src="https://plus.unsplash.com/premium_photo-1681336999969-516d993e88cc?w=500"
                                            className="w-full h-28 object-cover"
                                        />
                                        <div className="p-3">
                                            <h3 className="font-bold">My Amazing Card</h3>
                                            <p className="text-gray-600 text-sm mt-2">
                                                This is some random description
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
