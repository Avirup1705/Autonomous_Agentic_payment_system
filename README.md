# 💰 Payventory: Autonomous Agentic Payment System

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/Avirup1705/Autonomous_Agentic_payment_system)

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

## 📂 Project Structure

```text
Autonomous_Agentic_payment_system/
├── .github/                # GitHub templates (Issues, PRs)
├── docs/                   # Extended documentation & architecture diagrams
├── examples/               # Usage examples and sample configurations
├── src/
│   ├── backend/            # Express.js server and Web3 logic
│   ├── frontend/           # React dashboard application
│   └── ml/                 # Python prediction engine and agents
├── tests/                  # Unit, integration, and E2E tests
├── .env.example            # Template for environment variables
├── CHANGELOG.md            # History of project changes
├── CODE_OF_CONDUCT.md      # Community behavior standards
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # Apache 2.0 License
├── README.md               # Primary project documentation
├── ROADMAP.md              # Future plans and project vision
└── requirements.txt        # Python dependencies
```

---

## 📦 Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/Avirup1705/Autonomous_Agentic_payment_system.git
cd Autonomous_Agentic_payment_system
```

### 2. Environment Variables
Copy the `.env.example` file to `.env` in the appropriate directories and fill in your keys:
```bash
cp .env.example src/backend/.env
# Also copy to src/ml/ if needed
```

---

## 🤝 How to Contribute
We welcome contributions to Payventory! Here’s how you can help:

1. **Fork the Repository**: Create your own copy of the project.
2. **Create a Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Your Changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the Branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**: Describe your changes using our [PULL_REQUEST_TEMPLATE](.github/PULL_REQUEST_TEMPLATE.md).

Please ensure your code follows the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---

## 📈 Roadmap
Check out the [ROADMAP.md](./ROADMAP.md) for future plans, including multi-warehouse support and on-chain decision auditing.

---

## 🙏 Acknowledgements
- [Polygon](https://polygon.technology/) - For the scalable blockchain infrastructure.
- [ZeroDev](https://zerodev.app/) - For the Account Abstraction SDK.
- [Twilio](https://www.twilio.com/) - For the notification service.
- All contributors who help make Payventory better!

---

## 📜 License
Licensed under the **Apache License 2.0**. See [LICENSE](./LICENSE) for details.
