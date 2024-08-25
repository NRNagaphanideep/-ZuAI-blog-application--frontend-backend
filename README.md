/blog-api # Backend directory
|---db database.db
├── server.js # Express server setup
├── package.json # Node.js dependencies and scripts
├── .env # Environment variables
└── README.md # Backend documentation

/blog-frontend # Frontend directory
├── /public # Public assets (index.html, etc.)
├── /src # Source files
│ ├── /components # React components
│ │ ├── Header.js # Header component
│ │ ├── Footer.js # Footer component
│ │ ├── PostList.js # List view of blog posts
│ │ ├── PostDetail.js # Detail view of a single blog post
│ │ ├── PostForm.js # Form to create/update a blog post
│ ├── /services # Services for API calls
│ │ └── postService.js # Service to handle HTTP requests to backend
│ ├── App.js # Main application component
│ ├── index.js # Entry point for React
├── package.json # React.js dependencies and scripts
├── .env # Environment variables
├── README.md # Frontend documentation
└── Procfile # For deployment on platforms like Heroku
Dependencies :-

Backend (blog-api)

1. express: Web framework for Node.js
2. mongoose: MongoDB object modeling tool
3. cors: Middleware for enabling CORS
4. dotenv: Module to load environment variables from a .env file
5. body-parser: Middleware for parsing request bodies
6. nodemon: Utility to automatically restart the server when code changes (for development)

Frontend (blog-frontend)

1. react: Frontend library for building UI
2. react-dom: Library for DOM-specific methods that can be used with React
3. axios: Promise-based HTTP client for making API requests
4. react-router-dom: For routing and navigation
5. dotenv: Module to load environment variables from a .env file (if needed)

Components

Backend Components :-

1. server.js: Sets up the Express server and connects to MongoDB.
2. models/Post.js: Defines the Mongoose schema for blog posts.
3. routes/posts.js: Contains route handlers for CRUD operations on blog posts.
4. config/db.js: Manages the connection to MongoDB.
5. middleware/errorHandler.js: Custom middleware for handling errors.

Frontend Components :-

1. Header.js: Displays the header of the blog.
2. Footer.js: Displays the footer of the blog.
3. PostList.js: Displays a list of blog posts.
4. PostDetail.js: Displays a single blog post in detail.
5. PostForm.js: Provides a form for creating or updating blog posts.
6. postService.js: Contains methods for making API requests to the backend.

Backend (blog-api)

# Blog API

## Description

This is the backend for the blog application. It provides a RESTful API for managing blog posts.

## Setup

1. Clone the repository.
2. Navigate to the `blog-api` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file and add your MongoDB connection string:
   MONGO_URI=your_mongodb_connection_string
5. start the server :
   npm start

API Endpoints
GET /posts - List all blog posts
GET /posts/:id - Get a specific post by ID
POST /posts - Create a new blog post
PUT /posts/:id - Update an existing post
DELETE /posts/:id - Delete a post

Deployment
To deploy the backend on Heroku:

1. Create a Procfile:

web: node server.js 2. Push the code to Heroku:
git push heroku master

#### **Frontend (`blog-frontend`)**

````markdown
# Blog Frontend

## Description

This is the frontend for the blog application built using React.js class components.

## Setup

1. Clone the repository.
2. Navigate to the `blog-frontend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   npm start
   Deployment
   To deploy the frontend on a cloud platform like Heroku:

5. Create a Procfile:
   web: npm start
6. Push the code to Heroku:
   git push heroku master

Features
Responsive layout with a header, main content area, and footer
List view for displaying blog posts
Detail view for displaying individual blog posts
Form for adding new blog posts with basic validation

### **How to Run Both Frontend and Backend**

1. **Run the Backend:**

   - Navigate to the `blog-api` directory.
   - Install dependencies: `npm install`
   - Start the server: `npm start`
   - The backend should now be running on `http://localhost:5000`.

2. **Run the Frontend:**
   - Open a new terminal.
   - Navigate to the `blog-frontend` directory.
   - Install dependencies: `npm install`
   - Start the development server: `npm start`
   - The frontend should now be running on `http://localhost:3000`.

With the backend and frontend running, you can access the blog application on `http://localhost:3000` and interact with the API on `http://localhost:5000`.

This setup covers all the necessary details to build, run, and deploy the blog application according to the provided requirements.
````
