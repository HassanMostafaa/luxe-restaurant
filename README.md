# LUXE Restaurant Landing Page

Welcome to the Luxury Restaurant Chain landing page! This project features a modern, luxurious design with dark mode aesthetics, complemented by gradient gold accents for call-to-action buttons and other interactive elements. The landing page is built with **Next.js**, **TypeScript**, **Emotion** for styling, and uses a collection of dummy data for content. The entire page is client-side rendered, ensuring fast and efficient loading.

## Key Features:
- **Dark Mode Theme:** Elegant dark colors with gradient gold accents.
- **Responsive Layout:** Optimized for desktops, tablets, and mobile devices.
- **Modular Components:** Each section is broken into its own component for reusability and maintainability.
- **Smooth Animations:** Enhanced UI with animations using **Framer Motion**.
- **Interactive Elements:** Hover effects on buttons and images.
- **High-Quality Stock Images:** Sourced from **Unsplash** for a premium feel.
- **Clean Typography:** Easy-to-read fonts with a luxurious touch.

## Project Structure:

```
Luxury-Restaurant-Landing-Page/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Categories.tsx
│   │   ├── Featured.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Locations.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── restaurants.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/luxury-restaurant-landing-page.git
   cd luxury-restaurant-landing-page
   ```

2. **Install dependencies:**

   Ensure you have **Node.js** and **npm** installed. Run the following command to install required packages:

   ```bash
   npm install
   ```

3. **Run the development server:**

   Once dependencies are installed, start the development server with:

   ```bash
   npm run dev
   ```

4. **Open the application:**

   The landing page should now be available at `http://localhost:3000` in your browser.

## Key Sections:

### 1. **Navigation:**
   - A clean, sticky navigation bar that links to the different sections of the page.

### 2. **Hero Section:**
   - A large, impactful section with a background image, main heading, and a prominent call-to-action button with a gradient gold effect.

### 3. **Food Categories:**
   - A section showcasing different food categories (e.g., appetizers, mains, desserts) in a visually appealing grid.

### 4. **Featured Meals:**
   - A highlight of popular meals or signature dishes from the restaurant chain.

### 5. **About Section:**
   - A short introduction to the restaurant chain, focusing on its luxury experience, mission, and values.

### 6. **Locations and More Info:**
   - A list of restaurant locations, including contact information, opening hours, and other useful details.

### 7. **Footer:**
   - The footer contains social media links, a newsletter sign-up, and legal information (e.g., terms & conditions, privacy policy).

## Styling:

- The project uses **Emotion CSS** for styling, allowing us to define global themes and component-specific styles.
- **Gradient gold** is used for buttons and call-to-action elements to create a luxury feel.
- The **dark mode** theme ensures a sleek, modern appearance, while maintaining readability and accessibility.

## Components:

- **Navigation.tsx:** Contains the header and navigation links.
- **Hero.tsx:** The large introductory section with a background image and call-to-action button.
- **Categories.tsx:** Displays the various food categories in a clean, organized manner.
- **Featured.tsx:** Highlights featured meals or dishes from the restaurant chain.
- **About.tsx:** A brief section about the brand and its story.
- **Locations.tsx:** Information on the restaurant locations and additional details.
- **Footer.tsx:** Contains links to the restaurant’s social media, legal pages, and other useful information.

## Dummy Data:

The data for food categories, featured meals, and locations are stored in the `app/data/restaurants.ts` file. You can modify this file to add or update the information displayed on the landing page.

## Global Styles:

All global styles are defined in `app/globals.css` and the dark theme colors are configured in `app/styles/theme.ts`.

## Future Improvements:

- **Server-side Rendering (SSR):** Although this project is designed for client-side rendering, you can enhance SEO and performance with server-side rendering (SSR) in Next.js.
- **Accessibility Enhancements:** Continue to improve accessibility for screen readers and keyboard navigation.
- **Advanced Animations:** Experiment with more interactive animations for an even more engaging user experience.

## Contributing:

If you'd like to contribute to the project, feel free to fork the repository, make your changes, and submit a pull request.

---

Enjoy building and customizing your luxury restaurant landing page!
