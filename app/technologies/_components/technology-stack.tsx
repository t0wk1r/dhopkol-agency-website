"use client";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";


import { motion, useReducedMotion } from "motion/react";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiReactquery,
    SiTailwindcss,
    SiBootstrap,
    SiShadcnui,
    SiDaisyui,
    SiFramer,
    SiSwiper,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiPython,
    SiAxios,
    SiJsonwebtokens,
    SiSocketdotio,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiPrisma,
    SiMongoose,
    SiFirebase,
    SiStripe,
    SiDocker,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";

import {
    Bot,
    BarChart3,
    BrainCircuit,
    Cloud,
    CreditCard,
    GitBranch,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Technology = {
    name: string;
    description: string;
    icon: IconType | LucideIcon;
    color?: string;
};

type TechnologyCategory = {
    title: string;
    description: string;
    color: string;
    technologies: Technology[];
};

/*
|--------------------------------------------------------------------------
| Technology Data
|--------------------------------------------------------------------------
*/

const categories: TechnologyCategory[] = [
    {
        title: "Frontend",
        description:
            "Modern, performant user interfaces built with the React ecosystem.",
        color: "#2A6B9B",
        technologies: [
            {
                name: "JavaScript",
                description:
                    "The language of the web for dynamic and interactive experiences.",
                icon: SiJavascript,
                color: "#C4A900",
            },
            {
                name: "TypeScript",
                description:
                    "Typed JavaScript for maintainable code and fewer runtime errors.",
                icon: SiTypescript,
                color: "#3178C6",
            },
            {
                name: "React.js",
                description:
                    "Component-based interfaces for interactive web applications.",
                icon: SiReact,
                color: "#149ECA",
            },
            {
                name: "Next.js",
                description:
                    "React framework for server rendering and full-stack applications.",
                icon: SiNextdotjs,
            },
            {
                name: "Redux",
                description:
                    "Predictable state management for complex React applications.",
                icon: SiRedux,
                color: "#764ABC",
            },
            {
                name: "React Query",
                description:
                    "Data fetching, caching, and server-state synchronization.",
                icon: SiReactquery,
                color: "#FF4154",
            },
            {
                name: "Tailwind CSS",
                description:
                    "Utility-first styling for responsive and consistent interfaces.",
                icon: SiTailwindcss,
                color: "#06B6D4",
            },
            {
                name: "Bootstrap",
                description:
                    "Responsive components for reliable interface development.",
                icon: SiBootstrap,
                color: "#7952B3",
            },
            {
                name: "Shadcn/ui",
                description:
                    "Accessible, customizable components built on Radix UI.",
                icon: SiShadcnui,
            },
            {
                name: "DaisyUI",
                description:
                    "Themeable components for Tailwind CSS applications.",
                icon: SiDaisyui,
                color: "#1D9E83",
            },
            {
                name: "Framer Motion",
                description:
                    "Fluid animations and transitions for React interfaces.",
                icon: SiFramer,
                color: "#BB4BCE",
            },
            {
                name: "Recharts",
                description:
                    "Composable charts for dashboards and data visualization.",
                icon: BarChart3,
                color: "#22A6B3",
            },
            {
                name: "Swiper.js",
                description:
                    "Touch-friendly sliders with smooth, responsive transitions.",
                icon: SiSwiper,
                color: "#0080FF",
            },
        ],
    },
    {
        title: "Backend",
        description:
            "Reliable APIs and server-side systems built for your business.",
        color: "#398574",
        technologies: [
            {
                name: "Node.js",
                description:
                    "JavaScript runtime for scalable APIs and backend services.",
                icon: SiNodedotjs,
                color: "#5FA04E",
            },
            {
                name: "Express.js",
                description:
                    "Flexible web framework for APIs and server applications.",
                icon: SiExpress,
            },
            {
                name: "FastAPI",
                description:
                    "Python framework for fast, validated API development.",
                icon: SiFastapi,
                color: "#009688",
            },
            {
                name: "Python",
                description:
                    "Versatile language for automation, data, and backend services.",
                icon: SiPython,
                color: "#3776AB",
            },
            {
                name: "Axios",
                description:
                    "HTTP client with interceptors for API communication.",
                icon: SiAxios,
                color: "#7952B3",
            },
            {
                name: "JWT",
                description:
                    "Signed tokens for stateless authentication workflows.",
                icon: SiJsonwebtokens,
                color: "#D63AFF",
            },
            {
                name: "Socket.io",
                description:
                    "Real-time communication for chat and live updates.",
                icon: SiSocketdotio,
            },
        ],
    },
    {
        title: "Database & ORM",
        description:
            "Structured data storage and practical tools for managing application data.",
        color: "#7161AD",
        technologies: [
            {
                name: "PostgreSQL",
                description:
                    "Relational database for complex queries and reliable transactions.",
                icon: SiPostgresql,
                color: "#4169A1",
            },
            {
                name: "MySQL",
                description:
                    "Relational database for business and web applications.",
                icon: SiMysql,
                color: "#4479A1",
            },
            {
                name: "MongoDB",
                description:
                    "Document database for flexible application data models.",
                icon: SiMongodb,
                color: "#47A248",
            },
            {
                name: "Redis",
                description:
                    "In-memory storage for caching, sessions, and messaging.",
                icon: SiRedis,
                color: "#DC382D",
            },
            {
                name: "Prisma",
                description:
                    "Type-safe database queries, schema management, and migrations.",
                icon: SiPrisma,
            },
            {
                name: "Mongoose",
                description:
                    "MongoDB modeling with schemas, validation, and middleware.",
                icon: SiMongoose,
                color: "#B54545",
            },
        ],
    },
    {
        title: "Auth & Payments",
        description:
            "Authentication and payment integrations for your digital products.",
        color: "#AA713C",
        technologies: [
            {
                name: "Firebase",
                description:
                    "Managed authentication, databases, and application services.",
                icon: SiFirebase,
                color: "#DD9200",
            },
            {
                name: "NextAuth.js",
                description:
                    "Authentication and session management for Next.js applications.",
                icon: ShieldCheck,
                color: "#8B5CF6",
            },
            {
                name: "Stripe",
                description:
                    "Payment processing for checkouts and subscriptions.",
                icon: SiStripe,
                color: "#635BFF",
            },
            {
                name: "SSLCommerz",
                description:
                    "Local payment gateway integration for online businesses.",
                icon: CreditCard,
                color: "#2A6B9B",
            },
        ],
    },
    {
        title: "DevOps & Cloud",
        description:
            "Tools and infrastructure for dependable development and delivery.",
        color: "#5089A3",
        technologies: [
            {
                name: "Docker",
                description:
                    "Containerized environments for development and deployment.",
                icon: SiDocker,
                color: "#2496ED",
            },
            {
                name: "CI/CD Pipelines",
                description:
                    "Automated checks, builds, and deployment workflows.",
                icon: GitBranch,
                color: "#398574",
            },
            {
                name: "Git",
                description:
                    "Version control for tracking changes and collaborating.",
                icon: SiGit,
                color: "#F05032",
            },
            {
                name: "GitHub",
                description:
                    "Code hosting, pull requests, and team collaboration.",
                icon: SiGithub,
            },
            {
                name: "Postman",
                description:
                    "API testing, documentation, and development workflows.",
                icon: SiPostman,
                color: "#FF6C37",
            },
            {
                name: "AWS",
                description:
                    "Cloud services for compute, storage, and application hosting.",
                icon: Cloud,
                color: "#E99400",
            },
        ],
    },
    {
        title: "AI & Machine Learning",
        description:
            "AI integrations for intelligent features and useful automation.",
        color: "#398574",
        technologies: [
            {
                name: "OpenAI",
                description:
                    "AI integrations for chat, content, and automated workflows.",
                icon: Bot,
            },
            {
                name: "LangChain",
                description:
                    "Tools for building LLM workflows and RAG applications.",
                icon: BrainCircuit,
                color: "#398574",
            },
            {
                name: "Vector DBs",
                description:
                    "Vector storage for semantic search and similarity matching.",
                icon: SiFastapi,
                color: "#009688",
            },
        ],
    },
];

/*
|--------------------------------------------------------------------------
| Technology Stack
|--------------------------------------------------------------------------
*/

export default function TechnologyStack() {
    const reduceMotion = useReducedMotion();

    return (
    <>
        <section className="bg-white py-20 transition-colors duration-300 lg:py-28 dark:bg-[#060E16]">
            <div className="mx-auto max-w-7xl space-y-16 px-6 lg:space-y-20 lg:px-10">
                {categories.map((category) => (
                    <div
                        key={category.title}
                        style={
                            {
                                "--category-color": category.color,
                            } as CSSProperties
                        }
                    >
                        {/* Category header */}
                        <motion.div
                            initial={
                                reduceMotion
                                    ? false
                                    : { opacity: 0, y: 20 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.5,
                                ease: "easeOut",
                            }}
                            className="mb-8 flex items-center gap-4"
                        >
                            <div>
                                <h2
                                    className="mb-1 text-sm font-bold uppercase tracking-[0.12em]"
                                    style={{ color: category.color }}
                                >
                                    {category.title}
                                </h2>

                                <p className="max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                    {category.description}
                                </p>
                            </div>

                            <div
                                aria-hidden="true"
                                className="ml-4 hidden h-px flex-1 bg-gray-100 md:block dark:bg-white/10"
                            />

                            <span
                                aria-label={`${category.technologies.length} technologies`}
                                className="hidden size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white md:flex"
                                style={{
                                    backgroundColor: category.color,
                                }}
                            >
                                {category.technologies.length}
                            </span>
                        </motion.div>

                        {/* Technology cards */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {category.technologies.map(
                                (technology, index) => {
                                    const Icon = technology.icon;

                                    return (
                                        <motion.div
                                            key={technology.name}
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : {
                                                          opacity: 0,
                                                          y: 24,
                                                      }
                                            }
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            transition={{
                                                duration: reduceMotion
                                                    ? 0
                                                    : 0.45,
                                                delay: reduceMotion
                                                    ? 0
                                                    : (index % 4) * 0.06,
                                                ease: "easeOut",
                                            }}
                                            className="h-full"
                                        >
                                            <div
                                                className="group relative h-full overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/80 motion-safe:hover:-translate-y-0.5 dark:bg-[#0B1621] dark:hover:shadow-black/20"
                                                style={{
                                                    borderColor: `${category.color}26`,
                                                }}
                                            >
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${category.color}, transparent)`,
                                                    }}
                                                />

                                                <div className="mb-2.5 flex items-center gap-3">
                                                    <div
                                                        className="flex size-9 shrink-0 items-center justify-center rounded-xl"
                                                        style={{
                                                            backgroundColor: `${category.color}14`,
                                                        }}
                                                    >
                                                        <Icon
                                                            size={18}
                                                            aria-hidden="true"
                                                            className="text-gray-900 dark:text-gray-100"
                                                            style={
                                                                technology.color
                                                                    ? {
                                                                          color: technology.color,
                                                                      }
                                                                    : undefined
                                                            }
                                                        />
                                                    </div>

                                                    <h3 className="text-sm font-bold leading-tight text-gray-900 dark:text-white">
                                                        {technology.name}
                                                    </h3>
                                                </div>

                                                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                                    {technology.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Technology counts */}
        <section className="border-y border-gray-100 bg-[#F8FAFC] py-16 transition-colors duration-300 dark:border-white/10 dark:bg-[#0B1621]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <motion.div
                    initial={
                        reduceMotion
                            ? false
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        ease: "easeOut",
                    }}
                    className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6"
                >
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="flex flex-col items-center gap-1"
                        >
                            <span className="bg-gradient-to-r from-[#2A6B9B] to-[#398574] bg-clip-text text-3xl font-black text-transparent dark:to-[#71BBAA]">
                                {category.technologies.length}
                            </span>

                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {category.title}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    </>
);
}