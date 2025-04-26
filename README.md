# S67_keerthana_Book_N_click

📸 BookMyClick – Connecting Photographers & Clients
BookMyClick is a full-stack platform connecting freelance photographers cd with clients. Users can showcase portfolios, schedule bookings, and manage payments. Inspired by platforms like Scoopshot, it helps clients find professionals for their creative needs.
# 📸 BookMyClick - Capstone Project

BookMyClick is a full-stack platform that connects **photographers** with clients. It allows users to **showcase portfolios**, **book talent**, **message**, and **review services**.

---

## 📝 Project Idea (Brief)

A creative hiring platform for media professionals. Photographers & editors can create profiles, upload their work, and manage bookings. Clients can browse, book, and communicate easily.

---

## 🗓️ Day-by-Day Plan (28 Days)

| Day | Task |
|-----|------|
| 1 | Setup GitHub repo, README, low-fi wireframes |
| 2 | Frontend with Vite + Tailwind, setup routes |
| 3 | Backend with Express, DB schema (User, Project) |
| 4 | Auth: JWT + bcrypt + cookies (Login/Signup) |
| 5 | Role-based Auth Middleware |
| 6 | Build Home Page & Landing Sections |
| 7 | Photographer Profile Upload (Cloudinary) |
| 8 | Project Gallery UI & API |
| 9 | Booking API with Calendar feature |
| 10 | Booking UI - Photographer side |
| 11 | Booking UI - Client side |
| 12 | Contact/Messaging API setup |
| 13 | Message UI & real-time update (Socket.io optional) |
| 14 | Implement Reviews & Ratings |
| 15 | Profile Page - Edit Info |
| 16 | Job Listing Section |
| 17 | UI Polish: Animations, UX |
| 18 | Mobile Responsive Design |
| 19 | Frontend Protected Routes |
| 20 | Backend Validation + Error handling |
| 21 | Deployment Prep: Netlify/Vercel + Render |
| 22 | .env Setup & secure routes |
| 23 | Basic tests |
| 24 | Review all endpoints |
| 25 | Write README documentation |
| 26 | Record demo video |
| 27 | Final GitHub cleanup |
| 28 | Submit project 🚀 |

---

## 🛠 Tech Stack

- **Frontend:** React (Vite), TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Auth:** JWT, bcrypt, HTTPOnly cookies  
- **Storage:** Cloudinary  
- **Payments:** Razorpay (optional)  
- **Deployment:** Netlify + Render  
...
---

Day 1 

Concept Covered: Manage All Daily Tasks & Project Milestones using GitHub Projects
For this concept, I have created a GitHub Projects Board that helps me:

Plan my daily goals

Track progress across backend and frontend development

Day 2

Written all Schema required in Model folder

Day 3

Concept: Database Read and Write Performed
This task demonstrates successful implementation of database read and write operations.

🔧 What I Did:
Connected the Express server to MongoDB using Mongoose.
 title or description  
- `Controllers/ReviewRouter.js` – PUT to edit review/rating  

Created a Photographer schema to represent a photographer’s data.

Implemented two API routes:

POST /photographer: Adds a new photographer to the database.

GET /photographer: Fetches all photographers from the database.

Used proper error handling for both routes.
Files Involved:
Model/PhotographerSchema.js – Mongoose schema definition.
Controllers/photographerRouter.js – Contains GET and POST API logic.

Day4

Post Api implement to all Schema .

Files Changed:
Controllers/photographerRouter.js – Contains GET and POST API logic.

Controllers/BookingRouter.js – Contains  POST API logic.

Controllers/ProjectRouter.js -Contains  POST API logic.

Controllers/ReviewRouter.js - Contains  POST API logic.

Day 5
Implement   GET API

Controllers/photographerRouter.js – Contains GET  API logic.

Controllers/BookingRouter.js – Contains  GET API logic.

Controllers/ProjectRouter.js -Contains  GET API logic.

Controllers/ReviewRouter.js - Contains  GET API logic.

Controllers/PaymentRouter.js -  Contains  GET API logic.



Request an AI review by @CodiumAI-Agent /review


Day 6:

Post API implemented:


Controllers/photographerRouter.js – Contains POST  API logic.

Controllers/BookingRouter.js – Contains  POST API logic.

Controllers/ProjectRouter.js -Contains  POST API logic.

Controllers/ReviewRouter.js - Contains  POST API logic.

Controllers/PaymentRouter.js -  Contains  POST API logic.

Day 7:

Implemented relation between entities in database:

file changed: Model/bookSchema.js


Day 8:

Initialised Frontend for the project