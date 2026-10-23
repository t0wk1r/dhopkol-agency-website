import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Clock3 } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "Planning Your First SaaS Product: Where to Start",
        slug: "planning-your-first-saas-product",
        category: "SaaS",
        description:
            "A practical starting point for defining your users, choosing essential features, and planning your first product release.",
        image: "https://placehold.co/960x540/102a43/8bc9ba/png?text=Building+a+SaaS+Product",
        author: "Dhopkol Team",
        initials: "DT",
        readingTime: "8 min read",
    },
    {
        id: 2,
        title: "Choosing the Right Software Development Partner",
        slug: "choosing-a-software-development-partner",
        category: "Development",
        description:
            "Explore the questions to ask about communication, technical skills, project scope, and support before starting a project.",
        image: "https://placehold.co/960x540/15342f/a5d8c9/png?text=Your+Technology+Partner",
        author: "Dhopkol Team",
        initials: "DT",
        readingTime: "6 min read",
    },
    {
        id: 3,
        title: "When Does Your Business Need Custom Software?",
        slug: "when-your-business-needs-custom-software",
        category: "Custom Software",
        description:
            "Understand when a tailored application can help organize your operations and when an existing tool may be enough.",
        image: "https://placehold.co/960x540/25253f/b9b7df/png?text=Custom+Software+Solutions",
        author: "Dhopkol Team",
        initials: "DT",
        readingTime: "5 min read",
    },
];

export default function BlogSection() {
    return (
        <section
            id="insights"
            aria-labelledby="blog-title"
            className="section-padding relative isolate overflow-hidden bg-surface dark:bg-[#060e16]"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/6 blur-[130px]"
            />

            <div className="site-container">
                {/* Heading */}
                <div
                    data-reveal
                    className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end"
                >
                    <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                            Engineering Insights
                        </p>

                        <h2
                            id="blog-title"
                            className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                        >
                            From our engineering
                            <br />

                            <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                team&apos;s learnings
                            </span>
                        </h2>
                    </div>

                    <Link
                        href="/blogs"
                        className="btn-outline self-start md:shrink-0"
                    >
                        All articles
                        <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                </div>

                {/* Articles */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            data-reveal
                            data-reveal-delay={index * 100}
                        >
                            <Link
                                href={`/blogs/${article.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-primary/35 motion-reduce:transform-none dark:border-white/10 dark:bg-white/4 dark:hover:border-white/20 dark:hover:bg-white/6"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={`${article.category} article placeholder`}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
                                    />

                                    <span className="absolute top-3 left-3 rounded-lg border border-white/20 bg-navy/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                                        {article.category}
                                    </span>

                                    <span className="absolute right-3 bottom-3 rounded-md bg-navy/60 px-2 py-1 text-[9px] font-medium text-white/90 backdrop-blur-md">
                                        Demo article
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="line-clamp-2 text-base leading-6 font-bold text-heading transition-colors group-hover:text-accent">
                                        {article.title}
                                    </h3>

                                    <p className="mt-3 mb-5 line-clamp-3 text-sm leading-7 text-body">
                                        {article.description}
                                    </p>

                                    {/* Author */}
                                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <span
                                                aria-hidden="true"
                                                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary dark:bg-[#71bbaa]/15 dark:text-[#8bc9ba]"
                                            >
                                                {article.initials}
                                            </span>

                                            <div className="min-w-0">
                                                <p className="truncate text-xs font-semibold text-heading">
                                                    {article.author}
                                                </p>

                                                <p className="mt-1 flex items-center gap-1 text-[10px] text-body">
                                                    <Clock3
                                                        size={11}
                                                        aria-hidden="true"
                                                        className="shrink-0"
                                                    />

                                                    {article.readingTime}
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={16}
                                            aria-hidden="true"
                                            className="shrink-0 text-body transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transform-none"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}