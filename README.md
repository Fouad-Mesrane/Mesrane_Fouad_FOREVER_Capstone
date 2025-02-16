# Mesrane_Fouad_QuickCart_Capstone
🛒 eCommerce Platform

An advanced full-stack eCommerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Stripe payment integration.

🚀 Features

🎨 Frontend

User-friendly React.js UI with Tailwind CSS

Product browsing, filtering, and searching

Shopping cart with real-time updates

Checkout with order summary and Stripe payment integration

User authentication (Login/Signup) with JWT

Order tracking and management

🔥 Backend

Node.js with Express.js for API handling

MongoDB as the database with Mongoose ODM

User authentication with JWT-based authorization

Secure order management with CRUD functionality

Integration with Stripe for seamless payments

Error handling and API validation

📦 Admin Features

Product management (Add, Edit, Delete)

Order processing and status updates

User management (Roles & Permissions)

📂 Project Structure

Mesrane_Fouad_FOREVER_Capstone/
│── backend/      # Express.js server, APIs, models, controllers
│── frontend/     # React.js UI with Tailwind CSS
│── context/      # Global state management (React Context API)
│── assets/       # Static images and icons
│── config/       # Backend configurations (DB, Stripe, JWT, etc.)
│── routes/       # API routes for users, products, orders
│── models/       # Mongoose models (User, Product, Order)
│── middleware/   # Authentication, error handling
│── controllers/  # Business logic for API routes
│── .env          # Environment variables
│── package.json  # Dependencies and scripts

🛠 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Fouad-Mesrane/Mesrane_Fouad_FOREVER_Capstone.git
cd Mesrane_Fouad_FOREVER_Capstone

2️⃣ Backend Setup

cd backend
npm install   # Install dependencies
npm start     # Start the server

Create a .env file in the backend/ directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

3️⃣ Frontend Setup

cd frontend
npm install  # Install dependencies
npm start    # Start the React app

🧑‍💻 Tech Stack

🔹 Frontend

React.js

Tailwind CSS

Context API

🔹 Backend

Node.js & Express.js

MongoDB & Mongoose

JWT Authentication

🔹 Payments

Stripe Checkout

⚡ API Endpoints

📌 User Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login user

GET /api/user/profile → Fetch user details

📌 Product Routes

GET /api/products → Fetch all products

GET /api/products/:id → Fetch product details

POST /api/products → Add a new product (Admin only)

📌 Order Routes

POST /api/order/place → Place an order

GET /api/orders/:userId → Fetch user orders

PUT /api/orders/:orderId → Update order status (Admin only)

🚀 Deployment

Frontend: Vercel / Netlify

Backend: Render / Railway / Heroku

Database: MongoDB Atlas

📌 Future Enhancements

🛍️ Wishlist & Favorites Feature

📊 Admin Dashboard with Analytics

🔍 Advanced Filtering & Sorting

📧 Email Notifications for Orders

📄 License

This project is open-source under the MIT License.

📩 Contact

👤 Fouad Mesrane📧 Email: your-email@example.com🔗 GitHub: Fouad-Mesrane