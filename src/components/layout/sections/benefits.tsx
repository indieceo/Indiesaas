import type { icons } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

interface BenefitsProps {
    icon: string
    title: string
    description: string
}

const benefitList: BenefitsProps[] = [
    {
        icon: "Rocket",
        title: "Launch Faster",
        description:
            "Skip weeks of setup and boilerplate. Get a production-ready foundation with authentication, UI, and core features already built."
    },
    {
        icon: "Code",
        title: "Modern Stack",
        description:
            "Built with Next.js, TypeScript, and industry-leading tools. Your startup deserves a tech stack that scales with your growth."
    },
    {
        icon: "Palette",
        title: "Beautiful Design",
        description:
            "Polished UI components from shadcn/ui give your SaaS a professional look from day one. Fully customizable to match your brand."
    },
    {
        icon: "Shield",
        title: "Production Ready",
        description:
            "Enterprise-grade authentication, type-safe database queries, and file upload capabilities. Everything you need to go live confidently."
    }
]

export const BenefitsSection = () => {
    return (
        <section id="benefits" className="container mx-auto px-4 py-16 sm:py-20">
            <div className="grid place-items-center lg:grid-cols-2 lg:gap-24">
                <div>
                    <h2 className="mb-2 text-lg text-primary tracking-wider">
                        Benefits
                    </h2>

                    <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                        Why Choose This Starter
                    </h2>
                    <p className="mb-8 text-muted-foreground text-xl">
                        Stop wasting time on infrastructure. Get a battle-tested foundation that lets you focus on what matters - building your unique features and growing your business.
                    </p>
                </div>

                <div className="grid w-full gap-4 lg:grid-cols-2">
                    {benefitList.map(({ icon, title, description }, index) => (
                        <Card
                            key={title}
                            className="group/number transition-all delay-75 hover:bg-sidebar"
                        >
                            <CardHeader>
                                <div className="flex justify-between">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={32}
                                        color="var(--primary)"
                                        className="mb-6 text-primary"
                                    />
                                    <span className="font-medium text-5xl text-muted-foreground/15 transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                        0{index + 1}
                                    </span>
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground">
                                {description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
