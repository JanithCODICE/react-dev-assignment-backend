# React Dev Assignment Backend

This repository contains the backend code for the React Dev Assignment. It is built using Node.js and Express.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-dev-assignment-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd react-dev-assignment-backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Server

To start the server, run:
```sh
npm start
```

The server will be running on `http://localhost:9000`.

## API Endpoints

### GET /api/v1/users
- Description: Retrieve a list of users.
- Request: accepts a query parameter for page
- Response: JSON array of items and pagination data.

### POST /api/v1/auth/login
- Description: User login endpoint.
- Request Body: JSON object with user credentials.
- Response: JSON object of the user and session data.

