import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Demo Client One",
        role: "Founder, Demo Company",
        initials: "C1",
        rating: 5,
        quote:
            "The team understood our requirements and turned them into a clear, easy-to-use website. Communication was straightforward throughout the project, and the regular updates helped us stay involved.",
        avatar: "bg-[#2a6b9b]",
    },
    {
        id: 2,
        name: "Demo Client Two",
        role: "Product Lead, Demo Company",
        initials: "C2",
        rating: 5,
        quote:
            "We appreciated the attention to detail and the practical suggestions. The final interface feels consistent across desktop and mobile.",
        avatar: "bg-[#5089a3]",
    },
    {
        id: 3,
        name: "Demo Client Three",
        role: "Business Owner, Demo Company",
        initials: "C3",
        rating: 5,
        quote:
            "Our daily workflow was becoming difficult to manage with separate tools. The custom application brought everything into one place and made the process much easier for our team to follow.",
        avatar: "bg-[#347f6e]",
    },
    {
        id: 4,
        name: "Demo Client Four",
        role: "Engineering Lead, Demo Company",
        initials: "C4",
        rating: 5,
        quote:
            "The code was organized, and the handover was clear. Our internal team could understand the structure and continue working on the application.",
        avatar: "bg-[#2a6b9b]",
    },
    {
        id: 5,
        name: "Demo Client Five",
        role: "Operations Lead, Demo Company",
        initials: "C5",
        rating: 5,
        quote:
            "They listened carefully, explained the options, and helped us prioritize the features that mattered most. It felt like a collaborative process rather than simply handing over a list of tasks.",
        avatar: "bg-[#5089a3]",
    },
    {
        id: 6,
        name: "Demo Client Six",
        role: "Director, Demo Company",
        initials: "C6",
        rating: 5,
        quote:
            "From the first discussion to launch, the process was clear. We always knew what was being worked on and what feedback was needed from us.",
        avatar: "bg-[#347f6e]",
    },
];

const stats = [
    { value: "—", label: "Projects completed" },
    { value: "—", label: "Companies served" },
    { value: "—", label: "Average rating" },
    { value: "—", label: "Client retention" },
];

export default function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-title"
            className="section-padding bg-background"
        >
            <div className="site-container">
                {/* Heading */}
                <div
                    data-reveal
                    className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase dark:text-[#86b6cb]">
                        Client Testimonials
                    </p>

                    <h2
                        id="testimonials-title"
                        className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
                    >
                        Trusted by teams
                        <br />

                        <span className="bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                            that demand excellence
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-body sm:text-lg">
                        Thoughtful collaboration. Practical solutions.
                        Experiences worth sharing.
                    </p>

                    <span className="mt-4 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-[10px] font-medium text-body">
                        Demo testimonials — sample content
                    </span>
                </div>

                {/* Masonry cards */}
                <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="mb-5 break-inside-avoid"
                        >
                            <figure
                                data-reveal
                                data-reveal-delay={(index % 2) * 100}
                                className="group rounded-2xl border border-line bg-background p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_16px_40px_-24px_rgba(42,107,155,0.35)] dark:hover:shadow-none"
                            >
                                {/* Rating */}
                                <div className="mb-4 flex items-center justify-between">
                                    <div
                                        role="img"
                                        aria-label={`${testimonial.rating} out of 5 stars`}
                                        className="flex gap-0.5"
                                    >
                                        {Array.from(
                                            { length: 5 },
                                            (_, starIndex) => (
                                                <Star
                                                    key={starIndex}
                                                    size={14}
                                                    aria-hidden="true"
                                                    className={
                                                        starIndex <
                                                        testimonial.rating
                                                            ? "fill-amber-400 text-amber-400"
                                                            : "fill-transparent text-body/30"
                                                    }
                                                />
                                            )
                                        )}
                                    </div>

                                    <Quote
                                        size={20}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                        className="text-primary/20 transition-colors group-hover:text-primary/40 dark:text-[#71bbaa]/25"
                                    />
                                </div>

                                {/* Review */}
                                <blockquote>
                                    <p className="text-sm leading-7 text-body">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </blockquote>

                                {/* Client */}
                                <figcaption className="mt-5 flex items-center gap-3">
                                    <span
                                        aria-hidden="true"
                                        className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${testimonial.avatar}`}
                                    >
                                        {testimonial.initials}
                                    </span>

                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-heading">
                                            {testimonial.name}
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-body">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <dl
                    data-reveal
                    className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 text-center sm:mt-14 sm:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center"
                        >
                            <dt className="order-2 mt-2 text-xs text-body sm:text-sm">
                                {stat.label}
                            </dt>

                            <dd className="order-1 bg-linear-to-r from-[#2a6b9b] to-[#0f766e] bg-clip-text text-2xl font-bold text-transparent dark:from-[#72acd2] dark:to-[#71bbaa]">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}