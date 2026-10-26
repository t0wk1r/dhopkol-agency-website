"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, Play } from "lucide-react";

export default function AboutCta() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-white py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]">
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A6B9B]/[0.08] blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <motion.div
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
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl dark:text-white">
                        Ready to build something great?
                    </h2>

                    <p className="text-base leading-relaxed text-gray-500 md:text-lg dark:text-gray-400">
                        Let’s discuss how dhopkol can bring your vision
                        to life.
                    </p>

                    <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/contact"
                            className="btn-animated agency-hero-cta"
                        >
                            <span className="btn-animated-content min-h-11 px-6">
                                <span>Start a Project</span>

                                <ArrowUpRight
                                    size={16}
                                    aria-hidden="true"
                                    className="text-[#71bbaa]"
                                />
                            </span>
                        </Link>

                        <Link
                            href="/projects"
                            className="agency-hero-secondary-button group"
                        >
                            <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 dark:bg-white/10">
                                <Play
                                    size={12}
                                    aria-hidden="true"
                                    className="ml-0.5 text-accent"
                                />
                            </span>

                            Explore Our Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}