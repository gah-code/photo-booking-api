# photo-booking-api

Here’s a clean, GitHub-friendly `README.md` for your **Photo Booking API project** with:

- ✅ Chapters for quick linking
- ✅ Technologies used (Vite, Render, Supabase, etc.)
- ✅ Current project state
- ✅ Summary of improvements
- ✅ How to run and test it locally

---

## 📸 Photo Booking API

A simple and extendable Node.js + Express API for managing **photography bookings, packages, and locations** — built for testing and integration with a React front-end.  

Hosted live on **Render** with static assets from **Supabase Storage**.

---

## 📚 Table of Contents

- [🧰 Tech Stack & Services](#-tech-stack--services)
- [🚀 Live API Endpoints](#-live-api-endpoints)
- [📦 Project Structure](#-project-structure)
- [📌 Current Features](#-current-features)
- [✨ Summary of Improvements](#-summary-of-improvements)
- [🔧 Getting Started](#-getting-started)
- [🧪 Testing Locally](#-testing-locally)
- [🗺 Future Enhancements](#-future-enhancements)

---

## 🧰 Tech Stack & Services

- **Node.js + Express** – Backend framework
- **Vite + React** – Frontend for testing components
- **Render** – Hosting the API
- **Supabase** – Public CDN image storage
- **Postman / Hoppscotch** – Manual API testing
- **In-memory data** – Temporary mock DB for testing

---

## 🚀 Live API Endpoints

| Type        | Route                                      | Description                 |
|-------------|--------------------------------------------|-----------------------------|
| GET         | `/api/bookings`                            | List all bookings           |
| POST        | `/api/bookings`                            | Create a new booking        |
| PATCH       | `/api/bookings/:id`                        | Update a booking            |
| GET         | `/api/locations`                           | Get all photography spots   |
| GET         | `/api/packages`                            | Get all available packages  |
| POST        | `/api/packages`                            | Create a new package        |
| PATCH       | `/api/packages/:id`                        | Update a package            |
| GET         | `/api/packages/:id`                        | Fetch a specific package    |

> 🌐 Base URL: `https://photo-booking-api.onrender.com/api`

---

## 📦 Project Structure

```bash
photo-booking-api/
├── routes/
│   ├── bookings.js
│   ├── locations.js
│   └── packages.js
├── server.js
├── .env.example
├── .gitignore
└── README.md
```

---

## 📌 Current Features

- ✅ **Bookings**: Create, fetch, update bookings
- ✅ **Packages**: Custom photo packages with price, season, sold-out support
- ✅ **Locations**: Static photography locations with images and descriptions
- ✅ JSON-based in-memory data (no DB setup required)
- ✅ Integration-ready for Vite + React frontend
- ✅ Styled API responses for frontend rendering

---

## ✨ Summary of Improvements

| Area            | Before                            | After (Now)                                       |
|-----------------|------------------------------------|--------------------------------------------------|
| 📦 Packages     | Static only, no create/update     | Supports `POST`, `PATCH`, season array, soldOut  |
| 📍 Locations    | None                              | `GET` added, structured for menus                |
| 🧾 Bookings     | Read only                         | Now supports creation + update with validation   |
| 📄 Readability  | Raw structure                     | Cleaner route logic, consistent formatting       |
| 🌐 Deployments  | Local only                        | Deployed on Render with public API URL           |
| 🔧 Dev UX       | No docs, no structure             | Full README + `.env.example` + modular routes    |

---

## 🔧 Getting Started

```bash
# 1. Clone the project
git clone https://github.com/your-username/photo-booking-api.git
cd photo-booking-api

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

> Local API will be available at: `http://localhost:3000/api`

---

## 🧪 Testing Locally

You can test the API using:

### 🧪 Postman / Hoppscotch

- `POST /api/packages`
- `PATCH /api/packages/:id`
- `GET /api/bookings`

### 🧪 Example POST Body

```json
{
  "name": "Sunset Beach Package",
  "unitPrice": 200,
  "imageUrl": "https://example.com/image.jpg",
  "soldOut": false,
  "season": ["july", "august"]
}
```

---

## 🗺 Future Enhancements

- 🔐 Add authentication (JWT or Supabase Auth)
- 💾 Migrate to a real database (Supabase, MongoDB, or PostgreSQL)
- 🧑‍💻 Admin dashboard to manage bookings and packages
- 🖼 Image upload using Supabase or Cloudinary
- 📤 Email notifications for bookings

---

> Built with ❤️ by Gilbert Haro
