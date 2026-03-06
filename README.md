# 💰 Payventory: Autonomous Agentic Payment System

**Payventory** is an AI-powered inventory management platform that automatically monitors stock levels, predicts demand, triggers restocking, and executes supplier payments using autonomous agents and blockchain technology (Polygon Account Abstraction).

---

## 🚀 Key Features
- **🧠 AI Demand Prediction**: Uses historical data to forecast stock requirements for the next 7 days.
- **🤖 Autonomous Agents**: Self-executing restock cycles based on pre-set human rules.
- **⛓️ Agentic Payments**: Executes secure payments via Polygon Smart Accounts (ERC-4337).
- **📊 Real-time Dashboard**: Live monitoring of inventory health, spent budget, and recent decisions.
- **📱 WhatsApp Notifications**: Receive instant updates via Twilio whenever a restock occurs.
- **🔐 Security Layer**: Budget-aware guards and transaction simulation before execution.

---

## 🛠️ Tech Stack
- **Frontend**: React + Vite + Lucide Icons + Recharts
- **Backend**: Node.js + Express + Mongoose
- **ML Engine**: Python + FastAPI + Pandas + APScheduler
- **Blockchain**: Polygon (Amoy Testnet) + ZeroDev SDK (Account Abstraction)
- **Database**: MongoDB (Atlas)

---

## 📦 Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/Avirup1705/Autonomous_Agentic_payment_system.git
cd Autonomous_Agentic_payment_system
```

### 2. Environment Variables
Create a `.env` file in `src/backend/.env` with the following:
```env
# MongoDB
MONGO_URI=your_mongodb_uri

# Web3
ZERODEV_PROJECT_ID=your_project_id
SESSION_PRIVATE_KEY=your_key
POLYGON_RPC_URL=https://rpc-amoy.polygon.technology
SMART_ACCOUNT_ADDRESS=0x...
SUPPLIER_ADDRESS=0x...

# Notifications
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_WHATSAPP_NUMBER=...
USER_WHATSAPP_NUMBER=...
```

### 3. Run the Services

#### A. The Payventory Engine (Python ML)
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run the API
python -m uvicorn src.ml.api:app --reload --port 8000
```

#### B. The Backend (Node.js)
```bash
cd src/backend
npm install
node server.js
```

#### C. The Frontend (React)
```bash
cd src/frontend/Autonomous_Agentic_payment_system
npm install
npm run dev
```

---

## 🤝 How to Contribute
We welcome contributions to Payventory! Here’s how you can help:

1. **Fork the Repository**: Create your own copy of the project.
2. **Create a Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Your Changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the Branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**: Describe your changes and why they are needed.

Please ensure your code follows the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---

## 📈 Roadmap
Check out the [ROADMAP.md](./ROADMAP.md) for future plans, including multi-warehouse support and on-chain decision auditing.

---

## 📜 License
Licensed under the **Apache License 2.0**. See [LICENSE](./LICENSE) for details.
