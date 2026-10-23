import {
    Headset,
    Layers3,
    MessagesSquare,
    ShieldCheck,
    TrendingUp,
    Zap,
} from "lucide-react";

const reasons = [
    {
        title: "Clear communication",
        badge: "Stay connected",
        description:
            "Discuss your requirements directly, get clear answers, and stay involved in the decisions that shape your project.",
        icon: MessagesSquare,
    },
    {
        title: "Scalable architecture",
        badge: "Built to grow",
        description:
            "A clear technical structure makes your software easier to maintain, extend, and adapt as your business needs change.",
        icon: Layers3,
    },
    {
        title: "Performance-focused",
        badge: "Speed matters",
        description:
            "We focus on responsive interfaces, efficient data access, and practical optimizations that improve everyday use.",
        icon: Zap,
    },
    {
        title: "Security by design",
        badge: "Protection first",
        description:
            "Access controls, input validation, and careful handling of sensitive data are considered throughout development.",
        icon: ShieldCheck,
    },
    {
        title: "Long-term partnership",
        badge: "Beyond launch",
        description:
            "Plan ongoing maintenance, improvements, and technical assistance with support options suited to your project.",
        icon: Headset,
    },
    {
        title: "Full transparency",
        badge: "Visible progress",
        description:
            "An agreed scope, regular progress reviews, and clear discussions about changes help you understand where your project stands.",
        icon: TrendingUp,
    },
];

export default function WhyChooseSection() {
    return (
        <section
            aria-labelledby="why-choose-title"
            className="section-padding relative isolate overflow-hidden bg-background"
        >
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -right-40 -z-10 size-[500px] rounded-full bg-primary/5 blur-[100px]"
            />

            <div className="site-container">
                {/* Heading */}
                <div className="mb-12 grid items-center gap-6 lg:mb-16 lg:grid-cols-2 lg:gap-16">
                    <div data-reveal>
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                            Why Dhopkol
                        </p>

                        <h2
                            id="why-choose-title"
                            className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                        >
                            Built for teams that
                            <br />

                            <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                won&apos;t compromise
                            </span>
                        </h2>
                    </div>

                    <p
                        data-reveal
                        data-reveal-delay="120"
                        className="max-w-xl text-base leading-8 text-body sm:text-lg"
                    >
                        Good software should solve today&apos;s problems and
                        support tomorrow&apos;s plans. At Dhopkol, we bring
                        thoughtful engineering, clear communication, and
                        practical support to every project.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;

                        return (
                            <article
                                key={reason.title}
                                data-reveal
                                data-reveal-delay={(index % 3) * 100}
                                className="group rounded-2xl border border-line bg-background p-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-primary/25 hover:bg-surface hover:shadow-[0_12px_32px_-20px_rgba(42,107,155,0.3)] dark:hover:shadow-none"
                            >
                                <div className="mb-5 flex items-start justify-between gap-3">
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15 dark:text-[#86b6cb]">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="rounded-lg bg-[#71bbaa]/10 px-2.5 py-1 text-[10px] leading-5 font-semibold text-[#0f766e] dark:text-[#8bc9ba]">
                                        {reason.badge}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-heading">
                                    {reason.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-body">
                                    {reason.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}