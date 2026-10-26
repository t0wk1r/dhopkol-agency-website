import {
    BookOpen,
    Code2,
    Heart,
    Monitor,
    TrendingUp,
    Users,
} from "lucide-react";

import ScrollReveal from "@/components/shared/scroll-reveal";

/*
|--------------------------------------------------------------------------
| Benefits
|--------------------------------------------------------------------------
*/

const benefits = [
    {
        icon: Monitor,
        title: "Flexible Collaboration",
        description:
            "Clear communication, thoughtful planning, and space to do your best work.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description:
            "Develop your skills through practical challenges, feedback, and shared experience.",
    },
    {
        icon: Code2,
        title: "Modern Technology",
        description:
            "Build useful products with modern frameworks and reliable development practices.",
    },
    {
        icon: Heart,
        title: "People First",
        description:
            "A respectful environment where your ideas, time, and contribution matter.",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description:
            "Explore new ideas, share knowledge, and improve your craft with the team.",
    },
    {
        icon: Users,
        title: "Team Culture",
        description:
            "Work with people who value collaboration, ownership, and attention to detail.",
    },
];

/*
|--------------------------------------------------------------------------
| Careers Benefits
|--------------------------------------------------------------------------
*/

export default function CareersBenefits() {
    return (
        <section className="bg-white py-20 dark:bg-[#0B1621] lg:py-24">
            <ScrollReveal className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div
                    data-reveal
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A6B9B] dark:text-[#71BBAA]">
                        Why Dhopkol
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Built for people who{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#71BBAA] bg-clip-text text-transparent">
                            love their craft
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        Great work starts with people who have the support,
                        trust, and space to grow.
                    </p>
                </div>

                {/* Benefit Cards */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;

                        return (
                            <div
                                key={benefit.title}
                                data-reveal
                                data-reveal-delay={index * 60}
                                className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#71BBAA]/40 dark:border-white/10 dark:bg-white/[0.02]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2A6B9B]/10 text-[#2A6B9B] dark:bg-[#71BBAA]/10 dark:text-[#71BBAA]">
                                    <Icon
                                        size={19}
                                        strokeWidth={1.7}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="mt-5 text-sm font-bold text-gray-900 dark:text-white">
                                    {benefit.title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </ScrollReveal>
        </section>
    );
}