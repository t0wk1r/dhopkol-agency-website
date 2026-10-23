"use client";

import { useState } from "react";

import {
    ArrowUpRight,
    Check,
    CircleCheck,
    CloudUpload,
    CodeXml,
    LayoutDashboard,
    RefreshCw,
    Search,
} from "lucide-react";

const steps = [
    {
        title: "Discovery & Strategy",
        subtitle: "Understanding your vision",
        icon: Search,
        description:
            "We start by understanding your business goals, users, and technical requirements. Together, we define a clear scope and a practical plan for delivery.",
        deliverables: [
            "Business and stakeholder discussions",
            "Technical requirements analysis",
            "Project scope and priorities",
            "Initial architecture proposal",
        ],
    },
    {
        title: "Architecture & Design",
        subtitle: "Building the blueprint",
        icon: LayoutDashboard,
        description:
            "We turn the requirements into clear user journeys, interface designs, and a technical structure that supports your product as it grows.",
        deliverables: [
            "User flows and wireframes",
            "Responsive interface design",
            "Database and API planning",
            "Design review and approval",
        ],
    },
    {
        title: "Development",
        subtitle: "Engineering with precision",
        icon: CodeXml,
        description:
            "We build your product in manageable stages, connecting the interface, business logic, and data while sharing progress for regular feedback.",
        deliverables: [
            "Frontend and backend implementation",
            "API and database integration",
            "Regular progress demonstrations",
            "Code review and documentation",
        ],
    },
    {
        title: "QA & Testing",
        subtitle: "Checking every detail",
        icon: CircleCheck,
        description:
            "We check the product against the agreed requirements, test important workflows, and resolve issues before preparing it for release.",
        deliverables: [
            "Functional workflow testing",
            "Responsive and browser checks",
            "Performance and security checks",
            "Bug fixes and acceptance review",
        ],
    },
    {
        title: "Deployment",
        subtitle: "Launch with confidence",
        icon: CloudUpload,
        description:
            "We prepare the production environment and release your application with the configuration, checks, and handover needed for a smooth launch.",
        deliverables: [
            "Hosting and environment setup",
            "Domain and SSL configuration",
            "Production deployment and verification",
            "Handover and launch documentation",
        ],
    },
    {
        title: "Continuous Support",
        subtitle: "Partners for the long run",
        icon: RefreshCw,
        description:
            "After launch, we help keep your product running and plan improvements as your needs change, based on the support scope we agree together.",
        deliverables: [
            "Issue investigation and fixes",
            "Updates and maintenance",
            "Performance improvements",
            "Planning future enhancements",
        ],
    },
];

export default function ProcessSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeStep = steps[activeIndex];
    const ActiveIcon = activeStep.icon;
    const stepNumber = String(activeIndex + 1).padStart(2, "0");

    return (
        <section
            id="process"
            aria-labelledby="process-title"
            className="section-padding relative isolate bg-background"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden dark:bg-[#060e16]"
            >
                <div className="absolute -top-32 -right-32 size-[600px] rounded-full bg-primary/8 blur-[120px]" />

                <div className="absolute -bottom-24 -left-24 size-[400px] rounded-full bg-[#71bbaa]/8 blur-[100px]" />
            </div>

            <div className="site-container">
                {/* Heading */}
                <div
                    data-reveal
                    className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                        How We Work
                    </p>

                    <h2
                        id="process-title"
                        className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                    >
                        A structured process
                        <br />

                        <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                            built for results
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
                        From the first conversation to launch, our process
                        keeps priorities clear and progress visible.
                    </p>
                </div>

                <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Step selector */}
                    <div
                        data-reveal
                        className="space-y-3"
                        role="group"
                        aria-label="Project process steps"
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const selected = activeIndex === index;

                            return (
                                <button
                                    key={step.title}
                                    type="button"
                                    aria-pressed={selected}
                                    aria-controls="process-details"
                                    onClick={() => setActiveIndex(index)}
                                    className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-colors duration-300 sm:p-5 ${
                                        selected
                                            ? "border-primary/50 bg-primary/5 dark:bg-white/5"
                                            : "border-line bg-transparent hover:border-primary/25 hover:bg-surface dark:border-white/5 dark:hover:bg-white/3"
                                    }`}
                                >
                                    <span
                                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                                            selected
                                                ? "bg-primary text-on-primary"
                                                : "bg-surface text-body dark:bg-white/5"
                                        }`}
                                    >
                                        <Icon
                                            size={19}
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="min-w-0 flex-1">
                                        <span className="flex items-baseline gap-2">
                                            <span className="font-mono text-xs text-body">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <span
                                                className={`text-sm font-semibold transition-colors sm:text-base ${
                                                    selected
                                                        ? "text-heading"
                                                        : "text-body group-hover:text-heading"
                                                }`}
                                            >
                                                {step.title}
                                            </span>
                                        </span>

                                        <span className="mt-1 block text-xs leading-5 text-body sm:text-sm">
                                            {step.subtitle}
                                        </span>
                                    </span>

                                    <ArrowUpRight
                                        size={17}
                                        aria-hidden="true"
                                        className={`shrink-0 transition-opacity ${
                                            selected
                                                ? "text-accent opacity-100"
                                                : "text-body opacity-0 group-hover:opacity-100"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Details */}
                    <div
                        data-reveal
                        data-reveal-delay="150"
                        className="lg:sticky lg:top-28"
                    >
                        <div
                            id="process-details"
                            className="min-h-[360px] rounded-2xl border border-line bg-surface/70 p-6 sm:p-8 dark:border-white/10 dark:bg-white/4"
                        >
                            <div
                                key={activeIndex}
                                className="process-detail-enter"
                            >
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-accent dark:bg-primary/20">
                                        <ActiveIcon
                                            size={23}
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <div>
                                        <p className="mb-1 font-mono text-xs text-accent">
                                            Step {stepNumber}
                                        </p>

                                        <h3 className="text-xl leading-snug font-bold text-heading">
                                            {activeStep.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm leading-7 text-body sm:text-base">
                                    {activeStep.description}
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {activeStep.deliverables.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-sm leading-6 text-heading"
                                        >
                                            <Check
                                                size={16}
                                                aria-hidden="true"
                                                className="mt-1 shrink-0 text-accent"
                                            />

                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}