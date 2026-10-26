"use client";

import { motion, useReducedMotion } from "motion/react";

const stats = [
    {
        value: "—",
        label: "Projects Delivered",
    },
    {
        value: "—",
        label: "Clients Served",
    },
    {
        value: "—",
        label: "Years of Experience",
    },
    {
        value: "—",
        label: "Client Satisfaction",
    },
];

export default function OurStory() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        initial: reduceMotion
            ? false
            : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: reduceMotion ? 0 : 0.5,
            ease: "easeOut" as const,
        },
    };

    return (
        <section className="bg-[#F8FAFC] py-20 transition-colors duration-300 lg:py-28 dark:bg-[#0B1621]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Story */}
                    <div>
                        <motion.p
                            {...fadeUp}
                            className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2A6B9B] dark:text-[#71BBAA]"
                        >
                            Our Story
                        </motion.p>

                        <motion.h2
                            {...fadeUp}
                            className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white"
                        >
                            Built on trust.
                            <br />

                            <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-transparent dark:to-[#71BBAA]">
                                Driven by technology.
                            </span>
                        </motion.h2>

                        <motion.div
                            {...fadeUp}
                            className="space-y-4 leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                            <p>
                                At dhopkol, we believe technology should
                                make running a business simpler. Our focus
                                is on understanding your challenges and
                                building solutions that fit the way you
                                work.
                            </p>

                            <p>
                                We combine software development with
                                practical IT services and support.
                                From websites and custom applications to
                                everyday technical assistance, we help
                                businesses bring their ideas to life.
                            </p>

                            <p>
                                Our approach is straightforward: clear
                                communication, thoughtful development,
                                and dependable support. We aim to build
                                lasting relationships by delivering work
                                that continues to be useful as your
                                business grows.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-5">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                {...fadeUp}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.5,
                                    delay: reduceMotion ? 0 : index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="h-full"
                            >
                                <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 dark:border-white/10 dark:bg-[#060E16] dark:hover:shadow-black/20">
                                    <div className="mb-1 bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-3xl font-bold text-transparent md:text-4xl dark:to-[#71BBAA]">
                                        {stat.value}
                                    </div>

                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}