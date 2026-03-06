# API Reference

This document outlines the REST APIs exposed by both the Node.js Backend and the Python ML Engine.

---

## 🟢 Node.js Backend API

The Node backend runs on port `3000` (default: `http://localhost:3000`). It serves as the primary gateway for the frontend.

### Authentication

#### `POST /api/auth/register`
Creates a new user account.
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**: `201 Created` | `{ "success": true, "token": "jwt_string", "user": {...} }`

#### `POST /api/auth/login`
Authenticates a user and returns a JWT.
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Response**: `200 OK` | `{ "success": true, "token": "jwt_string", "user": {...} }`

### Inventory Management

*(Requires `Authorization: Bearer <token>` header depending on route protection level)*

#### `GET /api/inventory`
Retrieves the current inventory items.
- **Response**: `200 OK` | Array of inventory objects with current stock, min/max thresholds, etc.

#### `POST /api/inventory/add`
Adds a new item to the inventory.
- **Body**: `{ "name": "Item A", "initialStock": 100, "price": 10.50 }`

#### `POST /api/trigger-restock`
**Internal/Agent Route:** Called by the ML engine to initiate a blockchain payment for restocking.
- **Body**: `{ "itemId": "123", "amountRequired": 50 }`
- **Response**: `200 OK` | `{ "success": true, "txHash": "0xABC..." }`

---

## 🐍 Python ML Engine API

The Python FastAPI server runs on port `8000` (default: `http://localhost:8000`).

#### `GET /health`
Basic health check for the ML engine.
- **Response**: `200 OK` | `{ "status": "healthy" }`

#### `POST /predict`
Generates a demand forecast based on provided historical data.
- **Body**: 
  ```json
  {
    "historical_data": [10, 15, 20, 18, 25, 30],
    "days_to_predict": 7
  }
  ```
- **Response**: `200 OK` | `{ "predictions": [32, 35, 31, ...] }`

#### `POST /agent/run-cycle`
Manually triggers the autonomous agent to evaluate inventory, run predictions, and decide if a restock call (to the backend) is necessary.
- **Response**: `200 OK` | `{ "cycle_run": true, "actions_taken": 1 }`
