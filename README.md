# TinyLink - Frontend

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

A modern, minimalist, and high-performance frontend for the **TinyLink** URL shortener application. Built with Next.js and Tailwind CSS, this interface provides a seamless user experience for creating, managing, and tracking short links.

**Live Demo:** [https://your-tinylink-frontend.vercel.app](https://your-tinylink-frontend.vercel.app)

*(Don't forget to replace the link above with your actual deployment URL!)*

---

![TinyLink Application Screenshot](./public/screenshot.png)
*(**Note:** Add a screenshot of your application to the `public` folder and name it `screenshot.png` for it to appear here.)*

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Core Features](#core-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

## ✨ About The Project

This project is the client-side interface for TinyLink, a URL shortening service similar to Bitly. It's designed as a single-page application that communicates with a separate [Express.js backend API](https://github.com/your-username/your-repo/tree/main/backend) to handle all data operations. The focus is on providing a clean, intuitive, and highly responsive user experience.

## 🚀 Core Features

-   **Create Short Links**: Easily shorten long URLs with an option to add a custom alias.
-   **Link Management**: View all created links in a clean, responsive table.
-   **Instant Copy**: "Copy to Clipboard" functionality for quick sharing.
-   **Secure Deletion**: Delete unwanted links with a confirmation prompt.
-   **Real-time Click Updates**: The click count on the dashboard updates automatically when you refocus the tab after visiting a short link.
-   **Engaging UX**: Features a custom cursor trail effect, smooth loading skeletons, and clear user feedback for all actions (success, error, loading states).
-   **Fully Responsive**: A mobile-first design that looks and works great on all screen sizes.
-   **Landing Page Sections**: Includes a complete landing page structure with a hero section, features, and how-it-works guide.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
-   **Deployment**: [Vercel](https://vercel.com/)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
-   Node.js (v18.x or later recommended)
-   npm

### Local Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo.git
    ```

2.  **Navigate to the frontend directory:**
    ```sh
    cd your-repo/frontend
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    -   Create a new file named `.env.local` in the `frontend` root directory.
    -   Copy the contents of `.env.example` into it.
    -   Set the `NEXT_PUBLIC_API_URL` to point to your running backend server.
    ```env
    # For local development, assuming backend runs on port 5000
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```
    *(**Important:** Your [backend server](https://github.com/your-username/your-repo/tree/main/backend) must be running for the frontend to work.)*

5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔑 Environment Variables

This project requires the following environment variable to be set:

| Variable                | Description                                         | Example (Production)                               |
| ----------------------- | --------------------------------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_API_URL`   | The base URL of the deployed backend Express server.  | `https://your-tinylink-backend.vercel.app`         |

## 📁 Project Structure

The frontend codebase is organized into a modular structure for better maintainability: