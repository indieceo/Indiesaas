import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Indie Saas Starter",
        short_name: "IndieSaaS",
        description:
            "Fully functional SaaS starter built with Next.js, Drizzle, ShadCN UI, Stripe, and Better Auth",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon"
            }
        ]
    }
}
