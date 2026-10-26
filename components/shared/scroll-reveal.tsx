"use client";

import { useEffect, useRef } from "react";

import type { ReactNode } from "react";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
};

export default function ScrollReveal({
    children,
    className,
}: ScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const motionPreference = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        if (motionPreference.matches) return;

        const targets =
            container.querySelectorAll<HTMLElement>("[data-reveal]");

        const elements: HTMLElement[] =
            targets.length > 0
                ? Array.from(targets)
                : [container];

        const animations: Animation[] = [];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const element = entry.target as HTMLElement;

                    const animation = element.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translate3d(0, 28px, 0)",
                            },
                            {
                                opacity: 1,
                                transform: "translate3d(0, 0, 0)",
                            },
                        ],
                        {
                            duration: 1000,
                            delay:
                                Number(element.dataset.revealDelay) || 0,
                            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                            fill: "backwards",
                        }
                    );

                    element.style.removeProperty("opacity");

                    animations.push(animation);

                    observer.unobserve(element);
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        // Preserve the existing layout for data-reveal containers.
        if (!className && targets.length > 0) {
            container.style.display = "contents";
        }

        elements.forEach((element) => {
            element.style.opacity = "0";
            observer.observe(element);
        });

        function stopMotion() {
            if (!motionPreference.matches) return;

            observer.disconnect();

            animations.forEach((animation) => animation.cancel());

            elements.forEach((element) => {
                element.style.removeProperty("opacity");
            });
        }

        motionPreference.addEventListener("change", stopMotion);

        return () => {
            observer.disconnect();

            animations.forEach((animation) => animation.cancel());

            elements.forEach((element) => {
                element.style.removeProperty("opacity");
            });

            container.style.removeProperty("display");

            motionPreference.removeEventListener("change", stopMotion);
        };
    }, [className]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}