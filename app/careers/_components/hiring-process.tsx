import ScrollReveal from "@/components/shared/scroll-reveal";

/*
|--------------------------------------------------------------------------
| Hiring Steps
|--------------------------------------------------------------------------
*/

const hiringSteps = [
    {
        title: "Application Review",
        description:
            "We review your resume, portfolio, and relevant experience.",
    },
    {
        title: "Introductory Call",
        description:
            "A conversation about your interests, experience, and expectations.",
    },
    {
        title: "Skills Assessment",
        description:
            "A practical discussion or task relevant to the role.",
    },
    {
        title: "Team Conversation",
        description:
            "Meet the team and discuss your approach to real project challenges.",
    },
    {
        title: "Offer",
        description:
            "Discuss responsibilities, compensation, and the next steps.",
    },
];

/*
|--------------------------------------------------------------------------
| Hiring Process
|--------------------------------------------------------------------------
*/

export default function HiringProcess() {
    return (
        <section className="overflow-hidden bg-[#060E16] py-20 lg:py-24">
            <ScrollReveal className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div
                    data-reveal
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#71BBAA]">
                        Hiring Process
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Simple, transparent,{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#71BBAA] bg-clip-text text-transparent">
                            and respectful
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
                        Get to know the team, understand the role, and show
                        us how you approach your work.
                    </p>
                </div>

                {/* Process Steps */}
                <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {hiringSteps.map((step, index) => (
                        <li
                            key={step.title}
                            data-reveal
                            data-reveal-delay={index * 70}
                            className="rounded-xl border border-white/20 bg-white/[0.04] px-4 py-6 text-center transition-colors hover:border-[#71BBAA]/50 hover:bg-white/[0.06]"
                        >
                            <span
                                aria-hidden="true"
                                className="text-2xl font-bold text-[#71BBAA]"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="mt-4 text-sm font-semibold text-white">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-xs leading-relaxed text-gray-400">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </ScrollReveal>
        </section>
    );
}