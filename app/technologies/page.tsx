import PageBanner from "@/components/shared/page-banner";

import TechnologyStack from "./_components/technology-stack";

export default function TechnologiesPage() {
    return (
        <>
            <PageBanner
                badge="Technology Stack"
                title="Built with technologies"
                highlight="that scale."
                description="We carefully select every tool in our stack based on performance, developer experience, and long-term maintainability."
                buttons={[
                    {
                        text: "Start a Project",
                        href: "/contact",
                        variant: "primary",
                    },
                    {
                        text: "Explore Our Work",
                        href: "/projects",
                        variant: "secondary",
                    },
                ]}
            />

            <TechnologyStack />
        </>
    );
}