import PageBanner from "@/components/shared/page-banner";

import MissionVision from "./_components/mission-vision";
import OurStory from "./_components/our-story";
import TeamSection from "./_components/team-section";
import OurJourney from "./_components/our-journey";
import OurValues from "./_components/our-values";
import AboutCta from "./_components/about-cta";

export default function AboutPage() {
    return (
        <>
            <PageBanner
                badge="About dhopkol"
                title="Technology that moves"
                highlight="your business forward."
                description="We build software, deliver practical IT solutions, and provide dependable support to help businesses work better and grow."
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

            <MissionVision />

            <OurStory />

            <TeamSection />

            <OurJourney />

            <OurValues />

            <AboutCta />
        </>
    );
}