"use client";

import { motion, useReducedMotion } from "motion/react";

import {
    Award,
    Globe,
    Shield,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";

const values = [
    {
        title: "Innovation First",
        description:
            "We explore new technologies and practical ideas to build solutions that help your business move forward.",
        icon: Zap,
    },
    {
        title: "Integrity",
        description:
            "Clear communication, honest timelines, and transparent decisions are at the heart of how we work.",
        icon: Shield,
    },
    {
        title: "Engineering Excellence",
        description:
            "We focus on clean architecture, thoughtful testing, and maintainable code that supports long-term growth.",
        icon: Award,
    },
    {
        title: "Collaboration",
        description:
            "We listen to your ideas, understand your workflows, and work closely with you throughout each project.",
        icon: Users,
    },
    {
        title: "Global Mindset",
        description:
            "We value different perspectives and build solutions with accessibility, flexibility, and diverse users in mind.",
        icon: Globe,
    },
    {
        title: "Continuous Growth",
        description:
            "We keep learning, improve our methods, and apply useful tools and practices to deliver better work.",
        icon: TrendingUp,
    },
];

export default function OurValues() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="bg-[#F8FAFC] py-20 transition-colors duration-300 lg:py-28 dark:bg-[#0B1621]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
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
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2A6B9B] dark:text-[#71BBAA]">
                        Our Values
                    </p>

                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Principles that{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-transparent dark:to-[#71BBAA]">
                            guide everything
                        </span>
                    </h2>
                </motion.div>

                {/* Value cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={value.title}
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
                                    delay: reduceMotion
                                        ? 0
                                        : (index % 3) * 0.08,
                                    ease: "easeOut",
                                }}
                                className="h-full"
                            >
                                <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#2A6B9B]/20 hover:shadow-lg hover:shadow-gray-100 dark:border-white/10 dark:bg-[#060E16] dark:hover:border-[#2A6B9B]/40 dark:hover:shadow-black/20">
                                    <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#2A6B9B]/10 text-[#2A6B9B] dark:bg-[#2A6B9B]/20 dark:text-[#71BBAA]">
                                        <Icon
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                                        {value.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                        {value.description}
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