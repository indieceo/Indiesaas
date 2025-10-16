<div align="center">
  <img src="public/logo.svg" alt="IndieSaas Starter Logo" width="80" height="80">
  <h1 style="color: #6d28d9; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 42px; text-align: center; margin: 20px 0 0 0;">
    IndieSaas Starter
  </h1>
</div>


A modern, Next.js Saas boilerplate with comprehensive authentication built on Better Auth, featuring a beautiful UI with shadcn/ui components and a robust tech stack.

## Tech Stack

- **Better Auth UI** - Pre-built authentication components
- **shadcn/ui** - Beautiful, accessible component library
- **Stripe** - Payment Provider
- **Biome** - Fast linter and formatter
- **Turborepo** - Monorepo build system
- **PostgreSQL** - Robust, production-ready database
- **Drizzle ORM** - Type-safe database queries
- **UploadThing** - Modern file uploads with built-in storage
- **Resend** - Transactional email service


## Roadmap

- [x] landing page
- [x] Authentication with Better Auth
- [x] Dashboard
- [x] Stripe Payment




##  Quick start

### 1. Clone the Repository
```bash
git clone https://github.com/indieceo/Indiesaas
cd indiesaas
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local` and update the variables.

```bash
cp .env.example .env.local
```

### 4. Database Setup
Generate the authentication schema and run migrations:

```bash
# Generate Better Auth schema
npx @better-auth/cli generate

# Generate Drizzle migrations
npx drizzle-kit generate

# Run migrations
npx drizzle-kit migrate
```

### 5. Start Development Server
```bash
npm run dev
# or
pnpm dev
```

##  Configuration

### Site Configuration
Customize your website settings in `src/config/site.ts`:
- App name, description, and branding
- Email addresses for support and system emails
- Social media links
- Logo and OG image paths

### Better Auth Configuration
The authentication is configured in `src/lib/auth.ts`. You can customize:
- OAuth providers (Google, GitHub, etc.)
- Email templates
- Session settings
- Password policies

### Database Configuration
Database connection and schema are managed through:
- `drizzle.config.ts` - Drizzle ORM configuration
- `src/database/schema.ts` - Better Auth schema definition

### UI Customization
The UI is built with shadcn/ui components and can be customized:
- Theme colors in `src/styles/globals.css`
- Custom styles in `src/styles/custom.css`
- Component variants in individual component files


## Usage

Feel free to use and customize this template as per your requirements. You can modify the components, styles, and content to create your unique website.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as you wish.

## 🙏 Credits


- [Better Auth Ui](https://better-auth-ui.com) - Pre-built authentication components
- [shadcn landing page](https://github.com/nobruf/shadcn-landing-page) - landing page used for this project



---

<div align="center" >
  <p><strong>Sponsored by Posthyve</strong></p>
  <a href="https://posthyve.com" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
    <img src="https://posthyve.com/logo.svg" alt="Posthyve" width="32" height="32">
  </a>
  <p><em>All-in-One Social Media Management Platform</em></p>
</div>

<div align="center">

  **Made with ❤️ by [INDIETECH](https://indietech.dev)**

</div>
