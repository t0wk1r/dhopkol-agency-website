import type { IconType } from "react-icons";

import {
    SiDocker,
    SiExpress,
    SiFastapi,
    SiGit,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";

import { Cloud, type LucideIcon } from "lucide-react";

type Technology = {
    name: string;
    icon: IconType | LucideIcon;
    color: string;
};

const firstRow: Technology[] = [
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-heading",
    },
    {
        name: "React",
        icon: SiReact,
        color: "text-[#0891b2] dark:text-[#61dafb]",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-[#3178c6]",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#339933]",
    },
    {
        name: "FastAPI",
        icon: SiFastapi,
        color: "text-[#009688]",
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-[#4169a1] dark:text-[#83a8dc]",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47a248]",
    },
    {
        name: "Redis",
        icon: SiRedis,
        color: "text-[#dc382d]",
    },
];

const secondRow: Technology[] = [
    {
        name: "Docker",
        icon: SiDocker,
        color: "text-[#2496ed]",
    },
    {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-heading",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#0891b2] dark:text-[#38bdf8]",
    },
    {
        name: "Express.js",
        icon: SiExpress,
        color: "text-heading",
    },
    {
        name: "AWS",
        icon: Cloud,
        color: "text-[#d97706] dark:text-[#ff9900]",
    },
    {
        name: "Git",
        icon: SiGit,
        color: "text-[#f05032]",
    },
    {
        name: "Python",
        icon: SiPython,
        color: "text-[#3776ab] dark:text-[#78abd5]",
    },
    {
        name: "Vercel",
        icon: SiVercel,
        color: "text-heading",
    },
];

function TechnologyRow({
    items,
    reverse = false,
}: {
    items: Technology[];
    reverse?: boolean;
}) {
    return (
        <div className="technology-marquee overflow-hidden py-1.5">
            <div
                className={`technology-track flex w-max ${
                    reverse ? "technology-track-reverse" : ""
                }`}
            >
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        aria-hidden={copy === 1 ? true : undefined}
                        className="m-0 flex shrink-0 list-none items-center gap-5 pr-5"
                    >
                        {items.map((technology) => {
                            const Icon = technology.icon;

                            return (
                                <li
                                    key={technology.name}
                                    className="group flex min-w-40 shrink-0 items-center gap-3 rounded-xl border border-line bg-background px-5 py-3 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-md dark:shadow-none"
                                >
                                    <span
                                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface ${technology.color}`}
                                    >
                                        <Icon
                                            size={19}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="text-sm font-semibold whitespace-nowrap text-body transition-colors group-hover:text-heading">
                                        {technology.name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default function TechnologySection() {
    return (
        <section
            aria-labelledby="technology-title"
            className="section-padding overflow-hidden bg-surface"
        >
            {/* Section heading */}
            <div
                data-reveal
                className="site-container mb-10 sm:mb-14"
            >
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                        Technology Stack
                    </p>

                    <h2
                        id="technology-title"
                        className="mt-4 text-3xl leading-tight font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                    >
                        Built with the modern stack
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
                        We choose proven technologies for performance,
                        scalability, and a better development experience.
                    </p>
                </div>
            </div>

            {/* Animated rows */}
            <div className="space-y-4">
                <div
                    data-reveal
                    data-reveal-delay="100"
                >
                    <TechnologyRow items={firstRow} />
                </div>

                <div
                    data-reveal
                    data-reveal-delay="220"
                >
                    <TechnologyRow items={secondRow} reverse />
                </div>
            </div>
        </section>
    );
}