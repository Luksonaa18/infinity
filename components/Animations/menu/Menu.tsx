"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scroll when menu is open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if (isOpen) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [isOpen]);

    return (
        <>
            <IoMenu
                size={28}
                className="cursor-pointer text-white"
                onClick={() => setIsOpen(true)}
            />

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            className="absolute inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* MENU PANEL */}
                        <motion.aside
                            className="fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-white z-50  rounded-l-2xl p-6 flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                            onClick={                             // Prevent click events from propagating to the backdrop
                                event => event.stopPropagation()
                            }
                        >
                            {/* CLOSE BUTTON */}
                            <div className="flex justify-end mb-6">
                                <IoClose
                                    size={26}
                                    className="cursor-pointer text-gray-700 hover:text-black"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>

                            {/* MENU ITEMS */}
                            <nav>
                                <ul className="space-y-4 text-lg font-medium text-slate-800">
                                    {["Home", "About", "Services", "Contact"].map((item) => (
                                        <li
                                            key={item}
                                            className="hover:bg-gray-100 p-3 rounded-xl transition-colors duration-150"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
