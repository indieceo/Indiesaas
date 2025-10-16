const site_url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const site = {
  name: "IndieSaas",
  description: "A modern SaaS starter built with Next.js, Drizzle, and Better Auth",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  logo: "/logo.svg",
  mailSupport: "hello@domain.com", // Support email address
  mailFrom: process.env.MAIL_FROM || "noreply@domain.com", // Transactional email address
  links: {
    twitter: "https://twitter.com/indieceo",
    github: "https://github.com/indieceo/indiesaas",
    linkedin: "https://www.linkedin.com/in/indieceo/",
  }
} as const;