# Project Roadmap

This roadmap outlines the development path for the **AI Autonomous Procurement System**, transforming the hackathon prototype into a scalable open-source platform.

---

# Version 1.0 (Hackathon Submission)

Current implemented features:

- AI-based procurement decision engine
- Inventory management system
- Supplier demand processing
- Smart Account with fixed user budget
- Automated purchasing logic
- Blockchain payment simulation using POL tokens
- React + Tailwind frontend dashboard

---

# System Workflow (Current Architecture)

```mermaid
flowchart TD

A[Supplier Demand] --> B[Inventory Check]

B --> C{Inventory Sufficient?}

C -->|Yes| D[No Purchase Required]

C -->|No| E[AI Procurement Decision]

E --> F[Fetch Market Price]

F --> G{Smart Account Balance Enough?}

G -->|No| H[Purchase Blocked]

G -->|Yes| I[Execute Purchase]

I --> J[POL Payment Transaction]

J --> K[Update Inventory]

K --> L[Update Smart Account Balance]

AI Demand Forecasting
Future AI improvements will include:
Predicting supplier demand before it occurs
Market price trend analysis
Intelligent purchasing timing
Flow:
flowchart TD

A[Historical Demand Data] --> B[AI Forecast Model]

B --> C[Predicted Future Demand]

C --> D[Procurement Planning]

D --> E[Optimized Purchase Timing]

Smart Contract Payment System
Upgrade the blockchain system to use smart contracts for secure payments.

flowchart TD

A[AI Purchase Decision] --> B[Send Payment to Smart Contract]

B --> C[Supplier Confirmation]

C --> D[Release POL Payment]

D --> E[Record Transaction on Blockchain]

Advanced Dashboard
Planned UI improvements:
Real-time analytics
Inventory visualization
Smart account monitoring
AI decision transparency
Known Limitations
Current technical limitations include:
Basic AI decision logic
Limited blockchain transaction simulation
No predictive analytics yet
UI dashboard requires improvements
These will be addressed in future versions.
Call for Contributors
We are looking for contributors in the following areas:
AI / Machine Learning
Demand prediction models
Procurement optimization
Blockchain Development
Smart contracts
Web3 integration
Frontend Development
React dashboard improvements
Data visualization
Backend Development
API architecture
Database optimization
Long-Term Vision
The project aims to become a fully autonomous procurement platform capable of:
Predicting supply demand
Automatically managing inventory
Executing secure blockchain payments
Operating within predefined financial constraints
Potential applications include:
enterprise supply chain systems
financial procurement automation
decentralized financial logistics