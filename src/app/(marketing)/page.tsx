import { BenefitsSection } from "@/components/layout/sections/benefits"
import { CommunitySection } from "@/components/layout/sections/community"
import { ContactSection } from "@/components/layout/sections/contact"
import { FAQSection } from "@/components/layout/sections/faq"
import { FeaturesSection } from "@/components/layout/sections/features"
import { HeroSection } from "@/components/layout/sections/hero"
import { PricingSection } from "@/components/layout/sections/pricing"
import { ServicesSection } from "@/components/layout/sections/services"
import { TeamSection } from "@/components/layout/sections/team"
import { TestimonialSection } from "@/components/layout/sections/testimonial"
import LogoCloud from "@/components/logo-cloud"
import { site } from "@/config/site"

export const metadata = {
    title: site.name,
    description: site.description,
    openGraph: {
        type: "website",
        url: site.url,
        title: site.name,
        description: site.description,
        images: [
            {
                url: site.ogImage,
                width: 1200,
                height: 750,
                alt: site.name
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: site.url,
        title: site.name,
        description: site.description,
        images: [
            {
                url: site.ogImage,
                width: 1200,
                height: 750,
                alt: site.name
            }
        ]
    }
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <LogoCloud />
            <BenefitsSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <TeamSection />
            <CommunitySection />
            <PricingSection />
            <ContactSection />
            <FAQSection />
        </>
    )
}
