import { Mail } from "lucide-react"
import XIcon from "@/components/icons/x-icon"
import GithubIcon from "@/components/icons/github-icon"
import LinkedInIcon from "@/components/icons/linkedin-icon"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { site } from "@/config/site"

interface FooterLinkProps {
    href: string
    label: string
    icon?: React.ReactNode
    external?: boolean
}

interface FooterSectionProps {
    title: string
    links: FooterLinkProps[]
}

const footerSections: FooterSectionProps[] = [
    {
        title: "Product",
        links: [
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "#integrations", label: "Integrations" },
            { href: "#api", label: "API" }
        ]
    },
    {
        title: "Company",
        links: [
            { href: "#about", label: "About Us" },
            { href: "#careers", label: "Careers" },
            { href: "#blog", label: "Blog" }
        ]
    },
    {
        title: "Resources",
        links: [
            { href: "#documentation", label: "Documentation" },
            { href: "#help", label: "Help Center" },
            { href: "#status", label: "Status" }
        ]
    },
    {
        title: "Legal",
        links: [
            { href: "#privacy", label: "Privacy Policy" },
            { href: "#terms", label: "Terms of Service" },
            { href: "#cookies", label: "Cookie Policy" }
        ]
    }
]

const socialLinks: FooterLinkProps[] = [
    {
        href: site.links.github,
        label: "GitHub",
        icon: <GithubIcon className="size-5 fill-foreground" />,
        external: true
    },
    {
        href: site.links.twitter,
        label: "Twitter",
        icon: <XIcon className="size-5 fill-foreground" />,
        external: true
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: <LinkedInIcon className="size-5 fill-foreground" />,
        external: true
    },
    {
        href: `mailto:${site.mailSupport}`,
        label: "Email",
        icon: <Mail className="size-5" />
    }
]

export const FooterSection = () => {
    return (
        <footer id="footer">
            <div className="mx-auto max-w-7xl pt-16 pb-0 lg:pb-12">
                <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 shadow-xl backdrop-blur-sm">
                    <div className="relative p-8 lg:p-12">
                        {/* Main Footer Content */}
                        <div className="space-y-8 lg:space-y-0">
                            {/* Desktop Layout: Side by side */}
                            <div className="hidden gap-12 lg:grid lg:grid-cols-6">
                                {/* Brand Section */}
                                <div className="col-span-2">
                                    <Link
                                        href="/"
                                        className="group mb-4 flex gap-2 font-bold"
                                    >
                                        <Image
                                                src={site.logo}
                                                alt={site.name}
                                                width={30}
                                                height={30}
                                            />
                                        <h3 className="font-bold text-2xl">
                                            {site.name}
                                        </h3>
                                    </Link>
                                    <p className="mb-6 text-muted-foreground leading-relaxed">
                                        Build and scale your SaaS faster with
                                        our Starter Kit. From authentication to
                                        payments, we've got you covered.
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex gap-2">
                                        {socialLinks.map((social) => (
                                            <Button
                                                key={social.label}
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="p-2 hover:bg-accent/50"
                                            >
                                                <Link
                                                    href={social.href}
                                                    target={
                                                        social.external
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        social.external
                                                            ? "noopener noreferrer"
                                                            : undefined
                                                    }
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Links Desktop */}
                                {footerSections.map((section) => (
                                    <div
                                        key={section.title}
                                        className="flex flex-col"
                                    >
                                        <h4 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wide">
                                            {section.title}
                                        </h4>
                                        <ul className="space-y-3">
                                            {section.links.map((link) => (
                                                <li key={link.label}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-muted-foreground text-sm underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile/Tablet Layout: Stacked */}
                            <div className="lg:hidden">
                                {/* Brand Section Mobile */}
                                <div className="mb-8">
                                    <Link
                                        href="/"
                                        className="group mb-4 flex gap-2 font-bold"
                                    >
                                        <div className="relative">
                                            <Image
                                                src={site.logo}
                                                alt={site.name}
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <h3 className="font-bold text-2xl">
                                            {site.name}
                                        </h3>
                                    </Link>
                                    <p className="mb-6 max-w-sm text-muted-foreground text-sm leading-relaxed">
                                        Build and scale your SaaS faster with
                                        our Starter Kit. From authentication to
                                        payments, we've got you covered.
                                    </p>

                                    {/* Social Links Mobile */}
                                    <div className="flex gap-2">
                                        {socialLinks.map((social) => (
                                            <Button
                                                key={social.label}
                                                asChild
                                                variant="ghost"
                                                size="sm"
                                                className="p-2 hover:bg-accent/50"
                                            >
                                                <Link
                                                    href={social.href}
                                                    target={
                                                        social.external
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        social.external
                                                            ? "noopener noreferrer"
                                                            : undefined
                                                    }
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </Link>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Links Mobile - Grid */}
                                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                                    {footerSections.map((section) => (
                                        <div
                                            key={section.title}
                                            className="flex flex-col"
                                        >
                                            <h4 className="mb-4 font-semibold text-foreground text-sm uppercase tracking-wide">
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {section.links.map((link) => (
                                                    <li key={link.label}>
                                                        <Link
                                                            href={link.href}
                                                            className="text-muted-foreground text-sm underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Separator className="my-8 bg-border/50" />

                        {/* Bottom Section */}
                        <div className="flex flex-col justify-between gap-4 lg:flex-row">
                            <div className="flex flex-col items-center gap-4 text-muted-foreground text-sm sm:flex-row">
                                <p>
                                    &copy; 2025 {site.name}. All rights reserved.
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
                               
                                
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <span>This SaaS Starter is built by</span>
                                    <Link
                                        target="_blank"
                                        href="https://indietech.dev/?utm_source=indiesaas"
                                        className="flex items-center gap-1 font-semibold"
                                    >
                                        <Image
                                            src="https://indietech.dev/logo.svg"
                                            alt="Indietech"
                                            width={16}
                                            height={16}
                                            className="inline-block"
                                        />
                                        Indietech
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
