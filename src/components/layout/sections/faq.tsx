import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

interface FAQProps {
    question: string
    answer: string
    value: string
}

const FAQList: FAQProps[] = [
    {
        question: "Is it really free?",
        answer: "Yes! Free forever with MIT license. Use it for any project, commercial or personal.",
        value: "item-1"
    },
    {
        question: "What's included?",
        answer: "Modern landing page and dashboard layout, Authentication with social login, modern UI components, file uploads, and Stripe payments.",
        value: "item-2"
    },
    {
        question: "How fast can I launch my project?",
        answer: "Get your SaaS project running in under an hour. We handle the boring stuff so you can focus on building your unique features.",
        value: "item-3"
    },
    {
        question: "Can I customize the design?",
        answer: "100%. Built with shadcn/ui components that are fully customizable. Make it match your brand perfectly.",
        value: "item-4"
    },
    {
        question: "Do you offer support?",
        answer: "No! But you can join our community on GitHub. We actively maintain the project and welcome contributions.",
        value: "item-5"
    }
]

export const FAQSection = () => {
    return (
        <section id="faq" className="container mx-auto px-4 py-16 sm:py-20 md:w-[700px]">
            <div className="mb-8 text-center">
                <h2 className="mb-2 text-center text-lg text-primary tracking-wider">
                    FAQs
                </h2>

                <h2 className="text-center font-bold text-3xl md:text-4xl">
                    Common Questions
                </h2>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot">
                {FAQList.map(({ question, answer, value }) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
