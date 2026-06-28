# TaskSpace 📝 (MERN Task Tracker)

TaskSpace is a modern, responsive, and high-fidelity MERN stack Task Tracker application. Built with a beautiful glassmorphism dark-theme layout, it features complete CRUD task management, advanced status and priority badges, custom search, and dynamic sorting/filtering controls.

---

## 🚀 Live Deployments

* 🌐 **Frontend Application**: [https://frontend-eight-self-75.vercel.app](https://frontend-eight-self-75.vercel.app)
* ⚙️ **Backend REST API**: [https://task-tracker-backend-vhix.onrender.com](https://task-tracker-backend-vhix.onrender.com)

---

## ✨ Features

- **Full CRUD Support**: Create, read, update, and delete tasks instantly.
- **Form Validation**: Clean validation error handling for inputs.
- **Glassmorphism UI**: High-fidelity dark mode styling with smooth hover transitions.
- **Filtering & Search**: Filter tasks by Status (Pending, In Progress, Completed), Priority (Low, Medium, High), or dynamic text search.
- **Sorting**: Sort tasks by Date (Newest/Oldest) or Alphabetical order.
- **Dynamic Stats Bar**: Real-time counter of total, pending, in-progress, and completed tasks.
- **Responsive Layout**: Fluid grid design that resizes elegantly for desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

* **Frontend**: React, Vite, Axios, Custom CSS (Glassmorphic theme)
* **Backend**: Node.js, Express.js, Cors, Dotenv
* **Database**: MongoDB Atlas (Mongoose Object Modeling)
* **Hosting**: Vercel (Frontend), Render (Backend)

---

## ⚙️ Local Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas account

### 1. Clone & Set Up Directory
```bash
git clone https://github.com/Rupam-Hait/Task-Tracker.git
cd Task-Tracker
```

### 2. Configure Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a `.env` file and add your MongoDB connection string and port:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasktracker?retryWrites=true&w=majority
   PORT=5000
   ```
3. Install dependencies and start the backend:
   ```bash
   npm install
   npm start
   ```

### 3. Configure Frontend
1. Open a new terminal in the project root and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Create a `.env.local` file and add the API endpoint:
   ```env
   VITE_API_URL=http://localhost:5000/api/tasks
   ```
3. Install dependencies and start the frontend Vite server:
   ```bash
   npm install
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/`.

---

## 📂 Project Directory Structure

```
task-tracker/
├── backend/
│   ├── models/Task.js        # Mongoose Schema
│   ├── routes/tasks.js       # Express endpoints & query filters
│   ├── server.js             # Express server entry point
│   └── package.json          # Backend script configurations
├── frontend/
│   ├── src/
│   │   ├── components/       # Form, List, and Task Card components
│   │   ├── App.jsx           # Main state manager & dashboard layout
│   │   ├── index.css         # Glassmorphism UI stylesheet
│   │   └── main.jsx          # Vite React mounting point
│   ├── package.json          # Frontend packages
│   └── vite.config.js
└── render.yaml               # Render Infrastructure Blueprint file
```
