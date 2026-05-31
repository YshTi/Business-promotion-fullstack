# Business Promotion Fullstack Website

A responsive business promotion website built with React, TypeScript, CSS Modules, Node.js, Express, and MongoDB.  
The project presents a modern product/service landing page with multiple sections, reusable components, modal contact form, backend-connected feedback cards, and a MongoDB-powered contact request system.

## Project Purpose

This website is designed as a promotional landing page for a digital product/business service.  
Its goal is to present the product, explain its benefits, show pricing options, display client feedback, and allow users to contact an expert through a modal form.

The website includes:

- Product hero section
- Features section
- Quick & Easy Process section
- Contact expert modal
- Content strategies/news section
- Pricing table
- Client feedback section connected to MongoDB
- Promo/CTA section
- Footer with navigation and phone subscription form
- Responsive navigation menu for mobile and tablet screens

## Design Concept

The design follows a clean SaaS/product landing page style.

Main design characteristics:

- Minimal white background
- Green primary accent color: `#02897a`
- Rounded cards and buttons
- Soft shadows
- Responsive layout for mobile, tablet, and desktop
- Modular reusable sections
- Mobile/tablet slide-in navigation menu
- Modal windows for better user interaction
- Consistent typography using the Poppins font

The layout is inspired by a modern business/product promotion design, with strong emphasis on clarity, conversion, and responsive user experience.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- Swiper.js
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- CORS
- Dotenv

### Development Tools

- VS Code
- Git
- GitHub
- Vercel
- MongoDB Atlas
- npm

## Main Features

### Responsive Layout

The website is fully responsive and supports:

- Mobile screens
- Tablet screens
- Desktop screens

The navigation changes depending on the screen size:

- Mobile and tablet: burger menu with full-screen slide-in navigation
- Desktop: horizontal navbar with links and buttons

### Contact Expert Modal

The contact form appears inside a modal window.  
The modal can be closed by:

- Clicking the close button
- Clicking outside the modal
- Pressing the Escape key

After successful form submission, the user sees a thank-you message:

> Thank you for the information. Our expert will contact you within 2 working days.

The form sends data to the backend and stores it in MongoDB.

### Feedback Section

The client feedback section is connected to the backend.

Feedback data is stored in MongoDB and fetched from the Express API.

The feedback section supports:

- Static mobile list
- Swiper on tablet
- Three-card layout on desktop
- Clickable pagination dots
- Keyboard navigation
- Swipe/drag interaction

### Pricing Table

The pricing table is reusable.  
It can be used on the homepage and on the Pricing page with different heading text.

The pricing card data is typed with TypeScript.

### Reusable Styles

The project uses global reusable styles for:

- Buttons
- White buttons
- Logo
- Container
- Typography basics

Each component also has its own CSS Module for section-specific styling.
