# Product CRUD Application in MERN Stack

## Project Overview

This project is a **CRUD (Create, Read, Update, Delete)** application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It demonstrates how to manage product data, providing a complete solution for building a dynamic product management system with real-time interaction and persistent data storage.

## Features

1. **Create Product**: Users can add new products with details such as name, price, and description.
2. **Read Product**: Displays a list of all products stored in the database with details.
3. **Update Product**: Allows users to modify product information.
4. **Delete Product**: Users can delete a product from the list.
5. **Responsive Design**: The front end is responsive and adapts to different screen sizes.
6. **RESTful API**: The backend supports all CRUD operations via a REST API, enabling easy communication between the client and server.

## Technology Stack

- **Frontend**: React.js (with hooks), CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL database)
- **State Management**: React Context API
- **Deployment**: (Add deployment details if available, e.g., Heroku, Netlify, etc.)

## Installation

### Prerequisites
Ensure you have the following tools installed:

- **Node.js**: [Download Node.js](https://nodejs.org/en/download/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Steps to Set Up Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dhiraj1996/productCRUDinMERN.git
   cd productCRUDinMERN
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following environment variables:
     ```env
     MONGO_URI=<your_mongodb_uri>
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
     The server will run at `http://localhost:5000`.

3. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```
     The frontend will run at `http://localhost:5173`.

4. **Access the Application**:
   Open a browser and go to `http://localhost:5000` to use the product management system.

## API Endpoints

The application includes the following API endpoints for managing products:

| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| GET    | `/api/products` | Retrieve all products          |
| POST   | `/api/products` | Create a new product           |
| GET    | `/api/products/:id` | Retrieve a product by ID     |
| PUT    | `/api/products/:id` | Update a product by ID       |
| DELETE | `/api/products/:id` | Delete a product by ID       |

## Folder Structure

```
productCRUDinMERN/
├── backend/           # Express server and API routes
│   ├── config/        # Database configuration
│   ├── controllers/   # API request handlers
│   ├── models/        # MongoDB models (Product schema)
│   ├── routes/        # API routes
│   ├── .env           # Environment variables
│   └── server.js      # Entry point for backend server
├── frontend/          # React application
│   ├── public/        # Public files (index.html, favicon, etc.)
│   ├── src/           # React components and app logic
│   └── App.js         # Main React app component
└── README.md          # Project documentation
```

## Future Improvements

- Add user authentication for enhanced security.
- Implement pagination for better performance with large datasets.
- Improve UI/UX for better user interaction.

## Contribution

Contributions are welcome! Feel free to fork the project and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
