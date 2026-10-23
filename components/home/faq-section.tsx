"use client";

import { useId, useState } from "react";
import Link from "next/link";

import { ArrowUpRight, Plus } from "lucide-react";

const faqs = [
    {
        question: "What types of companies do you typically work with?",
        answer:
            "We work with startups, growing businesses, and established teams looking for websites, custom software, SaaS products, or IT solutions. We start by understanding your goals and finding the right approach for your project.",
    },
    {
        question: "How do you price your engagements?",
        answer:
            "Pricing depends on the project scope, complexity, timeline, and support requirements. After discussing your needs, we prepare a proposal outlining the deliverables, estimated cost, and payment milestones.",
    },
    {
        question: "What does the onboarding process look like?",
        answer:
            "We begin with a discovery conversation to understand your business and technical requirements. Next, we agree on the scope, priorities, timeline, and communication process before starting design and development.",
    },
    {
        question: "How do you ensure code quality and maintainability?",
        answer:
            "Our approach includes clear project structure, reusable components, code reviews, and testing suited to the project. We also document important decisions so your software remains easier to understand and maintain.",
    },
    {
        question: "Do you offer post-launch support?",
        answer:
            "Post-launch support can be included in your project agreement. Depending on your needs, this may cover bug fixes, maintenance, monitoring, and ongoing feature development.",
    },
    {
        question: "Can you work with our existing development team?",
        answer:
            "Yes. We can collaborate with your developers, designers, and product team. We agree on responsibilities, development workflows, and communication channels so everyone can work together effectively.",
    },
    {
        question: "How do you handle IP and data confidentiality?",
        answer:
            "Ownership, confidentiality, and access requirements are agreed upon before work begins. We can discuss an NDA and document how source code, project assets, credentials, and business data will be handled.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const sectionId = useId();

    return (
        <section
            id="faq"
            aria-labelledby={`${sectionId}-title`}
            className="section-padding bg-surface"
        >
            <div className="site-container">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Introduction */}
                    <div data-reveal className="lg:sticky lg:top-32">
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                            FAQ
                        </p>

                        <h2
                            id={`${sectionId}-title`}
                            className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                        >
                            Everything you
                            <br />

                            <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                need to know
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-base leading-8 text-body sm:text-lg">
                            Straight answers to the questions clients ask
                            before starting a project with us.
                        </p>

                        {/* Contact card */}
                        <div className="mt-8 rounded-2xl border border-primary/15 bg-linear-to-br from-primary/8 to-accent/8 p-6 dark:border-primary/25">
                            <h3 className="text-base font-semibold text-heading">
                                Still have questions?
                            </h3>

                            <p className="mt-2 max-w-sm text-sm leading-7 text-body">
                                Tell us about your project. We’ll help you
                                understand the next steps and explore the
                                right solution.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-4 inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-primary transition-colors hover:text-accent dark:text-[#86b6cb]"
                            >
                                Let’s talk

                                <ArrowUpRight
                                    size={16}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div data-reveal data-reveal-delay="120">
                        <div className="rounded-2xl border border-line bg-background px-5 py-1 sm:px-6">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                const triggerId = `${sectionId}-trigger-${index}`;
                                const panelId = `${sectionId}-panel-${index}`;

                                return (
                                    <div
                                        key={faq.question}
                                        className="border-b border-line last:border-b-0"
                                    >
                                        <h3>
                                            <button
                                                id={triggerId}
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                onClick={() =>
                                                    setOpenIndex(
                                                        isOpen ? null : index
                                                    )
                                                }
                                                className="group flex w-full items-center justify-between gap-4 rounded-lg py-5 text-left"
                                            >
                                                <span
                                                    className={`text-sm leading-6 font-semibold tracking-normal transition-colors duration-300 sm:text-base ${
                                                        isOpen
                                                            ? "text-primary dark:text-[#86b6cb]"
                                                            : "text-heading group-hover:text-primary dark:group-hover:text-[#86b6cb]"
                                                    }`}
                                                >
                                                    {faq.question}
                                                </span>

                                                <span
                                                    aria-hidden="true"
                                                    className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                                                        isOpen
                                                            ? "bg-primary/10 text-primary dark:text-[#86b6cb]"
                                                            : "bg-surface text-body group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:text-[#86b6cb]"
                                                    }`}
                                                >
                                                    <Plus
                                                        size={14}
                                                        strokeWidth={2}
                                                        className={`transition-transform duration-300 motion-reduce:transition-none ${
                                                            isOpen
                                                                ? "rotate-45"
                                                                : "rotate-0"
                                                        }`}
                                                    />
                                                </span>
                                            </button>
                                        </h3>

                                        <div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={triggerId}
                                            aria-hidden={!isOpen}
                                            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                                                isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "invisible grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="min-h-0 overflow-hidden">
                                                <p className="max-w-xl pr-2 pb-5 text-sm leading-7 tracking-normal text-body sm:pr-10">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}