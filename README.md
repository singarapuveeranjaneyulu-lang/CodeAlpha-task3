# Project Management Tool

A collaborative project management application similar to Trello and Asana.

## Features

- User Authentication
- Create Projects
- Create Tasks
- Assign Tasks
- Task Status Tracking
- Comments on Tasks
- JWT Authentication
- MongoDB Database

## Tech Stack

Frontend:
- React
- Axios
- React Router

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Installation

### Backend

cd backend

npm install

npm run dev

### Frontend

cd frontend

npm install

npm start

## API Endpoints

POST /api/auth/register

POST /api/auth/login

POST /api/projects

GET /api/projects

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

POST /api/comments

GET /api/comments/:taskId
