"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";

import { ArrowUpRight, FolderCode } from "lucide-react";

import { projects } from "@/data/projects";

const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
];

export default function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const reduceMotion = useReducedMotion();

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === activeCategory
              );

    return (
        <section className="bg-white py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Category filters */}
                <div
                    role="group"
                    aria-label="Filter projects by category"
                    className="mb-12 flex flex-wrap gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            aria-pressed={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A6B9B] ${
                                activeCategory === category
                                    ? "bg-[#2A6B9B] text-white shadow-lg shadow-[#2A6B9B]/20"
                                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.slug}
                                layout={!reduceMotion}
                                initial={
                                    reduceMotion
                                        ? false
                                        : { opacity: 0, y: 24 }
                                }
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.1,
                                }}
                                transition={{
                                    duration: reduceMotion ? 0 : 0.4,
                                    ease: "easeOut",
                                }}
                                className="h-full min-w-0"
                            >
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A6B9B] motion-safe:hover:-translate-y-1.5 dark:border-white/10 dark:bg-[#0B1621] dark:hover:shadow-black/30"
                                >
                                    {/* Project image */}
                                    <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-white/5">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                                className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <FolderCode
                                                    size={48}
                                                    aria-hidden="true"
                                                    className="text-[#2A6B9B]/40 dark:text-[#71BBAA]/40"
                                                />
                                            </div>
                                        )}

                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                                        />

                                        {/* Category & industry */}
                                        <div className="absolute left-3 right-3 top-3 flex flex-wrap items-center gap-2">
                                            <span className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                                                {project.category}
                                            </span>

                                            <span className="rounded-lg bg-black/30 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                                                {project.industry}
                                            </span>
                                        </div>

                                        {/* Hover arrow */}
                                        <div
                                            aria-hidden="true"
                                            className="absolute bottom-3 right-3 flex size-8 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                                        >
                                            <ArrowUpRight
                                                size={14}
                                                className="text-[#2A6B9B]"
                                            />
                                        </div>
                                    </div>

                                    {/* Project content */}
                                    <div className="flex flex-1 flex-col p-6">
                                        <h2 className="mb-2 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-[#2A6B9B] dark:text-white dark:group-hover:text-[#71BBAA]">
                                            {project.title}
                                        </h2>

                                        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mb-4 flex flex-wrap gap-1.5">
                                            {project.highlights.map(
                                                (highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="rounded-lg bg-[#2A6B9B]/[0.08] px-2.5 py-1 text-xs font-medium text-[#2A6B9B] dark:bg-[#71BBAA]/10 dark:text-[#71BBAA]"
                                                    >
                                                        {highlight}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <div className="mt-auto">
                                            {/* Technologies */}
                                            <div className="mb-4 flex flex-wrap gap-1">
                                                {project.technologies
                                                    .slice(0, 4)
                                                    .map((technology) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-400 dark:bg-white/5 dark:text-gray-400"
                                                        >
                                                            {technology}
                                                        </span>
                                                    ))}

                                                {project.technologies.length >
                                                    4 && (
                                                    <span
                                                        title={project.technologies
                                                            .slice(4)
                                                            .join(", ")}
                                                        className="rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-400 dark:bg-white/5 dark:text-gray-400"
                                                    >
                                                        +
                                                        {project.technologies
                                                            .length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Case study */}
                                            <div className="flex items-center gap-1 text-sm font-semibold text-[#2A6B9B] dark:text-[#71BBAA]">
                                                View case study

                                                <ArrowUpRight
                                                    size={13}
                                                    aria-hidden="true"
                                                    className="transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}