"use client";

import { motion, useReducedMotion } from "motion/react";

import { Eye, Target } from "lucide-react";

const items = [
    {
        title: "Our Mission",
        description:
            "To help businesses solve everyday challenges through reliable software, practical IT services, and dependable support. We turn ideas into useful digital solutions that simplify operations and support long-term growth.",
        icon: Target,
        iconClass: "bg-[#2A6B9B]/10 text-[#2A6B9B]",
        hoverClass:
            "hover:border-[#2A6B9B]/20 dark:hover:border-[#2A6B9B]/40",
    },
    {
        title: "Our Vision",
        description:
            "To become a trusted technology partner for businesses building their future. We envision a world where businesses of every size can access the software, expertise, and ongoing support they need to grow with confidence.",
        icon: Eye,
        iconClass: "bg-[#71BBAA]/10 text-[#71BBAA]",
        hoverClass:
            "hover:border-[#71BBAA]/20 dark:hover:border-[#71BBAA]/40",
    },
];

export default function MissionVision() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="bg-white py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 24 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.5,
                                    ease: "easeOut",
                                }}
                                className="h-full"
                            >
                                <div
                                    className={`h-full rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/80 dark:border-white/10 dark:hover:shadow-black/20 ${item.hoverClass}`}
                                >
                                    <div
                                        className={`mb-5 flex size-12 items-center justify-center rounded-xl ${item.iconClass}`}
                                    >
                                        <Icon
                                            size={22}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                        {item.title}
                                    </h2>

                                    <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}