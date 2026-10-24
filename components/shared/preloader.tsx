"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

const brand = "dhopkol";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const radius = 48;
const circumference = 2 * Math.PI * radius;

export default function Preloader() {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState("0000000");

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const duration = reducedMotion ? 250 : 1600;
        const start = performance.now();

        let frameId = 0;
        let exitTimer: ReturnType<typeof setTimeout> | undefined;

        function animate(now: number) {
            const elapsed = Math.min((now - start) / duration, 1);
            const percentage = Math.round(elapsed * 100);

            setProgress(percentage);

            if (reducedMotion || elapsed === 1) {
                setDisplayText(brand);
            } else {
                const revealed = Math.floor(elapsed * brand.length);
                const tick = Math.floor((now - start) / 65);

                setDisplayText(
                    brand
                        .split("")
                        .map((letter, index) => {
                            if (index < revealed) return letter;

                            return characters[
                                (tick + index * 7) % characters.length
                            ];
                        })
                        .join("")
                );
            }

            if (elapsed < 1) {
                frameId = requestAnimationFrame(animate);
            } else {
                exitTimer = setTimeout(
                    () => setVisible(false),
                    reducedMotion ? 0 : 200
                );
            }
        }

        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);

            if (exitTimer) {
                clearTimeout(exitTimer);
            }
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="site-preloader"
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="site-preloader fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#060e16]"
                >
                    <p role="status" className="sr-only">
                        Welcome to Dhopkol. Preparing the website.
                    </p>

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        {/* Ambient glow */}
                        <div className="absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2a6b9b]/8 blur-[100px]" />

                        {/* Top line */}
                        <div className="absolute inset-x-8 top-[17%] h-px bg-linear-to-r from-transparent via-[#71bbaa]/20 to-transparent" />

                        {/* Corner marks */}
                        <div className="absolute top-7 left-7 size-5 border-t border-l border-[#71bbaa]/15" />
                        <div className="absolute top-7 right-7 size-5 border-t border-r border-[#71bbaa]/15" />
                        <div className="absolute bottom-7 left-7 size-5 border-b border-l border-[#71bbaa]/15" />
                        <div className="absolute right-7 bottom-7 size-5 border-r border-b border-[#71bbaa]/15" />
                    </div>

                    <div
                        aria-hidden="true"
                        className="relative flex w-full max-w-[420px] flex-col items-center px-6 py-16"
                    >
                        {/* Animated dot field */}
                        <div className="preloader-dots pointer-events-none absolute inset-0" />

                        {/* Circular progress */}
                        <div className="relative flex size-28 items-center justify-center">
                            <svg
                                viewBox="0 0 112 112"
                                className="absolute inset-0 size-full -rotate-90"
                            >
                                <defs>
                                    <linearGradient
                                        id="dhopkol-loader-gradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#2a6b9b"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#71bbaa"
                                        />
                                    </linearGradient>
                                </defs>

                                <circle
                                    cx="56"
                                    cy="56"
                                    r={radius}
                                    fill="none"
                                    stroke="#71bbaa"
                                    strokeOpacity="0.08"
                                    strokeWidth="2"
                                />

                                <circle
                                    cx="56"
                                    cy="56"
                                    r={radius}
                                    fill="none"
                                    stroke="url(#dhopkol-loader-gradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={
                                        circumference *
                                        (1 - progress / 100)
                                    }
                                />
                            </svg>

                            <div className="flex size-14 flex-col items-center justify-center rounded-full bg-[#2a6b9b]/10">
                                <span className="font-mono text-lg leading-none font-bold text-[#e2edf5] tabular-nums">
                                    {progress}
                                </span>

                                <span className="mt-1 text-[9px] text-[#71bbaa]">
                                    %
                                </span>
                            </div>
                        </div>

                        {/* Scrambled brand */}
                        <div className="mt-8 bg-linear-to-r from-[#2a6b9b] to-[#71bbaa] bg-clip-text font-mono text-4xl leading-tight font-bold tracking-[0.08em] text-transparent sm:text-5xl">
                            {displayText}
                        </div>

                        <p className="mt-4 text-[10px] tracking-[0.24em] text-[#8ba0b2] uppercase">
                            Software · Technology · Solutions
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}