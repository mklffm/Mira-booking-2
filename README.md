# Mira Booking

A modern visa application and booking platform built with Next.js, React, and Tailwind CSS.

## Features

- Multilingual support (English, French, Arabic)
- Responsive design with beautiful animations
- Visa application form with B2C and B2B support
- RTL support for Arabic language
- Support for multiple visa types and destinations

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 13+ (App Router)
- React 18
- Tailwind CSS
- TypeScript

## Project Structure

- `/src/app` - Next.js App Router pages
- `/src/components` - Reusable UI components
- `/public` - Static assets

## Key Pages

- Home (`/`) - Main landing page with visa application form
- Visa Application (`/demande-visa`) - Dedicated visa application page
- Services (`/services`) - List of available services
- About (`/about`) - Information about the company
- Contact (`/contact`) - Contact information and form

## Deployment to Cloudflare Pages

To deploy this project to Cloudflare Pages:

1. Push your code to a GitHub repository
2. Login to the Cloudflare Dashboard
3. Navigate to Pages > Create a project
4. Connect your GitHub account and select this repository
5. Configure the build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Environment variables:
     - `NODE_VERSION`: `16.x`
6. Deploy your site

After deployment, your site will be available at a *.pages.dev domain.

## Contributing

Contributions, issues, and feature requests are welcome!

## License

MIT

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash](https://unsplash.com/) - for demo images 