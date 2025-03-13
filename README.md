# REST API CRUD with Express.js & PostgreSQL

## 📌 Overview

This project is a REST API built using **Node.js, Express.js, and PostgreSQL**, featuring authentication with JWT and Swagger documentation.

---

## 📂 Features

- User authentication (Login system with JWT)
- CRUD operations for user management
- Search functionality
- Authorization middleware for protected routes
- API documentation with Swagger

---

## 🛠 Installation & Setup

### 1️⃣ Prerequisites

Ensure you have installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### 2️⃣ Clone the Repository

```sh
git clone https://github.com/blackjac7/TEST_BACKEND-DEVELOPER.git
cd TEST_BACKEND-DEVELOPER
```

### 3️⃣ Install Dependencies

```sh
npm install
```

### 4️⃣ Setup Environment Variables

Create a .env file in the root directory and add the following:

```sh
DB_USER=your_db_username
DB_PASS=your_db_password
DB_HOST=localhost
DB_NAME=user_test
DB_PORT=your_db_port
SECRET=your_secret_key
```

Replace username, password, host, port, and your_secret_key with your actual credentials.

### 5️⃣ Database Setup

Open PostgreSQL and execute:

```sql
CREATE DATABASE user_test;
```

Then, import the database schema using:

```sh
psql -U your_username -d user_test -f dump-user_test-202503132352.sql
```

Ensure the file dump-user_test-202503132352.sql is in your project root directory.
Alternatively you can manually execute the script to sql editor in database

### 6️⃣ Start the Server

```sh
npm start
```

Server runs on: http://localhost:3000

### 7️⃣ Access API Documentation

Swagger UI: http://localhost:3000/api-docs

## 🧪 API Endpoints

### 🔹 Authentication

| Method | Endpoint              | Description             |
| ------ | --------------------- | ----------------------- |
| POST   | /api/v1/auth/login    | User login to get token |
| POST   | /api/v1/auth/register | User register to login  |

### 🔹 User Management

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | /api/v1/users     | Get all users (Requires Auth) |
| PUT    | /api/v1/users/:id | Update user (Requires Auth)   |
| DELETE | /api/v1/users/:id | Delete user (Requires Auth)   |

### 🔹 Search User

| Method | Endpoint                  | Description                    |
| ------ | ------------------------- | ------------------------------ |
| GET    | /api/v1/search/name/:name | Search by Name (Requires Auth) |
| GET    | /api/v1/search/nim/:nim   | Search by NIM (Requires Auth)  |
| GET    | /api/v1/search/ymd/:ymd   | Search by YMD (Requires Auth)  |
