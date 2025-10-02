# Dashboard Analytics

A full-stack trading analytics dashboard built with React and Node.js.

## Project Structure

```
Dashboard-Analytics/
├── client/          # React frontend
├── server/          # Node.js backend
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Dashboard-Analytics
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```
Server runs on http://localhost:3001

2. Start the frontend (in a new terminal)
```bash
cd client
npm start
```
Client runs on http://localhost:3000

## Features

- Trading analytics dashboard
- Real-time data visualization
- Performance metrics tracking
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Recharts for data visualization
- React Router for navigation

### Backend
- Node.js
- Express.js
- CORS enabled for cross-origin requests

## API Endpoints

- `GET /analytics` - Fetch trading analytics data

## APP Screenshots

![App Screenshot](screenshots/Screenshot%202025-10-03%20at%2012.45.40 AM.png)
![App Screenshot](screenshots/Screenshot%202025-10-03%20at%2012.45.54 AM.png)
![App Screenshot](screenshots/Screenshot%202025-10-03%20at%2012.46.01 AM.png)
![App Screenshot](screenshots/Screenshot%202025-10-03%20at%2012.46.09 AM.png)
