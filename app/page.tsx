import HeroSection from "@/components/home/hero-section";
import ProcessSection from "@/components/home/process-section";
import ProjectsSection from "@/components/home/projects-section";
import ServicesSection from "@/components/home/services-section";
import TechnologySection from "@/components/home/technology-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import BlogSection from "@/components/home/blog-section";
import FaqSection from "@/components/home/faq-section";
import ContactSection from "@/components/home/contact-section";

import ScrollReveal from "@/components/shared/scroll-reveal";

export default function HomePage() {
    return (
        <main>
            <HeroSection />

            <ScrollReveal>
                <ServicesSection />
                <TechnologySection />
                <ProcessSection />
                <ProjectsSection />
                <WhyChooseSection />
                <TestimonialsSection />
                <BlogSection />
                <FaqSection />
                <ContactSection />
            </ScrollReveal>
        </main>
    );
}