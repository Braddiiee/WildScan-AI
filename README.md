# WildScan Guyana

**WildScan Guyana** is a free web application designed to leverage **AI image recognition** technology to help users identify animals in real time. Users can snap a photo or upload an image to instantly retrieve detailed species information, including habitat, diet, and conservation status. The platform is designed for students, researchers, educators, and nature enthusiasts seeking to explore and learn about Guyana's rich biodiversity in an interactive and accessible way.

---

## Overview

WildScan Guyana combines modern web technologies and AI APIs to provide a seamless experience for users interested in wildlife exploration. By integrating AI image classification with a locally curated database, the app allows users to gain accurate information about native species of the Guiana Shield region. The application also supports offline caching, ensuring that frequently accessed species data can be viewed without requiring a constant internet connection.

As the application expands, it is designed to support global species recognition by integrating with biodiversity APIs such as GBIF and iNaturalist. This approach allows the application to fetch species data on-demand while maintaining local caching to reduce API calls and hosting costs.

---

## Key Features

* **Real-Time Animal Identification:** Users can take a photo or upload an image, and the AI model instantly identifies the species.
* **Detailed Species Information:** Provides information on habitat, diet, conservation status, and unique facts about the species.
* **Educational Use:** Tailored for students and researchers to provide reliable and structured biodiversity data.
* **Offline Support:** Frequently accessed species data is cached locally for offline access.
* **Scalable Architecture:** Designed to expand to global species identification while maintaining performance and efficiency.
* **Freemium Model:** Basic identification features are free, with premium upgrades for unlimited scans and additional offline capabilities.

---

## Technology Stack

The project leverages a modern web development stack with a focus on maintainability, scalability, and performance:

* **[React](https://reactjs.org/):** A declarative, component-based JavaScript library for building interactive user interfaces.
* **[TypeScript](https://www.typescriptlang.org/):** Provides static typing and enhanced code reliability throughout the application.
* **[Vite](https://vitejs.dev/):** A fast and modern build tool that supports hot module replacement and optimized builds.
* **[TailwindCSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid and responsive UI development.
* **[Node.js](https://nodejs.org/) / [Express](https://expressjs.com/):** Backend server to handle AI API requests securely and manage caching.
* **[OpenAI API](https://openai.com/):** Used for AI-driven image recognition and species identification.
* **[Supabase](https://supabase.com/) / [PostgreSQL](https://www.postgresql.org/):** Provides database services for caching frequently requested species data and storing user-related data securely.

---

## Project Setup

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Braddiiee/WildScan-AI.git
cd WildScan-AI
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd ../backend
npm install
```

4. Start development servers:

```bash
# Frontend
cd frontend
npm run dev

# Backend
cd ../backend
npm run dev
```

Open your browser at `http://localhost:5173` to view the frontend and `http://localhost:5000` for the backend API.

---

## Future Enhancements

WildScan Guyana is designed with scalability in mind. Future improvements include:

* Expanding species recognition to a global dataset.
* Integration with additional biodiversity APIs to enrich species data.
* Advanced analytics for research purposes.
* Enhanced offline caching and performance optimizations.
* User account system for personalized experience and tracking.
* Expansion as a mobile app

---

**WildScan Guyana** demonstrates the effective use of modern web technologies combined with AI capabilities to deliver an educational and engaging tool for biodiversity exploration, making it a strong showcase for portfolio and professional opportunities.
