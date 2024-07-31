Task Manager
This is a task management application similar to Trello, built with Next.js, TypeScript, Node.js, Express, and MongoDB. The application allows users to create, manage, and organize tasks using a drag-and-drop interface.

Features
User Authentication
Task Management
Drag and Drop Functionality
Data Persistence with MongoDB
State Management with Redux Toolkit

Technologies Used
Frontend: Next.js, React, TypeScript, CSS, MUI
Backend: Node.js, Express
Database: MongoDB
State Management: Redux Toolkit , Context API
Drag and Drop: react-beautiful-dnd

Installation
Clone the repository:
git clone https://github.com/your-username/task-manager.git
cd task-manager

Install dependencies for both the frontend and backend:

# Install frontend dependencies
cd client
npm install
Create a .env.local file in the server directory with the following content:
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001


# Install backend dependencies
cd ../server
npm install
Create a .env file in the server directory with the following content:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3001


Start the backend server:
npm start
The backend server will run on http://localhost:3001.


Start the frontend server:
npm run dev
The frontend server will run on http://localhost:3000.

