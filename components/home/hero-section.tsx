import Link from "next/link";

import { ArrowUpRight, Play } from "lucide-react";

const stats = [
    { value: "400", label: "Projects Delivered" },
    { value: "—", label: "Happy Clients" },
    { value: "—", label: "Years of Experience" },
    { value: "—", label: "Client Satisfaction" },
];

const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "Prisma",
    "MySQL",
    "IT Support",
];

const particles = [
    { left: "8%", top: "22%", delay: "-2s" },
    { left: "16%", top: "72%", delay: "-5s" },
    { left: "29%", top: "12%", delay: "-1s" },
    { left: "40%", top: "85%", delay: "-4s" },
    { left: "63%", top: "10%", delay: "-3s" },
    { left: "78%", top: "75%", delay: "-6s" },
    { left: "89%", top: "28%", delay: "-2s" },
    { left: "95%", top: "62%", delay: "-5s" },
];

export default function HeroSection() {
    return (
        <section
            aria-labelledby="hero-title"
            className="agency-hero relative isolate flex min-h-svh items-center overflow-hidden"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="agency-hero-glow agency-hero-glow-blue" />
                <div className="agency-hero-glow agency-hero-glow-teal" />

                <div className="agency-hero-orb agency-hero-orb-right" />
                <div className="agency-hero-orb agency-hero-orb-left" />

                <div className="agency-hero-grid absolute inset-0" />
                <div className="agency-hero-beam" />

                {particles.map((particle, index) => (
                    <span
                        key={particle.left}
                        className="agency-hero-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            width: index % 2 === 0 ? 3 : 2,
                            height: index % 2 === 0 ? 3 : 2,
                        }}
                    />
                ))}

                <div className="agency-hero-fade absolute inset-x-0 bottom-0 h-32" />
            </div>

            <div className="site-container relative pt-36 pb-16 sm:pt-40 sm:pb-20">
                <div className="mx-auto max-w-[960px] text-center">
                    {/* Animated badge */}
                    <div
                        className="agency-hero-enter"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="agency-hero-badge">
                            <span
                                aria-hidden="true"
                                className="agency-hero-badge-dot"
                            />

                            <span className="relative z-10">
                                Your partner in software & technology
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1
                        id="hero-title"
                        className="agency-hero-enter mt-7 text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-heading"
                        style={{ animationDelay: "220ms" }}
                    >
                        Engineering{" "}
                        <span className="agency-hero-heading-accent">
                            Scalable
                        </span>

                        <br />

                        <span className="agency-hero-heading-secondary">
                            Digital Futures
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="agency-hero-enter mx-auto mt-6 max-w-[620px] text-base leading-8 text-body sm:mt-8 sm:text-base"
                        style={{ animationDelay: "340ms" }}
                    >
                        We build high-performance websites, custom software,
                        and dependable IT solutions that evolve with your
                        business.
                    </p>

                    {/* Actions */}
                    <div
                        className="agency-hero-enter mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
                        style={{ animationDelay: "460ms" }}
                    >
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

                    {/* Stats */}
                    <dl
                        className="agency-hero-enter mx-auto mt-10 grid max-w-[760px] grid-cols-2 overflow-hidden rounded-[20px] border border-line bg-background/80 backdrop-blur-md md:grid-cols-4 dark:border-white/10 dark:bg-[#02060a]/80"
                        style={{ animationDelay: "580ms" }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`agency-hero-stat relative flex flex-col items-center justify-center px-3 py-5 ${
                                    index % 2 === 1
                                        ? "border-l border-line dark:border-white/10"
                                        : ""
                                } ${
                                    index >= 2
                                        ? "border-t border-line md:border-t-0 dark:border-white/10"
                                        : ""
                                } ${
                                    index === 2
                                        ? "md:border-l"
                                        : ""
                                }`}
                            >
                                <dt className="relative z-10 order-2 mt-1.5 text-[10px] font-medium tracking-[0.06em] text-body uppercase">
                                    {stat.label}
                                </dt>

                                <dd className="relative z-10 order-1 text-[30px] leading-none font-bold tracking-tight text-heading">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* Technology badges */}
                    <ul
                        aria-label="Our technologies and expertise"
                        className="agency-hero-enter mx-auto mt-7 flex max-w-[760px] flex-wrap justify-center gap-2"
                        style={{ animationDelay: "700ms" }}
                    >
                        {technologies.map((technology) => (
                            <li
                                key={technology}
                                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-semibold text-primary transition-colors hover:border-accent/50 dark:border-[#2a6b9b]/40 dark:bg-[#0a1929]/70 dark:text-[#8bc9ba]"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}