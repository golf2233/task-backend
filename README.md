# Full Stack Task Manager – Backend Architecture

This repository contains the backend for a full-stack Task Manager SaaS application.

The backend is built using **Node.js, Express, MongoDB**, and **JWT-based authentication**, following a **clean, modular architecture** that is easy to understand, maintain, and scale.

---

## 🧠 High-Level Architecture

Client (React)
|
| HTTP (JSON + JWT)
v
Express Server
|
| Routes → Middleware → Controllers
v
MongoDB (via Mongoose)


Key ideas:
- The backend is **stateless**
- Authentication is handled using **JWT**
- Business logic is separated from routing and infrastructure
- Each layer has **one clear responsibility**

---

## 📁 Folder Structure

task-backend/
├── server.js
├── app.js
├── config/
│   └── db.js
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── User.js
│   └── Task.js
├── .env
└── package.json

---

## 🧩 Responsibility of Each Layer

### 1. `server.js` – Application Entry Point
**Responsibility:**
- Load environment variables
- Connect to the database
- Start the HTTP server

It contains **no business logic**.

---

### 2. `app.js` – Express App Configuration
**Responsibility:**
- Configure global middleware (CORS, JSON parsing)
- Register route modules
- Provide a health-check endpoint

This file wires the application together.

---

### 3. `routes/` – URL Mapping Layer
**Responsibility:**
- Define API endpoints (URLs)
- Attach middleware and controllers

Routes do **not** contain business logic or database code.

Example:
- `POST /login`
- `GET /tasks`

---

### 4. `middleware/` – Cross-Cutting Concerns
**Responsibility:**
- Authentication
- Authorization
- Request validation (future)

The `auth` middleware:
- Verifies JWT tokens
- Extracts user identity
- Blocks unauthenticated access

---

### 5. `controllers/` – Business Logic Layer
**Responsibility:**
- Implement application behavior
- Handle requests after authentication
- Coordinate with models

Controllers:
- Do **not** know about routing
- Do **not** parse tokens directly
- Assume middleware already validated requests

---

### 6. `models/` – Data Layer
**Responsibility:**
- Define database schemas
- Enforce data structure and constraints
- Communicate with MongoDB via Mongoose

Examples:
- `User` model (email, password hash)
- `Task` model (task text, userId)

---

### 7. `config/` – Configuration & Infrastructure
**Responsibility:**
- Database connection
- External service configuration

Keeps infrastructure concerns separate from application logic.

---

## 🔁 Request Flow (Example: Fetch Tasks)

Client (Browser)
|
| GET /tasks (Authorization: JWT)
v
Routes (task.routes.js)
|
| auth middleware
v
Auth Middleware
|
| jwt.verify()
| req.userId = decoded.userId
v
Task Controller
|
| Task.find({ userId })
v
MongoDB
|
v
Client (JSON response)

---

## 🔐 Authentication Model

- Uses **JWT (JSON Web Tokens)**
- Backend is **stateless**
- No server-side sessions

Flow:
1. User logs in
2. Backend issues a signed JWT
3. Client (Browser) stores token
4. Token is sent with each protected request
5. Middleware validates token and extracts user identity

---

## 🌍 Environment Variables

The backend relies on environment variables for security and flexibility.

Required variables:
* MONGO_URL=your_mongodb_connection_string
* JWT_SECRET=your_secret_key
* PORT=3000 (optional, provided by hosting platform)

Never commit `.env` files to GitHub.

---

## ▶️ Running Locally
npm install

npm start

Backend will be available at: http://localhost:3000
---

## 🚀 Deployment

The backend is designed to run on platforms like:

* Render
* Railway
* Fly.io

Key deployment considerations:

* Uses `process.env.PORT`
* No hardcoded secrets
* Stateless design

---

## 🧠 Design Principles Followed

* **Separation of concerns**
* **Single responsibility per file**
* **Stateless backend**
* **Secure-by-default APIs**
* **Easy extensibility**

---

## 🔮 Future Extensions

This architecture supports easy addition of:

* Stripe payments (webhooks)
* Role-based access control
* Teams / organizations
* Rate limiting
* Input validation
* Audit logging

---

## 📌 Summary

This backend is structured to be:

* Beginner-friendly
* Production-ready
* Easy to reason about
* Scalable for real SaaS use cases

If you understand this architecture, you can build **almost any modern backend system**.

---