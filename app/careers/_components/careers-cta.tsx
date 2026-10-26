import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/shared/scroll-reveal";

/*
|--------------------------------------------------------------------------
| Careers CTA
|--------------------------------------------------------------------------
*/

export default function CareersCta() {
    return (
        <section className="relative overflow-hidden bg-[#060E16] pb-20 pt-10 lg:pb-24 lg:pt-12">
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A6B9B]/10 blur-[100px]"
            />

            <ScrollReveal className="relative mx-auto max-w-3xl px-6 text-center">
                <div data-reveal>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Don’t see your role?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
                        Tell us about yourself, your experience, and the kind
                        of work you’d love to do at Dhopkol.
                    </p>

                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="/contact"
                            className="btn-animated agency-hero-cta"
                        >
                            <span className="btn-animated-content min-h-11 gap-2 px-6">
                                <span>Introduce Yourself</span>

                                <ArrowUpRight
                                    size={16}
                                    aria-hidden="true"
                                />
                            </span>
                        </Link>

                        <a
                            href="#open-positions"
                            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                        >
                            View Open Positions
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}