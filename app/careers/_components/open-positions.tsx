import Link from "next/link";

import {
    ArrowUpRight,
    BriefcaseBusiness,
    Clock3,
    MapPin,
} from "lucide-react";

import ScrollReveal from "@/components/shared/scroll-reveal";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Position = {
    slug: string;
    title: string;
    location: string;
    type: string;
    department: string;
    level: string;
};

/*
|--------------------------------------------------------------------------
| Demo Positions — নিজের vacancy information বসাবে
|--------------------------------------------------------------------------
*/

const positions: Position[] = [
    {
        slug: "full-stack-developer",
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        department: "Engineering",
        level: "Mid-level",
    },
];

/*
|--------------------------------------------------------------------------
| Open Positions
|--------------------------------------------------------------------------
*/

export default function OpenPositions() {
    return (
        <section
            id="open-positions"
            className="scroll-mt-24 bg-[#F7F9FB] py-20 dark:bg-[#08121C] lg:py-24"
        >
            <ScrollReveal className="mx-auto max-w-6xl px-6">
                {/* Section Heading */}
                <div data-reveal className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A6B9B] dark:text-[#71BBAA]">
                        Open Positions
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Find your next{" "}
                        <span className="bg-gradient-to-r from-[#2A6B9B] to-[#71BBAA] bg-clip-text text-transparent">
                            opportunity
                        </span>
                    </h2>
                </div>

                {/* Position List */}
                <div className="mt-12 space-y-4">
                    {positions.length > 0 ? (
                        positions.map((position, index) => (
                            <div
                                key={position.slug}
                                data-reveal
                                data-reveal-delay={index * 60}
                                className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#71BBAA]/40 dark:border-white/10 dark:bg-[#0B1621] sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                        {position.title}
                                    </h3>

                                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1.5">
                                            <MapPin
                                                size={13}
                                                aria-hidden="true"
                                            />

                                            {position.location}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5">
                                            <Clock3
                                                size={13}
                                                aria-hidden="true"
                                            />

                                            {position.type}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5">
                                            <BriefcaseBusiness
                                                size={13}
                                                aria-hidden="true"
                                            />

                                            {position.department}
                                        </span>

                                        <span className="rounded-full bg-[#71BBAA]/10 px-2.5 py-1 text-[11px] font-medium text-[#398574] dark:text-[#71BBAA]">
                                            {position.level}
                                        </span>
                                    </div>
                                </div>

                                <Link
                                    href={{
                                        pathname: "/contact",
                                        query: {
                                            role: position.title,
                                        },
                                    }}
                                    aria-label={`Enquire about ${position.title}`}
                                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2A6B9B] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#235B85]"
                                >
                                    Enquire About Role

                                    <ArrowUpRight
                                        size={14}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div
                            data-reveal
                            className="rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center dark:border-white/10 dark:bg-[#0B1621]"
                        >
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                No open positions right now
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                Interested in working with us? Get in touch
                                and share your experience and portfolio.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2A6B9B] dark:text-[#71BBAA]"
                            >
                                Get in Touch

                                <ArrowUpRight
                                    size={15}
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </ScrollReveal>
        </section>
    );
}