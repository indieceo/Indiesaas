import {
    RiShieldKeyholeLine,
    RiDashboard3Line,
    RiUploadCloud2Line,
    RiDatabase2Line,
    RiFireFill,
    RiStackLine
} from "@remixicon/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesProps {
    icon: React.ReactNode
    title: string
    description: string
}

const featureList: FeaturesProps[] = [
    {
        icon: <RiShieldKeyholeLine size={24} className="text-primary" />,
        title: "Better Auth",
        description:
            "Complete authentication with social logins, email verification, and session management built-in."
    },
    {
        icon: <RiDashboard3Line size={24} className="text-primary" />,
        title: "Modern UI Kit",
        description:
            "Beautiful, accessible components powered by shadcn/ui. Dark mode included."
    },
    {
        icon: <RiUploadCloud2Line size={24} className="text-primary" />,
        title: "File Uploads",
        description:
            "Secure file upload system with UploadThing integration, perfect for user avatars and content."
    },
    {
        icon: <RiDatabase2Line size={24} className="text-primary" />,
        title: "Type-Safe DB",
        description:
            "PostgreSQL database with Drizzle ORM for type-safe queries and easy schema management."
    },
    {
        icon: <RiFireFill size={24} className="text-primary" />,
        title: "Performance",
        description:
            "Built on Next.js for lightning-fast page loads, SEO optimization, and the best developer experience."
    },
    {
        icon: <RiStackLine size={24} className="text-primary" />,
        title: "Monorepo Ready",
        description:
            "Turborepo setup for clean code organization and efficient builds as your project grows."
    }
]

export const FeaturesSection = () => {
    return (
        <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
            <h2 className="mb-2 text-center text-lg text-primary tracking-wider">
                Features
            </h2>

            <h2 className="mb-4 text-center font-bold text-3xl md:text-4xl">
                Everything You Need
            </h2>

            <h3 className="mx-auto mb-8 text-center text-muted-foreground text-xl md:w-1/2">
                Launch your SaaS faster with our carefully chosen tech stack and pre-built features. Focus on your unique value proposition, not boilerplate.
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featureList.map(({ icon, title, description }) => (
                    <div key={title}>
                        <Card className="h-full border-0 bg-background shadow-none">
                            <CardHeader className="flex items-center justify-center gap-4 align-middle pb-2">
                                <div className="rounded-full bg-primary/20 p-2 ring-8 ring-primary/10">
                                    {icon}
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-center text-muted-foreground">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
