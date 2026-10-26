"use client";

import { motion, useReducedMotion } from "motion/react";

const milestones = [
    {
        year: "Year",
        title: "The Beginning",
        description:
            "Add the story of how dhopkol started and the purpose behind it.",
    },
    {
        year: "Year",
        title: "First Client Project",
        description:
            "Describe your first client project and the problem it solved.",
    },
    {
        year: "Year",
        title: "Expanding Our Services",
        description:
            "Add when you introduced new software or IT support services.",
    },
    {
        year: "Year",
        title: "An Important Milestone",
        description:
            "Share a meaningful achievement from your journey.",
    },
];

export default function OurJourney() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-[#F8FAFC] py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]">
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute right-0 top-0 size-[500px] rounded-full bg-[#2A6B9B]/[0.06] blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                {/* Heading */}
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        ease: "easeOut",
                    }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#398574] dark:text-[#71BBAA]">
                        Our Journey
                    </p>

                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Years of{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-transparent dark:to-[#71BBAA]">
                            building excellence
                        </span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-[6px] top-0 w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2 dark:bg-white/10"
                    />

                    <ol className="space-y-8">
                        {milestones.map((milestone, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <li
                                    key={`${milestone.title}-${index}`}
                                    className="relative grid grid-cols-[12px_minmax(0,1fr)] items-start gap-6 md:grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] md:items-center"
                                >
                                    {/* Timeline dot */}
                                    <span
                                        aria-hidden="true"
                                        className="relative z-10 col-start-1 row-start-1 mt-6 size-3 rounded-full bg-[#2A6B9B] ring-4 ring-[#2A6B9B]/20 md:col-start-2 md:mt-0"
                                    />

                                    {/* Milestone card */}
                                    <motion.div
                                        initial={
                                            reduceMotion
                                                ? false
                                                : { opacity: 0, y: 24 }
                                        }
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: reduceMotion
                                                ? 0
                                                : 0.5,
                                            ease: "easeOut",
                                        }}
                                        className={`col-start-2 row-start-1 min-w-0 ${
                                            isLeft
                                                ? "md:col-start-1 md:text-right"
                                                : "md:col-start-3 md:text-left"
                                        }`}
                                    >
                                        <div className="inline-block w-full rounded-xl border border-gray-200 bg-white p-5 md:w-auto dark:border-white/[0.08] dark:bg-white/5">
                                            <p className="mb-1 font-mono text-xs text-[#398574] dark:text-[#71BBAA]">
                                                {milestone.year}
                                            </p>

                                            <h3 className="mb-1 font-bold text-gray-900 dark:text-white">
                                                {milestone.title}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}