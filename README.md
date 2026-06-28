<!-- <div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2800&pause=2000&color=4F9CF9&center=true&vCenter=true&width=600&lines=📝+TaskSpace;MERN+Stack+Task+Tracker" alt="Typing SVG" />

<br/> -->

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20App-4F9CF9?style=for-the-badge)](https://frontend-eight-self-75.vercel.app)
[![Backend API](https://img.shields.io/badge/⚙️%20Backend%20API-Render-00C853?style=for-the-badge)](https://task-tracker-backend-vhix.onrender.com)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Rupam-Hait/Task-Tracker)

<br/>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)

<br/>

> **TaskSpace** is a full-stack task management web app built with the MERN stack.  
> Featuring a sleek glassmorphism dark-theme UI, real-time CRUD, smart filtering, and live deployment.

</div>

---



## ✨ Features

<div align="center">

| 🔧 Feature | 📋 Description |
|:-----------|:--------------|
| ✅ **Full CRUD** | Create, read, update and delete tasks instantly |
| 🎨 **Glassmorphism UI** | Stunning dark-mode design with smooth hover transitions |
| 🔍 **Search & Filter** | Filter by status, priority, or live text search |
| ↕️ **Sorting** | Sort by newest, oldest, or alphabetical order |
| 📊 **Stats Bar** | Real-time counter for total, pending, in-progress & done tasks |
| ✔️ **Form Validation** | Clean client-side validation with clear error messages |
| ⚡ **No Page Refresh** | All UI updates happen dynamically via React state |
| 🔐 **Env Variables** | Secure config via `.env` / `.env.local` files |
| 📱 **Responsive** | Fluid grid layout — works on desktop, tablet, and mobile |
| 🚀 **Deployed** | Live on Vercel + Render + MongoDB Atlas |

</div>

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                    MERN STACK                        │
├──────────────┬──────────────────┬───────────────────┤
│  FRONTEND    │    BACKEND       │    DATABASE        │
│              │                  │                    │
│  React.js    │  Node.js         │  MongoDB Atlas     │
│  Vite        │  Express.js      │  Mongoose ODM      │
│  Axios       │  CORS + dotenv   │                    │
│  Custom CSS  │                  │                    │
│  (Glassmor.) │                  │                    │
├──────────────┴──────────────────┴───────────────────┤
│  DEPLOYMENT                                          │
│  Frontend → Vercel  |  Backend → Render              │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
Task-Tracker/
│
├── 📂 backend/
│   ├── 📂 models/
│   │   └── 📄 Task.js           # Mongoose schema & model
│   ├── 📂 routes/
│   │   └── 📄 tasks.js          # REST API route handlers
│   ├── 📄 server.js             # Express app entry point
│   ├── 📄 .env                  # 🔐 Environment variables (git-ignored)
│   └── 📄 package.json
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📄 TaskForm.jsx  # Add/Edit form with validation
│   │   │   ├── 📄 TaskList.jsx  # Renders the task grid
│   │   │   ├── 📄 TaskItem.jsx  # Individual task card
│   │   │   └── 📄 FilterBar.jsx # Filter, search & sort controls
│   │   ├── 📄 App.jsx           # Root component & state management
│   │   ├── 📄 main.jsx          # React entry point
│   │   └── 📄 index.css         # Glassmorphism stylesheet
│   ├── 📄 index.html
│   ├── 📄 vite.config.js
│   ├── 📄 .env.local            # 🔐 Frontend env (git-ignored)
│   └── 📄 package.json
│
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

![Node](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-v9+-CB3837?style=flat-square&logo=npm&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20Account-4EA94B?style=flat-square&logo=mongodb&logoColor=white)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Rupam-Hait/Task-Tracker.git
cd Task-Tracker
```

---

### Step 2 — Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasktracker?retryWrites=true&w=majority
PORT=5000
```

> 💡 Get your `MONGO_URI` from [MongoDB Atlas](https://www.mongodb.com/atlas) → Connect → Drivers → Node.js

Start the server:

```bash
npm start
# ✅ Server running on http://localhost:5000
# ✅ MongoDB connected
```

---

### Step 3 — Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env.local` file inside `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Start the dev server:

```bash
npm run dev
# ✅ App running on http://localhost:5173
```

---

## 📡 API Reference

**Base URL:** `http://localhost:5000/api/tasks`

### Endpoints

| Method | Endpoint | Description | Status |
|:------:|:---------|:------------|:------:|
| `GET` | `/api/tasks` | Fetch all tasks | ✅ |
| `GET` | `/api/tasks/:id` | Fetch a single task | ✅ |
| `POST` | `/api/tasks` | Create a new task | ✅ |
| `PUT` | `/api/tasks/:id` | Update a task | ✅ |
| `DELETE` | `/api/tasks/:id` | Delete a task | ✅ |

### Query Parameters

```
GET /api/tasks?status=pending&priority=high&sortBy=createdAt&order=desc
```

| Param | Accepted Values | Description |
|:------|:----------------|:------------|
| `status` | `pending` · `in-progress` · `completed` | Filter by task status |
| `priority` | `low` · `medium` · `high` | Filter by priority level |
| `sortBy` | `createdAt` · `priority` · `title` | Field to sort by |
| `order` | `asc` · `desc` | Sort direction |

### Sample Task Object

```json
{
  "_id": "64abc123def456",
  "title": "Build the Task Tracker",
  "description": "Complete the MERN internship assignment",
  "status": "completed",
  "priority": "high",
  "createdAt": "2026-06-28T10:00:00.000Z",
  "updatedAt": "2026-06-28T23:59:00.000Z"
}
```

---

## ☁️ Deployment Guide

### 🔵 Backend → Render

1. Push `backend/` folder to GitHub
2. Go to [render.com](https://render.com) → **New Web Service** → connect your repo
3. Set the following:

   | Setting | Value |
   |:--------|:------|
   | **Build Command** | `npm install` |
   | **Start Command** | `node server.js` |
   | **Env Variable** | `MONGO_URI` = your Atlas URI |

4. Hit **Deploy** and copy your live URL

---

### 🟣 Frontend → Vercel

1. Update `frontend/.env.local`:

   ```env
   VITE_API_URL=https://your-backend.onrender.com/api/tasks
   ```

2. Push `frontend/` folder to GitHub
3. Go to [vercel.com](https://vercel.com) → **Add New Project** → import repo
4. Add Environment Variable in Vercel dashboard:

   | Key | Value |
   |:----|:------|
   | `VITE_API_URL` | `https://your-backend.onrender.com/api/tasks` |

5. Click **Deploy** 🎉

---

## 🌐 Live Links

| Service | URL |
|:--------|:----|
| 🌐 Frontend | [https://frontend-eight-self-75.vercel.app](https://frontend-eight-self-75.vercel.app) |
| ⚙️ Backend API | [https://task-tracker-backend-vhix.onrender.com](https://task-tracker-backend-vhix.onrender.com) |
| 📦 Repository | [https://github.com/Rupam-Hait/Task-Tracker](https://github.com/Rupam-Hait/Task-Tracker) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ for the CollEdge Connect Full Stack Internship**

⭐ If you found this helpful, consider starring the repo!

[![Star on GitHub](https://img.shields.io/github/stars/Rupam-Hait/Task-Tracker?style=social)](https://github.com/Rupam-Hait/Task-Tracker)

</div>
