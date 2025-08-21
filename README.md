# NestJS Microservices Example (API Gateway + Task & User Services)

This project demonstrates how to build a **microservices architecture** using **NestJS** with:
- **API Gateway** (handles REST API requests, communicates with microservices via Redis).
- **Task Microservice** (manages tasks).
- **User Microservice** (manages users).
- **Redis** as the message broker.

---

## 📂 Project Structure
```
nestjs-microservices-example/
│── api-gateway/ # API Gateway (REST + Swagger)
│── task-service/ # Task Microservice
│── user-service/ # User Microservice
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd nestjs-microservices-example
```
### 2️⃣ Install Dependencies

For each service (api-gateway, task-service, user-service), install dependencies:
 ```bash
cd api-gateway && npm install
cd ../task-service && npm install
cd ../user-service && npm install
```
### 3️⃣ Start Redis

You need Redis running locally. If you have Docker installed, simply run:

```bash
docker run -d --name redis -p 6379:6379 redis
```
### 4️⃣ Start the Services

Run each service in a separate terminal:
```bash
# Terminal 1 - API Gateway
cd api-gateway
npm run start:dev

# Terminal 2 - Task Microservice
cd task-service
npm run start:dev

# Terminal 3 - User Microservice
cd user-service
npm run start:dev
```

### 📖 API Documentation (Swagger)

Swagger is enabled in the API Gateway.

Once the gateway is running, open:
```bash
http://localhost:3000/api
```
## 📌 API Endpoints
### 📝 Task Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/tasks`     | Create a new task |
| GET    | `/tasks`     | Get all tasks     |
| DELETE | `/tasks/:id` | Delete a task     |

### 👤 User Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/users`     | Create a new user |
| GET    | `/users`     | Get all users     |
| DELETE | `/users/:id` | Delete a user     |

## 🛠️ Tech Stack
- NestJS: Framework
- Redis: Message Broker
- Swagger: API Documentation

