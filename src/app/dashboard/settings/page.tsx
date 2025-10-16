import {
    ChangeEmailCard,
    ChangePasswordCard,
    DeleteAccountCard,
    SessionsCard,
    UpdateNameCard,
    UpdateAvatarCard,
    ProvidersCard
} from "@daveyplate/better-auth-ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiUser3Line, RiShieldLine, RiAlarmWarningLine } from "@remixicon/react"
import { PageHeader } from "@/components/layout/page-header"

export const metadata = {
    title: "Settings"
}

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader
                title="Settings"
                description="Manage your account settings and preferences."
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
                        <RiUser3Line className="h-4 w-4" />
                        <span className="hidden sm:inline">Account</span>
                        <span className="sm:hidden">Account</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="security"
                        className="flex-1 justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm data-[state=active]:bg-secondary lg:flex-none lg:justify-start lg:text-left lg:text-base"
                    >
                        <RiShieldLine className="h-4 w-4" />
                        <span className="hidden sm:inline">Security</span>
                        <span className="sm:hidden">Security</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="danger"
                        className="flex-1 justify-center gap-2 rounded-lg px-3 py-2 text-center text-sm data-[state=active]:bg-secondary lg:flex-none lg:justify-start lg:text-left lg:text-base"
                    >
                        <RiAlarmWarningLine className="h-4 w-4" />
                        <span className="hidden sm:inline">Danger Zone</span>
                        <span className="sm:hidden">Danger</span>
                    </TabsTrigger>
                </TabsList>

                <div className="min-w-0 max-w-2xl flex-1">
                    <TabsContent id="account" value="account">
                        <div className="space-y-4 sm:space-y-6">
                            <UpdateAvatarCard />
                            <UpdateNameCard />
                            <ChangeEmailCard />
                        </div>
                    </TabsContent>

                    <TabsContent id="security" value="security">
                        <div className="space-y-4 sm:space-y-6">
                            <ChangePasswordCard />
                            <ProvidersCard />
                            <SessionsCard />
                        </div>
                    </TabsContent>

                    <TabsContent value="danger">
                        <div className="space-y-4 sm:space-y-6">
                            <DeleteAccountCard />
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
