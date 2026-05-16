# Backend Skeleton Project

A skeleton for backend projects using Express, Socket.io, and Winston logger.

## Getting Started

### 1. Environment Variables (.env)
Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
API_PREFIX=/api
LOG_LEVEL=silly
mysql2_HOST=localhost
mysql2_USER=root
mysql2_PASSWORD=your_password
mysql2_DATABASE=your_db_name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run start-dev
```

## Features
- **Express**: Modern web framework for Node.js.
- **Socket.io**: Real-time bidirectional event-based communication.
- **Winston**: Versatile logging library with support for multiple transports.
- **MySQL2**: MySQL client for Node.js with promise support.
- **Celebrate/Joi**: Validation middleware for Express.
