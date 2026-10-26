import PageBanner from "@/components/shared/page-banner";

import ProjectGrid from "./_components/project-grid";

export default function ProjectsPage() {
    return (
        <>
            <PageBanner
                badge="Our Work"
                title="Projects that deliver"
                highlight="real business outcomes."
                description="Every project starts with a business goal. Explore our work across websites, custom software, and digital solutions."
                buttons={[
                    {
                        text: "Start Your Project",
                        href: "/contact",
                        variant: "primary",
                    },
                ]}
            />

            <ProjectGrid />
        </>
    );
}