import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

enum PopularPlan {
    NO = 0,
    YES = 1
}

interface PlanProps {
    title: string
    popular: PopularPlan
    price: number
    description: string
    buttonText: string
    benefitList: string[]
}

const plans: PlanProps[] = [
    {
        title: "Free",
        popular: 0,
        price: 0,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
            "1 team member",
            "1 GB storage",
            "Upto 2 pages",
            "Community support",
            "AI assistance"
        ]
    },
    {
        title: "Premium",
        popular: 1,
        price: 45,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get starterd",
        benefitList: [
            "4 team member",
            "8 GB storage",
            "Upto 6 pages",
            "Priority support",
            "AI assistance"
        ]
    },
    {
        title: "Enterprise",
        popular: 0,
        price: 120,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
            "10 team member",
            "20 GB storage",
            "Upto 10 pages",
            "Phone & email support",
            "AI assistance"
        ]
    }
]

export const PricingSection = () => {
    return (
        <section id="pricing" className="container mx-auto py-24 sm:py-32">
            <h2 className="mb-2 text-center text-lg text-primary tracking-wider">
                Pricing
            </h2>

            <h2 className="mb-4 text-center font-bold text-3xl md:text-4xl">
                Get unlimitted access
            </h2>

            <h3 className="mx-auto pb-14 text-center text-muted-foreground text-xl md:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
            </h3>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {plans.map(
                    ({
                        title,
                        popular,
                        price,
                        description,
                        buttonText,
                        benefitList
                    }) => (
                        <Card
                            key={title}
                            className={
                                popular === PopularPlan?.YES
                                    ? "border-[1.5px] border-primary shadow-black/10 drop-shadow-xl lg:scale-[1.1] dark:shadow-white/10"
                                    : ""
                            }
                        >
                            <CardHeader>
                                <CardTitle className="pb-2">{title}</CardTitle>

                                <CardDescription className="pb-4">
                                    {description}
                                </CardDescription>

                                <div>
                                    <span className="font-bold text-3xl">
                                        ${price}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {" "}
                                        /month
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="flex">
                                <div className="space-y-4">
                                    {benefitList.map((benefit) => (
                                        <span key={benefit} className="flex">
                                            <Check className="mr-2 text-primary" />
                                            <h3>{benefit}</h3>
                                        </span>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    variant={
                                        popular === PopularPlan?.YES
                                            ? "default"
                                            : "secondary"
                                    }
                                    className="w-full"
                                >
                                    {buttonText}
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    )
}
