
# 👤 User Management API

This is a simple RESTful API built with **TypeScript**, **Node.js**, **Express**, and **MongoDB** (via **Mongoose**). It allows for basic CRUD operations on users.

---

## 📁 Project Structure

```

src/
├── config/           # MongoDB connection
├── controllers/      # Route logic for user endpoints
├── interfaces/       # TypeScript interfaces
├── models/           # Mongoose user schema
├── routes/           # Express route definitions
├── app.ts            # Express app setup
└── server.ts         # Server entry point

````

---

## 🚀 Features

- Create a user
- Get all users
- Get a user by ID
- Update a user
- Delete a user

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🛠️ Installation

1. **Clone the repo:**

```bash
git clone https://github.com/ESRAILHAQUE/users-api.git
cd user-api
````

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file in the root directory:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/userdb
```

4. **Run in development:**

```bash
npm run dev
```

5. **Build and run for production:**

```bash
npm run start
```

---

## 🧪 API Endpoints

Base URL: `http://localhost:5000/api/users`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/get-users`      | Get all users     |
| GET    | `/getSingleUser:id`   | Get user by ID    |
| POST   | `/create-user`      | Create a new user |
| PUT    | `/updateUser:id`   | Update user by ID |
| DELETE | `/deleteUser:id`   | Delete user by ID |

---

## 🧾 Sample POST Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 28
}
```

---

## ✅ License

MIT

---

## 👨‍💻 Author

Developed by [Esrail Haque](https://github.com/ESRAILHAQUE)


