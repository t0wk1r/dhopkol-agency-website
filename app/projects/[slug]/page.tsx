import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowUpRight, FolderCode } from "lucide-react";

import ScrollReveal from "@/components/shared/scroll-reveal";

import { projects } from "@/data/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

const container = "mx-auto max-w-7xl px-6 lg:px-10";

const label =
    "mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#2A6B9B] dark:text-[#71BBAA]";

const gradient =
    "bg-gradient-to-r from-[#2A6B9B] to-[#71BBAA] bg-clip-text text-transparent";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    return {
        title: project
            ? `${project.title} | dhopkol`
            : "Project Not Found | dhopkol",
        description: project?.description,
    };
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    const screenshots = project.screenshots ?? [];

    const relatedProjects = projects
        .filter((item) => item.slug !== slug)
        .sort(
            (a, b) =>
                Number(b.category === project.category) -
                Number(a.category === project.category)
        )
        .slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#060E16] pt-28 lg:pt-32">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#2A6B9B]/10 blur-[120px]"
                />

                <div className={`relative z-10 ${container}`}>
                    <ScrollReveal>
                        <Link
                            href="/projects"
                            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#71BBAA]"
                        >
                            <ArrowLeft size={14} aria-hidden="true" />
                            All Projects
                        </Link>

                        <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded-md border border-[#2A6B9B]/20 bg-[#2A6B9B]/10 px-2.5 py-1 text-xs font-medium text-[#71BBAA]">
                                {project.category}
                            </span>

                            <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                                {project.industry}
                            </span>
                        </div>

                        <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                            {project.title}
                        </h1>

                        <p className="max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
                            {project.description}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#71BBAA] hover:underline"
                            >
                                Visit Live Website
                                <ArrowUpRight size={15} aria-hidden="true" />
                            </a>
                        )}
                    </ScrollReveal>

                    <ScrollReveal className="mx-auto mt-14 max-w-6xl lg:mt-16">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-[#0B1621] shadow-2xl">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    priority
                                    sizes="(max-width: 1152px) 100vw, 1152px"
                                    className="object-cover object-top"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <FolderCode
                                        size={72}
                                        aria-hidden="true"
                                        className="text-[#71BBAA]/30"
                                    />
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-white py-14 lg:py-16 dark:bg-[#060E16]">
                <div className={`${container} space-y-20`}>
                    {/* Results */}
                    {project.highlights.length > 0 && (
                        <ScrollReveal>
                            <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
                                {project.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex min-h-36 items-center justify-center rounded-2xl border border-gray-100 bg-[#F8FAFC] p-5 text-center dark:border-white/10 dark:bg-[#0B1621]"
                                    >
                                        <span
                                            className={`text-xl font-extrabold leading-tight md:text-2xl ${gradient}`}
                                        >
                                            {highlight}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    )}

                    {/* Problem / Solution */}
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                        <ScrollReveal>
                            <p className={label}>The Challenge</p>

                            <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                                Problem
                            </h2>

                            <div className="mb-5 rounded-r-lg border-l-2 border-[#2A6B9B] bg-[#2A6B9B]/5 px-4 py-2 text-xs font-medium text-[#2A6B9B] dark:text-[#71BBAA]">
                                Core challenge identified
                            </div>

                            <p className="whitespace-pre-line text-sm leading-7 text-gray-500 dark:text-gray-400">
                                {project.problem}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#398574] dark:text-[#71BBAA]">
                                Our Approach
                            </p>

                            <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                                Solution
                            </h2>

                            <div className="mb-5 rounded-r-lg border-l-2 border-[#71BBAA] bg-[#71BBAA]/5 px-4 py-2 text-xs font-medium text-[#398574] dark:text-[#71BBAA]">
                                Engineering-led solution
                            </div>

                            <p className="whitespace-pre-line text-sm leading-7 text-gray-500 dark:text-gray-400">
                                {project.solution}
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Screenshots */}
                    {screenshots.length > 0 && (
                        <div>
                            <ScrollReveal>
                                <p className={label}>Product Screenshots</p>

                                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                                    The final product
                                </h2>
                            </ScrollReveal>

                            <div className="grid gap-6 md:grid-cols-2">
                                {screenshots.map((screenshot, index) => (
                                    <ScrollReveal
                                        key={`${screenshot.src}-${index}`}
                                        className={
                                            index === 0
                                                ? "md:col-span-2"
                                                : undefined
                                        }
                                    >
                                        <figure>
                                            <a
                                                href={screenshot.src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open screenshot: ${screenshot.caption}`}
                                                className={`group relative block overflow-hidden rounded-xl border border-gray-100 bg-slate-50 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A6B9B] dark:border-white/10 dark:bg-white/5 ${
                                                    index === 0
                                                        ? "aspect-[16/8]"
                                                        : "aspect-[4/3]"
                                                }`}
                                            >
                                                <Image
                                                    src={screenshot.src}
                                                    alt={screenshot.caption}
                                                    fill
                                                    sizes={
                                                        index === 0
                                                            ? "(max-width: 1280px) 100vw, 1200px"
                                                            : "(max-width: 767px) 100vw, 50vw"
                                                    }
                                                    className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                                                />
                                            </a>

                                            <figcaption className="mt-3 text-center text-xs leading-relaxed text-gray-400">
                                                {screenshot.caption}
                                            </figcaption>
                                        </figure>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Technologies */}
                    <ScrollReveal>
                        <p className={label}>Technology</p>

                        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                            Tech stack used
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-lg border border-gray-100 bg-[#F8FAFC] px-4 py-2.5 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Related case studies */}
            {relatedProjects.length > 0 && (
                <section className="bg-[#F8FAFC] py-16 lg:py-20 dark:bg-[#0B1621]">
                    <div className={container}>
                        <ScrollReveal>
                            <p className={label}>Explore More</p>

                            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                                Other case studies
                            </h2>
                        </ScrollReveal>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {relatedProjects.map((related) => (
                                <ScrollReveal
                                    key={related.slug}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/projects/${related.slug}`}
                                        className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2A6B9B] dark:border-white/10 dark:bg-[#060E16]"
                                    >
                                        <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-white/5">
                                            {related.image ? (
                                                <Image
                                                    src={related.image}
                                                    alt={related.title}
                                                    fill
                                                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                                    className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <FolderCode
                                                        size={40}
                                                        aria-hidden="true"
                                                        className="text-[#2A6B9B]/40"
                                                    />
                                                </div>
                                            )}

                                            <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-medium text-gray-800">
                                                {related.category}
                                            </span>
                                        </div>

                                        <div className="flex flex-1 flex-col p-4">
                                            <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white">
                                                {related.title}
                                            </h3>

                                            <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                                {related.description}
                                            </p>

                                            <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[#2A6B9B] dark:text-[#71BBAA]">
                                                View case study
                                                <ArrowUpRight
                                                    size={13}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative overflow-hidden bg-[#060E16] py-20 lg:py-28">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A6B9B]/10 blur-[100px]"
                />

                <ScrollReveal className="relative mx-auto max-w-3xl px-6 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Have a similar project?
                    </h2>

                    <p className="text-base text-gray-400">
                        Let’s discuss how we can help you achieve your goals.
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
                            href="/services"
                            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                        >
                            View Services
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </>
    );
}