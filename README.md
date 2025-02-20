# Backend API Design Challenges

This repository contains the implementation of various backend API challenges, including cross-border payment processing, user authentication with JWT, and task queue management for asynchronous processing. Below are the problem statements, requirements, and bonus features for each task.

## 1. Building an API for Cross-Border Payments

### Problem:
You are tasked with implementing an API endpoint for processing cross-border payments. The API should receive a payment request with details about the sender, receiver, payment amount (in USD), and target currency. The endpoint should convert the USD amount into the target currency using an external exchange rate API (you can mock this for the exercise).

### Requirements:
- **Validate the input**: Ensure the provided USD amount and target currency are valid.
- **Fetch an exchange rate**: Mock the exchange rate data for conversion.
- **Return the converted amount**: Provide the converted amount in the target currency.
- **Error Handling**: Implement proper error handling for invalid input or external API failure.

### Bonus:
- **Caching**: Implement caching for the exchange rates to avoid unnecessary calls to the external API within a certain time window (e.g., 1 hour).

---

## 2. Design a User Authentication System with JWT

### Problem:
You need to implement a simple user authentication system for **Earna** using JWT (JSON Web Tokens). The system should include the following:

- **POST /login** endpoint: Accepts a username and password, and returns a JWT token if authentication is successful.
- **Middleware**: A middleware that checks if the provided JWT token is valid before accessing a protected route (e.g., **GET /user-profile**).
- **Mock User Data**: Store user credentials (username and password) in memory for simplicity.

### Requirements:
- **POST /login** endpoint: Validate the credentials and issue a JWT token if authentication is successful.
- **GET /user-profile** endpoint: Protect this route with JWT token validation.
- **Token Expiration**: Implement token expiration and a mock refresh token flow.

### Bonus:
- **Hashed Passwords**: Add functionality to store users’ passwords securely using a hashing algorithm like **bcrypt**.

---

## 3. Design a Simple Task Queue for Asynchronous Processing

### Problem:
**Earna** needs a backend system to handle asynchronous tasks such as processing payments or sending notifications. Design and implement a simple task queue that allows tasks to be queued and processed in the background.

### Requirements:
- **In-memory task queue**: Implement a basic queue where tasks can be enqueued with a unique ID and status (e.g., “queued”, “in-progress”, “completed”).
- **Worker**: Implement a worker that processes the tasks. For simplicity, use `setTimeout` to simulate processing delay.
- **Task Status**: Provide a way to retrieve the status of a task by its ID.

### Bonus:
- **Retry Mechanism**: Implement a retry mechanism in case a task fails. Mock failure for some tasks to demonstrate the retry functionality.

---

## Setup Instructions

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/backend-api-challenges.git

cd backend-api-challenges
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```