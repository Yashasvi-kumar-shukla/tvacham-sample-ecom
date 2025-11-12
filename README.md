Tvaćham - Full-Stack E-Commerce Website

Live Demo: https://tvacham-sample-ecom.vercel.app/

About This Project

Tvaćham (from Sanskrit, meaning "skin") is a full-stack, deployed sample e-commerce website built as a portfolio project. It simulates a modern, luxurious skincare brand, focusing on a smooth user experience with animations, a persistent cart, and a complete (simulated) checkout flow.

This project demonstrates a complete full-stack development cycle, from backend API and database design to a responsive, animated React frontend, all deployed to live cloud services.

🚀 Core Features

Full-Stack Architecture: A complete client-server model with a React frontend and a Node.js/Express backend.

Live API: The backend serves a REST API for all products, with data stored in a live PostgreSQL database.

Animated UI: Built with Framer Motion for a smooth, premium feel.

Shared layout animations (product card to product detail page).

Scroll-triggered fade-in animations.

Animated splash screen during order processing.

Persistent Cart: Cart state is saved to localStorage, so it persists even after a page refresh.

Complete Checkout Flow: Users can add to cart, adjust quantities, "Buy Now," and fill out a (simulated) payment form.

Automatic Data Cleanup: The backend features a cron job that automatically deletes demo/guest data older than 5 days.

🛠️ Tech Stack

Frontend (Client-side)

React.js (Vite)

Framer Motion: For all animations and page transitions.

React Router v6: For client-side routing.

Axios: For making requests to the backend API.

React Context API: For global state management (shopping cart).

Styling: Plain CSS with a modern, minimal aesthetic.

Backend (Server-side)

Node.js

Express.js: For building the REST API.

Knex.js: A powerful SQL query builder.

CORS: To handle cross-origin requests from the frontend.

Database & Deployment

Database: PostgreSQL (live on Render)

Backend Host: Render

Frontend Host: Vercel

Development DB: SQLite3

🚦 How to Run Locally

To get this project running on your own machine, follow these steps.

Prerequisites:

Node.js (v18 or newer)

npm

1. Clone the Repository

git clone [https://github.com/Yashasvi-kumar-shukla/tvacham-sample-ecom.git](https://github.com/Yashasvi-kumar-shukla/tvacham-sample-ecom.git)
cd tvacham-sample-ecom


2. Set Up the Backend

# Navigate to the backend folder
cd backend

# Install all dependencies
npm install

# Create the local .db3 database file
npx knex migrate:latest

# Populate the database with sample products
npx knex seed:run

# Start the backend server (runs on http://localhost:3001)
npm run dev


3. Set Up the Frontend

Open a new terminal window.

# Navigate to the frontend folder
cd frontend

# Install all dependencies
npm install

# Start the frontend dev server (runs on http://localhost:5173)
npm run dev


Your browser should automatically open to the website. The frontend will use its Vite proxy to automatically communicate with the backend.

🚀 Deployment

This project is deployed in two parts:

Backend (Render):

The Node.js/Express server is deployed as a Web Service on Render.

It's connected to a free-tier PostgreSQL database, also on Render.

The DATABASE_URL and NODE_ENV=production environment variables are set.

The build command npm install && npm run db:migrate:prod && npm run db:seed:prod automatically migrates and seeds the live database on deploy.

Frontend (Vercel):

The React app is deployed on Vercel, connected to the frontend directory of the GitHub repo.

An environment variable VITE_API_URL is set to the live Render API URL (https=://tvacham-sample-ecom.onrender.com/api) to allow the frontend to make requests.