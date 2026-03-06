# Architecture Overview: Payventory

Payventory is an AI-powered inventory management platform designed around a robust microservices architecture. It combines a modern React frontend with a Node.js backend for traditional operations and blockchain interactions, while delegating heavy machine learning computations and agentic decision-making to a dedicated Python engine.

---

## 🏗️ System Components

The system is composed of three primary services:

1.  **Frontend (React + Vite)**
    *   **Role**: Provides the user interface, real-time dashboards, and control panels.
    *   **Key Tech**: React, React Router, Tailwind CSS (implied via styling patterns), Recharts (for analytics), Lucide Icons.
    *   **Responsibilities**: Rendering inventory status, visualizing ML predictions, managing authentication state, and triggering manual operations.

2.  **Backend (Node.js + Express)**
    *   **Role**: The central orchestrator and data gateway.
    *   **Key Tech**: Express.js, Mongoose (MongoDB), Web3.js / Ethers.js, ZeroDev SDK.
    *   **Responsibilities**:
        *   Managing the MongoDB database (Users, Inventory data).
        *   Handling authentication (JWT).
        *   Executing blockchain transactions via Polygon Account Abstraction (ERC-4337 smart accounts).
        *   Serving as a proxy between the Frontend and the ML Engine.

3.  **ML Engine & Autonomous Agents (Python + FastAPI)**
    *   **Role**: The "brain" of Payventory, responsible for forecasting and autonomous actions.
    *   **Key Tech**: FastAPI, Pandas, APScheduler (for cron jobs), Scikit-Learn/Prophet (for predictions).
    *   **Responsibilities**:
        *   Running daily/hourly cron jobs to analyze inventory levels.
        *   Training models on historical sales data to predict future demand.
        *   Triggering external actions (e.g., calling the Backend to execute a payment or sending Twilio WhatsApp alerts) when stock falls below predicted thresholds.

---

## 🔄 Data Flow & Interaction

The following Mermaid sequence diagram illustrates a typical autonomous restock cycle and payment flow.

```mermaid
sequenceDiagram
    participant FE as Frontend (React)
    participant BE as Backend (Node.js)
    participant ML as ML Engine (Python)
    participant DB as MongoDB Atlas
    participant BC as Polygon Network (ZeroDev AA)
    participant WA as Twilio (WhatsApp)

    %% Periodic ML Check
    Note over ML: APScheduler Job Runs (e.g., Daily)
    ML->>DB: Fetch current inventory & historical sales
    DB-->>ML: Return data
    Note over ML: Train model & predict next 7 days demand
    
    %% Decision Making
    alt Predicted Demand > Current Stock
        Note over ML: Threshold breached! Restock required.
        ML->>BE: POST /api/trigger-restock (Agent Action)
        
        %% Backend Orchestration
        BE->>DB: Verify budget rules & user constraints
        DB-->>BE: Rules validated
        
        %% Blockchain Execution
        Note over BE: Initialize Smart Account (ZeroDev)
        BE->>BC: Execute transaction (Pay Supplier)
        BC-->>BE: Transaction Hash (TxHash)
        
        %% Post-Transaction Updates
        BE->>DB: Update inventory stock levels
        BE->>WA: Send WhatsApp alert with TxHash
        BE-->>ML: 200 OK (Action Completed)
    end
    
    %% Frontend Polling/WebSocket
    FE->>BE: GET /api/inventory
    BE-->>DB: Fetch updated data
    DB-->>BE: Return data
    BE-->>FE: Return JSON (Dashboard Updates)
```

---

## 🔐 Security Context

-   **Authentication**: The Frontend issues JWT tokens upon login, which are required for protected Backend routes.
-   **Blockchain execution**: Restock payments are non-custodial. The backend uses Account Abstraction (ZeroDev) to execute gasless or sponsored transactions representing the user's intent, governed by the smart contract rules.
-   **Agent Boundaries**: The Python ML Engine cannot directly execute payments. It must submit a request to the Node.js backend, which enforces budget constraints before executing the transaction on-chain.
