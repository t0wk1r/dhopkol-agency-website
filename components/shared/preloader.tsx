"use client";

import { useEffect, useState } from "react";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";

const brand = "dhopkol";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const duration = 2400;
const radius = 48;
const circumference = 2 * Math.PI * radius;

export default function Preloader() {
    const reduceMotion = useReducedMotion();

    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState("0000000");

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const animationDuration = reducedMotion ? 250 : duration;
        const start = performance.now();

        let frameId = 0;
        let exitTimer: ReturnType<typeof setTimeout> | undefined;

        function animate(now: number) {
            const elapsed = Math.min(
                (now - start) / animationDuration,
                1
            );

            setProgress(Math.round(elapsed * 100));

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

            if (exitTimer !== undefined) {
                clearTimeout(exitTimer);
            }
        };
    }, []);

    /*
     * Grow the dot field without scaling the dots.
     * The radial mask creates a soft expanding edge.
     */
    const expansion = reduceMotion ? 1 : progress / 100;

    const dotWidth = 260 + expansion * 660;
    const dotHeight = 260 + expansion * 280;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="site-preloader"
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.35,
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background"
                >
                    <p role="status" className="sr-only">
                        Welcome to Dhopkol. Preparing the website.
                    </p>

                    {/* Background decorations */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                    >
                        <div className="absolute top-1/2 left-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px]" />

                        <div className="absolute inset-x-8 top-[17%] h-px bg-linear-to-r from-transparent via-primary/20 to-transparent dark:via-[#71bbaa]/20" />

                        <div className="absolute top-7 left-7 size-5 border-t border-l border-primary/20 dark:border-[#71bbaa]/15" />

                        <div className="absolute top-7 right-7 size-5 border-t border-r border-primary/20 dark:border-[#71bbaa]/15" />

                        <div className="absolute bottom-7 left-7 size-5 border-b border-l border-primary/20 dark:border-[#71bbaa]/15" />

                        <div className="absolute right-7 bottom-7 size-5 border-r border-b border-primary/20 dark:border-[#71bbaa]/15" />
                    </div>

                    <div
                        aria-hidden="true"
                        className="relative isolate flex w-full max-w-[420px] flex-col items-center px-6 py-16"
                    >
                        {/* Expanding dot field */}
                        <div
                            className="
                                pointer-events-none absolute
                                top-1/2 left-1/2 -z-10
                                -translate-x-1/2 -translate-y-1/2
                                bg-[radial-gradient(circle,rgba(42,107,155,0.4)_2px,transparent_3px)]
                                [background-position:center]
                                [background-size:42px_36px]
                                dark:bg-[radial-gradient(circle,rgba(113,187,170,0.55)_2px,transparent_3px)]
                            "
                            style={{
                                width: dotWidth,
                                height: dotHeight,
                                opacity: reduceMotion
                                    ? 1
                                    : Math.min(progress / 12, 1),
                                maskImage:
                                    "radial-gradient(ellipse at center, black 20%, transparent 72%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at center, black 20%, transparent 72%)",
                            }}
                        />

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
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-primary/15 dark:text-[#71bbaa]/10"
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

                            <div className="flex size-14 flex-col items-center justify-center rounded-full bg-primary/10">
                                <span className="font-mono text-lg leading-none font-bold text-heading tabular-nums">
                                    {progress}
                                </span>

                                <span className="mt-1 text-[9px] text-accent">
                                    %
                                </span>
                            </div>
                        </div>

                        {/* Scrambled brand */}
                        <div className="relative mt-8 bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text font-mono text-4xl leading-tight font-bold tracking-[0.08em] text-transparent sm:text-5xl dark:from-[#72acd2] dark:to-[#71bbaa]">
                            {displayText}
                        </div>

                        <p className="relative mt-4 text-center text-[10px] leading-6 tracking-[0.24em] text-body uppercase">
                            Software · Technology · Solutions
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}