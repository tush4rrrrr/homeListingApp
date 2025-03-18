# 🏠 Home Sharing Platform - Backend API

## 📌 Project Overview

This is a **backend API for a Home Sharing Platform**, built using **Node.js, Express, and MongoDB**. It allows users to **register, log in, list homes, and book available properties** while ensuring authentication and security with JWT.

---

## 🚀 Tech Stack Used

| **Technology**         | **Purpose**                                        |
| ---------------------- | -------------------------------------------------- |
| **Node.js**            | JavaScript runtime for backend development         |
| **Express.js**         | Fast and minimal web framework for Node.js         |
| **MongoDB & Mongoose** | NoSQL database for storing users and home listings |
| **bcrypt.js**          | Password hashing for secure authentication         |
| **jsonwebtoken (JWT)** | Secure authentication & authorization              |
| **dotenv**             | Manage environment variables securely              |
| **cors**               | Enable secure cross-origin requests                |
| **Postman**            | API testing tool for validating endpoints          |

---

## 📂 Project Structure

backend/ ├── models/ ├── user.model.js # User schema (name, email, password) ├── home.model.js # Home schema (location, availability)
├── routes/ ├── userRoutes.js # User authentication routes │ ├──homeRoutes.js # Home listing & booking routes
├── middleware/ # Authentication middleware
├── auth.js # JWT authentication middleware
├── .env # Environment variables
├── server.js # Main entry point for the backend server
├── package.json # Dependencies & scripts
└── README.md # Project documentation

---

🔐 Authentication & Security
Passwords are hashed using bcrypt.js before storing in the database.
JWT (jsonwebtoken) is used for secure authentication.
Private routes (e.g., booking a home) require a valid JWT token in the Authorization header.

The backend is deployed on Render.
🔹 Live API URL: https://home-listing-backend.onrender.com

You can test:
https://home-listing-backend.onrender.com/api/homes

🛠 Future Improvements
✅ Integrate a frontend using Next.js.
✅ Add image upload support for homes.
✅ Implement email notifications for bookings.

📞 Contact & Contribution
📌 If you have any feedback or suggestions, feel free to reach out!
🔹 GitHub: https://github.com/tush4rrrrr/homeListingApp
🔹 Email: tusharkauhsik352@gmail.com
