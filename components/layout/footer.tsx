import Link from "next/link";

import { ArrowUpRight, CodeXml } from "lucide-react";

import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

/* নিজের social URL বসাও */
const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, href: "" },
    { name: "Instagram", icon: FaInstagram, href: "" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "" },
    { name: "YouTube", icon: FaYoutube, href: "" },
    { name: "GitHub", icon: FaGithub, href: "" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "" },
];

const socialClass =
    "flex size-10 items-center justify-center rounded-xl border border-line bg-background text-body transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:hover:border-[#71bbaa]/30 dark:hover:bg-[#71bbaa]/10 dark:hover:text-[#71bbaa]";

const footerGroups = [
    {
        title: "Services",
        links: [
            {
                name: "Web Development",
                href: "/services/web-development",
            },
            {
                name: "SaaS Development",
                href: "/services/saas-development",
            },
            {
                name: "AI-Powered Applications",
                href: "/services/ai-applications",
            },
            {
                name: "Custom Software",
                href: "/services/software-development",
            },
            {
                name: "Cloud & DevOps",
                href: "/services/cloud-devops",
            },
            {
                name: "UI/UX Engineering",
                href: "/services/ui-ux",
            },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About us", href: "/about" },
            { name: "Our projects", href: "/projects" },
            { name: "Insights & articles", href: "/blogs" },
            { name: "Careers", href: "/careers" },
            { name: "Contact us", href: "/contact" },
        ],
    },
    {
        title: "Technologies",
        links: [
            { name: "Next.js & React", href: "/technologies" },
            { name: "TypeScript", href: "/technologies" },
            { name: "Laravel & Node.js", href: "/technologies" },
            { name: "Prisma & MySQL", href: "/technologies" },
            { name: "Docker & Cloud", href: "/technologies" },
        ],
    },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line bg-surface dark:border-white/8 dark:bg-[#060e16]">
            <div className="site-container">
                {/* Project CTA */}
                <div className="border-b border-line py-12 sm:py-16 dark:border-white/8">
                    <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
                        <div>
                            <h2 className="max-w-xl text-2xl leading-tight font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl">
                                Ready to build something{" "}
                                <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                    great?
                                </span>
                            </h2>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-body sm:text-base">
                                Let’s discuss your next project and turn
                                your ideas into practical digital solutions.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="btn-animated w-full sm:w-auto"
                        >
                            <span className="btn-animated-content min-h-12 px-6">
                                <span>Start a Project</span>

                                <ArrowUpRight
                                    size={16}
                                    aria-hidden="true"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Footer columns */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:gap-x-10 sm:py-14 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="col-span-2 lg:pr-10">
                        <Link
                            href="/"
                            aria-label="Dhopkol home"
                            className="inline-flex items-center gap-3 rounded-lg"
                        >
                            <span className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary dark:text-[#86b6cb]">
                                <CodeXml
                                    size={24}
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="text-2xl font-bold tracking-tight text-heading">
                                dhopkol
                                <span className="text-accent">.</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-body">
                            Software development and IT services for
                            ambitious businesses. We build websites,
                            custom applications, and dependable digital
                            solutions that support your growth.
                        </p>

                        {/* Social icons */}
                        <ul
                            aria-label="Dhopkol social profiles"
                            className="mt-5 flex flex-wrap items-center gap-2.5"
                        >
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <li key={social.name}>
                                        {social.href ? (
                                            <a
                                                href={social.href}
                                                aria-label={`Dhopkol on ${social.name}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={socialClass}
                                            >
                                                <Icon
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        ) : (
                                            <span
                                                role="img"
                                                aria-label={`${social.name} — link coming soon`}
                                                title={`${social.name} — link coming soon`}
                                                className={socialClass}
                                            >
                                                <Icon
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <Link
                            href="/contact"
                            className="group mt-5 inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-primary transition-colors hover:text-accent dark:text-[#86b6cb]"
                        >
                            Let’s talk about your project

                            <ArrowUpRight
                                size={15}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    {footerGroups.map((group) => (
                        <nav
                            key={group.title}
                            aria-label={`Footer ${group.title}`}
                        >
                            <h3 className="text-sm font-semibold tracking-normal text-heading">
                                {group.title}
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="inline-block rounded-sm py-0.5 text-sm leading-6 text-body transition-colors duration-200 hover:text-primary dark:hover:text-[#86b6cb]"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                {/* Copyright */}
                <div className="flex flex-col gap-4 border-t border-line py-6 md:flex-row md:items-center md:justify-between dark:border-white/8">
                    <p className="text-center text-xs leading-6 text-body sm:text-sm md:text-left">
                        © {year} Dhopkol. All rights reserved.
                    </p>

                    <nav aria-label="Legal">
                        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="rounded-sm text-xs leading-6 text-body transition-colors hover:text-primary sm:text-sm dark:hover:text-[#86b6cb]"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}