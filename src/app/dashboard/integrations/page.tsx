import { PageHeader } from "@/components/layout/page-header"

export const metadata = {
    title: "Integrations"
}

export default function IntegrationsPage() {
    return (
        <div className="space-y-6">
            <PageHeader 
                title="Integrations page"
                description="Connect your apps and services to your dashboard."
            />
        </div>
    )
}
