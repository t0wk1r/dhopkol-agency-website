"use client";

import { useId, useState, type FormEvent } from "react";

import {
    ArrowUpRight,
    CheckCircle2,
    MessageSquare,
} from "lucide-react";

const nextSteps = [
    "We review your project details",
    "Arrange a discovery conversation",
    "Prepare a proposal and project roadmap",
    "Agree on the plan and get started",
];

const benefits = [
    "Clear scope and practical recommendations",
    "Direct communication with your development team",
    "Transparent milestones and progress updates",
    "Support options beyond launch",
];

const services = [
    "Full Stack Web Development",
    "SaaS Application Development",
    "AI-Powered Applications",
    "Custom Software Development",
    "Cloud & DevOps",
    "UI/UX Engineering",
    "IT Services & Support",
    "Other",
];

const budgets = [
    "Under ৳50,000",
    "৳50,000 – ৳1,00,000",
    "৳1,00,000 – ৳3,00,000",
    "৳3,00,000+",
    "Monthly retainer",
    "Let’s discuss",
];

const inputClass = [
    "min-h-12 w-full rounded-xl border border-line",
    "bg-background px-4 py-3 text-sm text-heading",
    "placeholder:text-body/60",
    "outline-none focus:outline-none focus-visible:outline-none",
    "focus:outline-offset-0 focus-visible:outline-offset-0",
    "ring-0 focus:ring-0 focus-visible:ring-0",
    "transition-[border-color,background-color] duration-200",
    "hover:border-primary/40 focus:border-primary",
    "dark:bg-[#0d1b2a] dark:focus:border-[#71bbaa]",
    "motion-reduce:transition-none",
].join(" ");

const labelClass =
    "mb-2 block text-xs font-semibold tracking-wide text-body";

export default function ContactSection() {
    const formId = useId();
    const [notice, setNotice] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setNotice(
            "This form is currently a preview. Your message has not been sent. Online submission will be available once the API is connected."
        );
    }

    return (
        <section
            id="contact"
            aria-labelledby={`${formId}-title`}
            className="section-padding relative isolate overflow-hidden bg-background dark:bg-[#060e16]"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[100px]" />

                <div className="absolute top-0 right-0 h-[300px] w-[400px] rounded-full bg-accent/5 blur-[80px]" />
            </div>

            <div className="site-container">
                {/* Section heading */}
                <div
                    data-reveal
                    className="mx-auto mb-10 max-w-2xl text-center sm:mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#71bbaa]">
                        Let’s Work Together
                    </p>

                    <h2
                        id={`${formId}-title`}
                        className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                    >
                        Start your next
                        <br />

                        <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                            engineering project
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-body sm:text-lg">
                        Tell us what you’re building, the challenges you’re
                        facing, and where you want to go next.
                    </p>
                </div>

                <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
                    {/* Project information */}
                    <div
                        data-reveal
                        className="space-y-8 lg:sticky lg:top-32 lg:col-span-2"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-heading">
                                What happens next
                            </h3>

                            <ol className="mt-5 space-y-5">
                                {nextSteps.map((step, index) => (
                                    <li
                                        key={step}
                                        className="flex items-start gap-4"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary dark:text-[#71bbaa]"
                                        >
                                            {index + 1}
                                        </span>

                                        <p className="pt-0.5 text-sm leading-6 text-body">
                                            {step}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6 dark:border-white/10 dark:bg-white/5">
                            <h3 className="text-sm font-semibold text-heading">
                                Why teams choose Dhopkol
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-2.5"
                                    >
                                        <CheckCircle2
                                            size={16}
                                            aria-hidden="true"
                                            className="mt-0.5 shrink-0 text-accent dark:text-[#71bbaa]"
                                        />

                                        <span className="text-sm leading-6 text-body">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-body">
                            Not sure about the technical details? Start with
                            your idea and business goals. We can work through
                            the requirements together.
                        </p>
                    </div>

                    {/* Contact form */}
                    <div
                        data-reveal
                        data-reveal-delay="120"
                        className="min-w-0 lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 rounded-2xl border border-line bg-surface p-5 sm:p-7 dark:border-white/10 dark:bg-white/5"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="min-w-0">
                                    <label
                                        htmlFor={`${formId}-first-name`}
                                        className={labelClass}
                                    >
                                        First name *
                                    </label>

                                    <input
                                        id={`${formId}-first-name`}
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        placeholder="First name"
                                        required
                                        maxLength={80}
                                        className={inputClass}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <label
                                        htmlFor={`${formId}-last-name`}
                                        className={labelClass}
                                    >
                                        Last name *
                                    </label>

                                    <input
                                        id={`${formId}-last-name`}
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        placeholder="Last name"
                                        required
                                        maxLength={80}
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor={`${formId}-email`}
                                    className={labelClass}
                                >
                                    Email address *
                                </label>

                                <input
                                    id={`${formId}-email`}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                    required
                                    maxLength={254}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor={`${formId}-company`}
                                    className={labelClass}
                                >
                                    Company name
                                </label>

                                <input
                                    id={`${formId}-company`}
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                    placeholder="Your company or organization"
                                    maxLength={160}
                                    className={inputClass}
                                />
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="min-w-0">
                                    <label
                                        htmlFor={`${formId}-service`}
                                        className={labelClass}
                                    >
                                        Service needed
                                    </label>

                                    <select
                                        id={`${formId}-service`}
                                        name="service"
                                        defaultValue=""
                                        className={inputClass}
                                    >
                                        <option value="">
                                            Select a service
                                        </option>

                                        {services.map((service) => (
                                            <option
                                                key={service}
                                                value={service}
                                            >
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="min-w-0">
                                    <label
                                        htmlFor={`${formId}-budget`}
                                        className={labelClass}
                                    >
                                        Budget range
                                    </label>

                                    <select
                                        id={`${formId}-budget`}
                                        name="budget"
                                        defaultValue=""
                                        className={inputClass}
                                    >
                                        <option value="">
                                            Select your budget
                                        </option>

                                        {budgets.map((budget) => (
                                            <option
                                                key={budget}
                                                value={budget}
                                            >
                                                {budget}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor={`${formId}-description`}
                                    className={labelClass}
                                >
                                    Project description *
                                </label>

                                <textarea
                                    id={`${formId}-description`}
                                    name="description"
                                    rows={5}
                                    placeholder="Tell us about your project, goals, and timeline..."
                                    required
                                    minLength={20}
                                    maxLength={5000}
                                    className={`${inputClass} min-h-36 resize-y`}
                                />
                            </div>

                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    name="requiresNda"
                                    type="checkbox"
                                    className="mt-0.5 size-4 shrink-0 accent-primary"
                                />

                                <span className="text-sm leading-6 text-body">
                                    I’d like to discuss an NDA before sharing
                                    further details.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="btn-animated w-full"
                            >
                                <span className="btn-animated-content min-h-12">
                                    <MessageSquare
                                        size={16}
                                        aria-hidden="true"
                                    />

                                    <span>Send Project Brief</span>

                                    <ArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>

                            <p className="text-center text-xs leading-6 text-body">
                                Frontend preview — online submission will be
                                enabled when the API is connected.
                            </p>

                            <p
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                                className={
                                    notice
                                        ? "rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-6 text-heading"
                                        : "sr-only"
                                }
                            >
                                {notice}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}