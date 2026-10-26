"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, UserRound } from "lucide-react";

type TeamMember = {
    name: string;
    role: string;
    description: string;
    image?: string;
    href?: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Md. Abu Sayed",
        role: "Web Developer & Trainer",
        description:
            "Focused on building practical web applications and helping developers learn web design and development.",
        // image: "/images/team/abu-sayed.jpg",
        // href: "/team/md-abu-sayed",
    },
];

export default function TeamSection() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="leadership"
            className="bg-white py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2A6B9B] dark:text-[#71BBAA]">
                        Leadership
                    </p>

                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Meet the team behind{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-transparent dark:to-[#71BBAA]">
                            dhopkol
                        </span>
                    </h2>
                </motion.div>

                {/* Team cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => {
                        const card = (
                            <>
                                <div className="relative">
                                    <div className="relative mx-auto mb-4 flex size-[168px] items-center justify-center overflow-hidden rounded-2xl bg-[#2A6B9B]/10 shadow-md dark:bg-white/5">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="168px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <UserRound
                                                size={56}
                                                aria-hidden="true"
                                                className="text-[#2A6B9B] dark:text-[#71BBAA]"
                                            />
                                        )}
                                    </div>

                                    {member.href && (
                                        <ArrowUpRight
                                            size={16}
                                            aria-hidden="true"
                                            className="absolute right-0 top-0 text-[#2A6B9B] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 dark:text-[#71BBAA]"
                                        />
                                    )}
                                </div>

                                <h3 className="mb-0.5 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#2A6B9B] dark:text-white dark:group-hover:text-[#71BBAA]">
                                    {member.name}
                                </h3>

                                <p className="mb-3 text-sm font-medium text-[#2A6B9B] dark:text-[#71BBAA]">
                                    {member.role}
                                </p>

                                <p className="line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {member.description}
                                </p>
                            </>
                        );

                        const cardClass =
                            "group block h-full rounded-2xl border border-gray-100 p-6 text-center transition-all duration-300 hover:border-[#2A6B9B]/20 hover:shadow-xl hover:shadow-gray-100/80 dark:border-white/10 dark:hover:border-[#2A6B9B]/40 dark:hover:shadow-black/20";

                        return (
                            <motion.div
                                key={member.name}
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
                                        : (index % 4) * 0.08,
                                    ease: "easeOut",
                                }}
                                className="h-full"
                            >
                                {member.href ? (
                                    <Link
                                        href={member.href}
                                        className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A6B9B]`}
                                    >
                                        {card}
                                    </Link>
                                ) : (
                                    <div className={cardClass}>
                                        {card}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}