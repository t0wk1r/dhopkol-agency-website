/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

export type Project = {
    slug: string;
    title: string;
    category: string;
    industry: string;
    description: string;
    image?: string;
    liveUrl?: string;
    highlights: string[];
    technologies: string[];
    problem: string;
    solution: string;
    screenshots: {
        src: string;
        caption: string;
    }[];
};

/*
|--------------------------------------------------------------------------
| Demo Projects
|--------------------------------------------------------------------------
*/

export const projects: Project[] = [
    {
        slug: "business-website",
        title: "Business Website",
        category: "Business Website",
        industry: "Business & Services",
        description:
            "A responsive company website that brings service information, company details, and customer enquiries into one clear digital experience.",

        image: "https://placehold.co/1600x900/0B1621/71BBAA/png?text=Business+Website",

        // liveUrl: "https://your-project.com",

        highlights: [
            "Responsive Design",
            "Dedicated Service Pages",
            "Customer Enquiries",
            "Content Management",
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "MySQL",
        ],

        problem:
            "The business needed a clear online presence where customers could understand its services and easily submit enquiries.\n\nService information needed to be organized and accessible across mobile and desktop devices, with straightforward navigation and a consistent visual identity.",

        solution:
            "We designed a responsive website with dedicated service pages, a clear company introduction, and a simple contact enquiry flow.\n\nThe layout helps visitors find relevant information quickly, while the content structure gives the business room to introduce new services and expand its website.",

        screenshots: [
            {
                src: "https://placehold.co/1600x800/0B1621/71BBAA/png?text=Business+Homepage",
                caption:
                    "Homepage — company introduction and featured services",
            },
            {
                src: "https://placehold.co/1000x750/2A6B9B/FFFFFF/png?text=Services+Page",
                caption:
                    "Services page — organized service information",
            },
            {
                src: "https://placehold.co/1000x750/398574/FFFFFF/png?text=Contact+Page",
                caption:
                    "Contact page — customer enquiry form",
            },
        ],
    },
    {
        slug: "management-platform",
        title: "Management Platform",
        category: "SaaS",
        industry: "Business Operations",
        description:
            "A central workspace for managing clients, tracking projects, recording payments, and organizing everyday business operations.",

        image: "https://placehold.co/1600x900/0B1621/71BBAA/png?text=Management+Platform",

        // liveUrl: "https://your-project.com",

        highlights: [
            "Client Management",
            "Project Tracking",
            "Payment Records",
            "Business Reports",
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "MySQL",
        ],

        problem:
            "Client information, project updates, and payment records were scattered across separate tools, making it difficult to maintain a clear overview.\n\nThe business needed a single place to review ongoing work, check payment history, and keep its records organized.",

        solution:
            "We brought the core workflows into one dashboard with organized client records, project tracking, payment history, and reporting.\n\nThe interface connects related information so users can move between clients, projects, and payments without repeatedly searching through separate records.",

        screenshots: [
            {
                src: "https://placehold.co/1600x800/0B1621/71BBAA/png?text=Management+Dashboard",
                caption:
                    "Dashboard — overview of projects and business activity",
            },
            {
                src: "https://placehold.co/1000x750/2A6B9B/FFFFFF/png?text=Project+Management",
                caption:
                    "Projects — project records and progress overview",
            },
            {
                src: "https://placehold.co/1000x750/398574/FFFFFF/png?text=Payment+Records",
                caption:
                    "Payments — transaction history and payment records",
            },
        ],
    },
    {
        slug: "online-store",
        title: "Online Store",
        category: "E-commerce",
        industry: "Retail",
        description:
            "An online storefront with product browsing, category navigation, and an admin dashboard for managing products and customer orders.",

        image: "https://placehold.co/1600x900/0B1621/71BBAA/png?text=Online+Store",

        // liveUrl: "https://your-project.com",

        highlights: [
            "Product Catalog",
            "Category Navigation",
            "Order Management",
            "Admin Dashboard",
        ],

        technologies: [
            "React",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
        ],

        problem:
            "The retailer needed an organized way to present products online and manage incoming customer orders.\n\nCustomers needed clear product information and simple navigation, while the business needed tools to maintain its catalog and review orders.",

        solution:
            "We created a responsive storefront with category navigation, detailed product pages, and an admin area for maintaining the catalog and handling orders.\n\nThe shopping interface prioritizes product discovery, while the management tools keep product and order information accessible to the business.",

        screenshots: [
            {
                src: "https://placehold.co/1600x800/0B1621/71BBAA/png?text=Store+Homepage",
                caption:
                    "Homepage — featured products and collections",
            },
            {
                src: "https://placehold.co/1000x750/2A6B9B/FFFFFF/png?text=Product+Listing",
                caption:
                    "Product listing — category navigation and product browsing",
            },
            {
                src: "https://placehold.co/1000x750/398574/FFFFFF/png?text=Product+Details",
                caption:
                    "Product details — images and purchase information",
            },
        ],
    },
];