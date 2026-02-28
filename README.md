🔐 Secure Authentication System API

A production-ready authentication system that provides user registration, login, and protected routes using JWT, bcrypt, Node.js, Express, and MongoDB Atlas.

🚀 Features

✅ User Signup
✅ User Login
✅ Password hashing with bcrypt
✅ JWT authentication
✅ Protected routes
✅ MongoDB Atlas integration
✅ Environment variable security
✅ MVC architecture
✅ Production deployment

🛠️ Tech Stack

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (jsonwebtoken)

bcrypt.js

dotenv

Render

Postman

🌐 Live API
https://your-auth-api.onrender.com
📂 Project Structure
secure-auth-system
│── config
│   └── db.js
│── controllers
│   └── authController.js
│── middleware
│   └── authMiddleware.js
│── models
│   └── User.js
│── routes
│   └── authRoutes.js
│── .env
│── .gitignore
│── index.js
│── package.json
⚙️ Environment Variables

Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
PORT=5000
▶️ Run Locally
npm install
npm run dev
🔑 API Endpoints
📌 Register User
POST /api/auth/register

Body:

{
  "name": "Harsh",
  "email": "harsh@gmail.com",
  "password": "123456"
}
📌 Login User
POST /api/auth/login
📌 Protected Route
GET /api/auth/profile

Header:

Authorization: Bearer <token>
🔐 Security Features

Password hashing using bcrypt

JWT-based authentication

Protected routes middleware

Environment variable protection

No sensitive data stored in GitHub

🧪 API Testing

All endpoints tested using Postman.

☁️ Deployment

Deployed on Render with MongoDB Atlas.

👨‍💻 Author

Harsh Yadav
