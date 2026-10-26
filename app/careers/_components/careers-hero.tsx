import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/shared/scroll-reveal";

/*
|--------------------------------------------------------------------------
| Careers Hero
|--------------------------------------------------------------------------
*/

export default function CareersHero() {
    return (
        <section className="relative overflow-hidden bg-[#060E16] pb-20 pt-32 lg:pb-24 lg:pt-40">
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-80 w-full max-w-2xl -translate-x-1/2 rounded-full bg-[#2A6B9B]/10 blur-[100px]"
            />

            <ScrollReveal className="relative mx-auto max-w-4xl px-6 text-center">
                <div data-reveal>
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#71BBAA]/15 bg-[#71BBAA]/5 px-4 py-1.5 text-xs font-medium text-[#71BBAA]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#71BBAA]" />

                        Join Our Team
                    </span>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Build your career at

                        <span className="block bg-gradient-to-r from-[#2A6B9B] to-[#71BBAA] bg-clip-text text-transparent">
                            Dhopkol.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                        We’re looking for curious developers, designers, and
                        problem solvers who care about building useful products
                        and doing thoughtful work.
                    </p>

                    {/* CTA */}
                    <div className="mt-9 flex justify-center">
                        <a
                            href="#open-positions"
                            className="btn-animated agency-hero-cta"
                        >
                            <span className="btn-animated-content min-h-12 gap-2 px-6">
                                <span>View Open Positions</span>

                                <ArrowUpRight
                                    size={16}
                                    aria-hidden="true"
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}