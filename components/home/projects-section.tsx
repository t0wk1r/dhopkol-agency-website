"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ArrowUpRight, Check } from "lucide-react";

type Project = {
    id: number;
    title: string;
    slug: string;
    category: string;
    industry: string;
    description: string;
    image: string;
    features: string[];
    technologies: string[];
};

const projects: Project[] = [
    {
        id: 1,
        title: "Commerce Platform",
        slug: "commerce-platform",
        category: "E-commerce",
        industry: "Retail",
        description:
            "A demo storefront concept with product discovery, a responsive shopping experience, and tools for managing orders.",
        image: "https://placehold.co/960x600/e8f2fa/2a6b9b/png?text=Commerce+Platform",
        features: [
            "Product catalog",
            "Order management",
            "Responsive storefront",
        ],
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "MySQL",
        ],
    },
    {
        id: 2,
        title: "Business Website",
        slug: "business-website",
        category: "Business Website",
        industry: "Professional Services",
        description:
            "A demo company website concept that presents services, highlights previous work, and guides visitors to an inquiry form.",
        image: "https://placehold.co/960x600/e9f4ef/205b50/png?text=Business+Website",
        features: [
            "Service pages",
            "Project showcase",
            "Inquiry form",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Motion",
        ],
    },
    {
        id: 3,
        title: "Learning Platform",
        slug: "learning-platform",
        category: "SaaS",
        industry: "Education",
        description:
            "A demo learning platform concept with course discovery, student dashboards, and organized lesson access.",
        image: "https://placehold.co/960x600/eeedf8/57508c/png?text=Learning+Platform",
        features: [
            "Course catalog",
            "Student dashboard",
            "Lesson management",
        ],
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Prisma",
            "MySQL",
        ],
    },
];

const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const visibleProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === activeCategory
              );

    return (
        <section
            id="projects"
            aria-labelledby="projects-title"
            className="section-padding relative isolate overflow-hidden bg-background"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-primary/3 blur-[140px]" />

                <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-[#71bbaa]/5 blur-[120px]" />
            </div>

            <div className="site-container">
                {/* Heading */}
                <div
                    data-reveal
                    className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end"
                >
                    <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                            Case Studies
                        </p>

                        <h2
                            id="projects-title"
                            className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                        >
                            Projects that deliver
                            <br />

                            <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                real business outcomes
                            </span>
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="btn-animated self-start md:shrink-0"
                    >
                        <span className="btn-animated-content">
                            <span>All case studies</span>

                            <ArrowUpRight
                                size={15}
                                aria-hidden="true"
                            />
                        </span>
                    </Link>
                </div>

                {/* Category filters */}
                <div
                    data-reveal
                    role="group"
                    aria-label="Filter projects by category"
                    className="mb-9 flex flex-wrap gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            aria-pressed={activeCategory === category}
                            aria-controls="projects-grid"
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                                activeCategory === category
                                    ? "bg-primary text-on-primary"
                                    : "bg-surface text-body hover:bg-primary/10 hover:text-heading"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div
                    data-reveal
                    data-reveal-delay="100"
                >
                    <p
                        role="status"
                        aria-live="polite"
                        className="sr-only"
                    >
                        {visibleProjects.length} projects shown.
                    </p>

                    <div
                        id="projects-grid"
                        key={activeCategory}
                        className="project-grid-enter grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                    >
                        {visibleProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-25px_rgba(42,107,155,0.3)] motion-reduce:transform-none"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} demo placeholder`}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
                                    />

                                    {/* Category label */}
                                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#20557e] shadow-sm backdrop-blur-md">
                                        <span
                                            aria-hidden="true"
                                            className="size-1.5 rounded-full bg-[#2a6b9b]"
                                        />

                                        {project.category}
                                    </span>

                                    {/* Hover action */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute right-4 bottom-4 flex size-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#2a6b9b] opacity-0 shadow-sm transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transform-none"
                                    >
                                        <ArrowUpRight size={17} />
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <span className="text-[10px] font-semibold tracking-[0.12em] text-body uppercase">
                                            {project.industry}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="size-1 rounded-full bg-body/40"
                                        />

                                        <span className="text-[10px] text-body">
                                            Demo project
                                        </span>
                                    </div>

                                    <h3 className="text-xl leading-snug font-semibold tracking-tight text-heading transition-colors group-hover:text-primary dark:group-hover:text-[#86b6cb]">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-body">
                                        {project.description}
                                    </p>

                                    {/* Features */}
                                    <ul
                                        aria-label={`${project.title} features`}
                                        className="mt-5 space-y-2"
                                    >
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-xs leading-5 text-body"
                                            >
                                                <Check
                                                    size={14}
                                                    aria-hidden="true"
                                                    className="mt-0.5 shrink-0 text-accent"
                                                />

                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies and footer */}
                                    <div className="mt-auto pt-6">
                                        <ul
                                            aria-label={`${project.title} technologies`}
                                            className="flex flex-wrap gap-1.5"
                                        >
                                            {project.technologies
                                                .slice(0, 4)
                                                .map((technology) => (
                                                    <li
                                                        key={technology}
                                                        className="rounded-md border border-line bg-surface px-2 py-1 text-[10px] font-medium text-body"
                                                    >
                                                        {technology}
                                                    </li>
                                                ))}

                                            {project.technologies.length > 4 && (
                                                <li
                                                    aria-label={`${project.technologies.length - 4} more technologies`}
                                                    className="rounded-md border border-line bg-surface px-2 py-1 text-[10px] font-medium text-body"
                                                >
                                                    +{project.technologies.length - 4}
                                                </li>
                                            )}
                                        </ul>

                                        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                                            <span className="text-xs font-semibold text-primary dark:text-[#86b6cb]">
                                                View case study
                                            </span>

                                            <ArrowUpRight
                                                size={16}
                                                aria-hidden="true"
                                                className="text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none dark:text-[#86b6cb]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom action */}
                <div
                    data-reveal
                    className="mt-12 text-center sm:mt-14"
                >
                    <p className="mb-4 text-sm leading-6 text-body">
                        Explore our work across websites and software
                        applications.
                    </p>

                    <Link
                        href="/projects"
                        className="btn-outline"
                    >
                        View all projects
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}