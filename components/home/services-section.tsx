import Link from "next/link";

import {
    ArrowUpRight,
    Cloud,
    CodeXml,
    Cpu,
    Layers3,
    Wrench,
    Zap,
} from "lucide-react";

const services = [
    {
        title: "Full Stack Web Development",
        description:
            "End-to-end web development with fast interfaces, reliable APIs, and modern databases. From business websites to complex platforms.",
        href: "/services/web-development",
        icon: CodeXml,
        technologies: ["Next.js", "React", "Laravel", "MySQL"],
        accent: "blue",
    },
    {
        title: "SaaS Application Development",
        description:
            "Scalable SaaS platforms with secure authentication, subscription management, billing, and tools for your business operations.",
        href: "/services/saas-development",
        icon: Layers3,
        technologies: ["SaaS", "Subscriptions", "Auth", "Multi-tenant"],
        accent: "slate",
    },
    {
        title: "AI-Powered Applications",
        description:
            "Add intelligent chat, knowledge search, and workflow automation to your product with AI integrations built around your needs.",
        href: "/services/ai-applications",
        icon: Cpu,
        technologies: ["AI Chat", "Search", "Automation", "APIs"],
        accent: "teal",
    },
    {
        title: "Custom Software Development",
        description:
            "Software tailored to your business processes, with practical features, clear architecture, and long-term maintainability.",
        href: "/services/software-development",
        icon: Wrench,
        technologies: ["Business Tools", "Dashboards", "APIs", "Prisma"],
        accent: "blue",
    },
    {
        title: "Cloud & DevOps",
        description:
            "Deployment, infrastructure configuration, and delivery pipelines that keep your applications available and easier to maintain.",
        href: "/services/cloud-devops",
        icon: Cloud,
        technologies: ["Docker", "Cloud", "CI/CD", "Deployment"],
        accent: "slate",
    },
    {
        title: "UI/UX Engineering",
        description:
            "Responsive interfaces with thoughtful interactions, accessible components, and consistent design across your entire product.",
        href: "/services/ui-ux",
        icon: Zap,
        technologies: ["Tailwind CSS", "Motion", "Figma", "Accessibility"],
        accent: "teal",
    },
];

const accents = {
    blue: {
        icon: "text-[#2a6b9b] dark:text-[#72acd2]",
        gradient: "from-[#2a6b9b]/15 to-[#2a6b9b]/5",
    },
    slate: {
        icon: "text-[#5089a3] dark:text-[#86b6cb]",
        gradient: "from-[#5089a3]/15 to-[#5089a3]/5",
    },
    teal: {
        icon: "text-[#0f766e] dark:text-[#71bbaa]",
        gradient: "from-[#71bbaa]/20 to-[#71bbaa]/5",
    },
};

export default function ServicesSection() {
    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="section-padding bg-background"
        >
            <div className="site-container">
                {/* Section heading */}
                <div
                    data-reveal
                    className="mb-10 max-w-2xl sm:mb-14"
                >
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                        What We Build
                    </p>

                    <h2
                        id="services-title"
                        className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                    >
                        Enterprise-grade services
                        <br />

                        <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                            for modern teams
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
                        From initial concept to production deployment, we
                        build practical software solutions that support your
                        business goals.
                    </p>
                </div>

                {/* Service cards */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        const accent =
                            accents[service.accent as keyof typeof accents];

                        return (
                            <Link
                                key={service.href}
                                href={service.href}
                                data-reveal
                                data-reveal-delay={(index % 3) * 100}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_16px_40px_-20px_rgba(42,107,155,0.3)] focus-visible:border-primary sm:p-7 dark:hover:shadow-none"
                            >
                                {/* Hover background */}
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accent.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100`}
                                />

                                <div className="relative flex flex-1 flex-col">
                                    <div className="mb-5 flex items-start justify-between">
                                        <span
                                            className={`flex size-11 items-center justify-center rounded-xl bg-surface transition-colors duration-300 group-hover:bg-background ${accent.icon}`}
                                        >
                                            <Icon
                                                size={22}
                                                strokeWidth={1.7}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            aria-hidden="true"
                                            className="mt-1 text-body/50 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary motion-reduce:transform-none"
                                        />
                                    </div>

                                    <h3 className="text-lg leading-snug font-semibold text-heading">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 flex-1 text-sm leading-7 text-body">
                                        {service.description}
                                    </p>

                                    <ul
                                        aria-label={`${service.title} capabilities`}
                                        className="mt-5 flex flex-wrap gap-1.5"
                                    >
                                        {service.technologies.map(
                                            (technology) => (
                                                <li
                                                    key={technology}
                                                    className="rounded-md bg-surface px-2 py-1 text-[11px] leading-4 font-medium text-body"
                                                >
                                                    {technology}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* All services */}
                <div
                    data-reveal
                    data-reveal-delay="100"
                    className="mt-10 text-center sm:mt-12"
                >
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-2 py-2 text-sm font-semibold text-primary transition-colors hover:text-accent dark:text-[#86b6cb]"
                    >
                        Explore all services

                        <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}