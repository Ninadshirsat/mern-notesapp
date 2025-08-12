# 📝 MERN Stack Notes App

A full-stack web application for **creating, reading, updating, and deleting** personal notes.  
Built with the **MERN stack** — MongoDB, Express.js, React, and Node.js

**🌐 Live Demo:** [https://mern-notesapp-ysu9.onrender.com]

-

## 🚀 Features

- 🗂 **CRUD Operations** — Create, read, update, and delete personal notes.
- 📱 **Responsive Design** — Works seamlessly across devices.
- 🎨 **Modern UI** — Clean, intuitive interface built with React.

---

## 🛠 Technologies Used

**Frontend:** React, HTML, Tailwind-CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB

---

## ⚙️ Installation

### **Prerequisites**

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### **Steps**

1. **Clone the repository**

```bash
  git clone https://github.com/Ninadshirsat/mern-notesapp.git
  cd mern-notesapp
```

2. **Install backend dependencies**

```bash
  npm install
```

3. **Install frontend dependencies**

```bash
   cd frontend
   npm install
   cd ..
```

4. **Set up environment variables**
   Create a .env file in the root folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. **Start the backend server**

```bash
   npm start
```

6. **Start the frontend application**

```bash
   cd frontend
   npm start
```

**💻 Usage:**
**Local Development:**
Open your browser and go to:
[http://localhost:3000]

**Live Deployment:**
Visit the deployed app here:
[https://mern-notesapp-ysu9.onrender.com]

Create, edit, or delete your notes.

**📡 API Documentation**
Base URL: [http://localhost:5000/api]

Notes Routes:
Method Endpoint Description
GET /notes Get all notes
POST /notes Create a new note
PUT /notes/:id Update a note
DELETE /notes/:id Delete a note

🤝 Contributing
**To contribute:**

1. **Fork the project.**

2. **Create your feature branch:**

```bash
   git checkout -b feature/AmazingFeature
```

3. **Commit your changes:**

```bash
   git commit -m 'Add some AmazingFeature'
```

4. **Push to the branch:**

```bash
   git push origin feature/AmazingFeature
```

📜 License
This project is licensed under the MIT License — see the LICENSE file for details.
