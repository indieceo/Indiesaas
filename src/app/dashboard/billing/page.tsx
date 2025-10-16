import { getActiveSubscription } from "@/lib/payments/actions"
import { auth } from "@/lib/auth"
import { PageHeader } from "@/components/layout/page-header"
import { headers } from "next/headers"
import CancelSubButton from "./cancel-sub-button"

import {
    Zap,
    RotateCcw,
    CheckCircle,
    Users,
    CreditCard,
    User
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import PlanSelector from "./plan-selector"


export const metadata = {
    title: "Billing & Subscription"
}

export default async function Plans() {
    const session = await auth.api.getSession({ headers: await headers() })
    const data = await getActiveSubscription()
    const activeSub = data.subscription

    return (
        <div className="space-y-6">
            <PageHeader
                title="Billing & Subscription"
                description="Manage your billing, subscription plans, and account details."
            />

            <Tabs
                defaultValue="account"
                className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:gap-8"
            >
                <TabsList className="flex h-auto w-full flex-row justify-start gap-2 bg-transparent p-0 lg:w-64 lg:flex-col lg:items-start lg:justify-start">
                    <TabsTrigger
                        value="account"
                        className="flex-1 justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm data-[state=active]:bg-secondary lg:flex-none lg:justify-start lg:text-left lg:text-base"
                    >
                        <User className="h-4 w-4" />
                        <span className="hidden sm:inline">Account</span>
                        <span className="sm:hidden">Account</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="plans"
                        className="flex-1 justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm data-[state=active]:bg-secondary lg:flex-none lg:justify-start lg:text-left lg:text-base"
                    >
                        <CreditCard className="h-4 w-4" />
                        <span className="hidden sm:inline">Subscription</span>
                        <span className="sm:hidden">Subscription</span>
                    </TabsTrigger>
                </TabsList>

                <div className="min-w-0 flex-1">
                    <TabsContent value="account">
                        <div className="space-y-6">
                            <Card className="mx-auto max-w-3xl">
                                <CardHeader>
                                    <CardTitle>Account Information</CardTitle>
                                    <CardDescription>
                                        Your current account details
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm">
                                        Logged in as:{" "}
                                        <span className="font-medium text-foreground">
                                            {session?.user?.email}
                                        </span>
                                    </p>
                                </CardContent>
                            </Card>

                            {activeSub ? (
                                <Card className="mx-auto max-w-3xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <span>
                                                {activeSub.plan
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    activeSub.plan.slice(
                                                        1
                                                    )}{" "}
                                                Plan
                                            </span>
                                        </CardTitle>
                                        <CardDescription>
                                            Your subscription details
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                                                <span className="flex items-center text-muted-foreground">
                                                    <Zap className="mr-2 h-4 w-4" />
                                                    Status
                                                </span>
                                                <span className="font-semibold capitalize">
                                                    {activeSub.status}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                                                <span className="flex items-center text-muted-foreground">
                                                    <RotateCcw className="mr-2 h-4 w-4" />
                                                    Auto-renew
                                                </span>
                                                <span className="font-semibold">
                                                    {activeSub.cancelAtPeriodEnd
                                                        ? "No"
                                                        : "Yes"}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                                                <span className="flex items-center text-muted-foreground">
                                                    <CheckCircle className="mr-2 h-4 w-4" />
                                                    Tokens
                                                </span>
                                                <span className="font-semibold">
                                                    {/* TODO: Extend Subscription type of better-auth to include this limits field. */}
                                                    {(activeSub as any).limits
                                                        ?.tokens || "N/A"}{" "}
                                                    per month
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between rounded-lg border bg-card p-3">
                                                <span className="flex items-center text-muted-foreground">
                                                    <Users className="mr-2 h-4 w-4" />
                                                    Seats
                                                </span>
                                                <span className="font-semibold">
                                                    {activeSub.seats}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="flex justify-end">
                                        {activeSub.cancelAtPeriodEnd ? (
                                            <p className="text-destructive text-xs">
                                                Your subscription will be
                                                cancelled on:{" "}
                                                {activeSub.periodEnd?.toLocaleDateString()}
                                            </p>
                                        ) : (
                                            <CancelSubButton />
                                        )}
                                    </CardFooter>
                                </Card>
                            ) : (
                                <Card className="mx-auto max-w-3xl">
                                    <CardHeader>
                                        <CardTitle>
                                            No Active Subscription
                                        </CardTitle>
                                        <CardDescription>
                                            You don't have an active
                                            subscription plan
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="mb-4 text-muted-foreground">
                                            Choose a plan from the subscription tab.
                                        </p>
                                        
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="plans">
                        <div className="mx-auto mb-6 max-w-3xl rounded-lg border bg-muted/50 p-4 ">
                            <p className="font-medium">This is a demo app.</p>
                            <p className="mt-1 text-muted-foreground">
                                This is a demo app that uses Stripe test
                                environment. You can find a list of test card
                                numbers on the{" "}
                                <a
                                    href="https://docs.stripe.com/testing#cards"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary underline hover:no-underline"
                                >
                                    Stripe docs
                                </a>
                                .
                            </p>
                        </div>
                        <PlanSelector activeSub={activeSub} session={session} />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
