import Link from "next/link";

import { ArrowUpRight, Play } from "lucide-react";

type BannerButton = {
    text: string;
    href: string;
    variant?: "primary" | "secondary";
};

type PageBannerProps = {
    badge?: string;
    title: string;
    highlight?: string;
    description?: string;
    buttons?: BannerButton[];
};

export default function PageBanner({
    badge,
    title,
    highlight,
    description,
    buttons = [],
}: PageBannerProps) {
    return (
        <section className="relative overflow-hidden bg-slate-50 pb-20 pt-32 transition-colors duration-300 dark:bg-[#060E16]">
            {/* Background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2A6B9B]/10 blur-[120px] dark:bg-[#2A6B9B]/[0.12]" />

                <div className="absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-[#71BBAA]/10 blur-[100px] dark:bg-[#71BBAA]/[0.06]" />

                <div
                    className="absolute inset-0 text-slate-900 opacity-[0.04] dark:text-white dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                currentColor 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                currentColor 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
                <div className="mx-auto max-w-3xl">
                    {badge && (
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2A6B9B]/20 bg-[#2A6B9B]/[0.06] px-4 py-1.5 text-sm font-medium text-[#20557e] dark:border-[#2A6B9B]/30 dark:bg-[#2A6B9B]/10 dark:text-[#71BBAA]">
                            <span
                                aria-hidden="true"
                                className="h-1.5 w-1.5 rounded-full bg-current motion-safe:animate-pulse"
                            />

                            {badge}
                        </div>
                    )}

                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                        {title}

                        {highlight && (
                            <>
                                <br />

                                <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-transparent dark:to-[#71BBAA]">
                                    {highlight}
                                </span>
                            </>
                        )}
                    </h1>

                    {description && (
                        <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl dark:text-gray-400">
                            {description}
                        </p>
                    )}

                    {buttons.length > 0 && (
    <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        {buttons.slice(0, 2).map((button, index) => {
            const variant =
                button.variant ??
                (index === 0 ? "primary" : "secondary");

            return variant === "primary" ? (
                <Link
                    key={`${button.href}-${index}`}
                    href={button.href}
                    className="btn-animated agency-hero-cta"
                >
                    <span className="btn-animated-content min-h-11 px-6">
                        <span>{button.text}</span>

                        <ArrowUpRight
                            size={16}
                            aria-hidden="true"
                            className="text-[#71bbaa]"
                        />
                    </span>
                </Link>
            ) : (
                <Link
                    key={`${button.href}-${index}`}
                    href={button.href}
                    className="agency-hero-secondary-button group"
                >
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 dark:bg-white/10">
                        <Play
                            size={12}
                            aria-hidden="true"
                            className="ml-0.5 text-accent"
                        />
                    </span>

                    {button.text}
                </Link>
            );
        })}
    </div>
)}
                </div>
            </div>
        </section>
    );
}