# 🧠 QuickAI

QuickAI is a fully functional **AI SaaS Application** built with the **PERN stack (PostgreSQL, Express, React, Node.js)**. It offers subscription-based premium AI utilities such as text generation, resume analysis, image manipulation, and more.

**Live Demo:**  
🔗 [Frontend](https://quick-ai-three.vercel.app/)  
🔗 [Backend](https://quick-ai-server-one.vercel.app/)

---

## 📑 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Badges](#badges)
- [Documentation & Extensions](#documentation--extensions)
- [Conclusion](#conclusion)

---

## 🚀 Features

### ✅ General
- User Authentication with **Clerk**
- Subscription billing for premium AI tools
- Serverless **PostgreSQL** (NeonDB)
- Responsive UI built with **TailwindCSS**

### 🤖 AI-Powered Tools
- **Article Generator**: Generate complete articles from a title and length
- **Blog Title Generator**: Create catchy blog titles from keywords
- **Image Generator**: Create images from text prompts
- **Background Remover**: Upload images and get background-removed versions
- **Object Remover**: Remove specified objects from images
- **Resume Analyzer**: Upload your resume for deep AI-driven analysis

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Adamya-Kumar/QuickAI.git
cd QuickAI
```
### 2. Install Dependencies
Frontend (Inside /client folder):
```bash
cd client
npm install
```
Backend (Inside /server folder):
```bash
cd ../server
npm install
```
### 3. Configure Environment
## frontend 
```bash
# Clerk Publishable Key (used for authentication)
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend Base URL
VITE_BASE_URL=<live_link>

```
## backend
```bash
# Server Port
PORT=3000

# Neon PostgreSQL Database Connection String
DATABASE_URL=your_postgresql_database_url

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Gemini AI Key (Optional - if using Google Gemini AI)
GEMINI_API_KEY=your_gemini_api_key

# Clickdrop API Key (for object/background removal)
CLICKDROP_API_KEY=your_clickdrop_api_key

# Cloudinary Credentials (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## ▶️ Usage
### Run Frontend
```bash
cd client
npm run dev
```
### Run Backend
```bash
cd server
npm run dev
```
Your app should now be running locally on the specified ports!
## 📦 Tech Stack
### Frontend Packages
```bash
{
  "@clerk/clerk-react": "^5.33.0",
  "@tailwindcss/vite": "^4.1.11",
  "axios": "^1.10.0",
  "lucide-react": "^0.525.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hot-toast": "^2.5.2",
  "react-markdown": "^10.1.0",
  "react-router-dom": "^7.6.3",
  "tailwindcss": "^4.1.11"
}
```
### Backend Packages
```bash
{
  "@clerk/express": "^1.7.5",
  "@neondatabase/serverless": "^1.0.1",
  "axios": "^1.10.0",
  "cloudinary": "^2.7.0",
  "cors": "^2.8.5",
  "dotenv": "^17.2.0",
  "express": "^5.1.0",
  "multer": "^2.0.1",
  "openai": "^5.9.0",
  "pdf-parse": "^1.1.1"
}
```
## 🤝 Contributing
We welcome contributions from the community! Follow these steps:

### 1.Fork the repository.
### 2.Create a new branch:
```bash
git checkout -b feature-name
```
### 3.Make your changes.
### 4.Commit and push:
```bash
git push origin feature-name
```
### 5.Open a pull request.
