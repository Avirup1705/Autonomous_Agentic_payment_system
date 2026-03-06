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

## 💻 Usage

Payventory is designed to be fully autonomous, but you can interact with the engine and backend APIs to monitor behavior or manually trigger decisions.

### 🌟 UI Walkthrough

1. **Dashboard**: Navigate to `http://localhost:3000/dashboard` to view real-time inventory health and active agents.
2. **Control Panel**: Navigate to `http://localhost:3000/control-panel` to visualize ML predictions and recent AI-driven restock decisions. 
   - **Expected Output**: You will see a graph mapping the next 7 days of predicted demand and a table listing authorized supplier transactions.

### 💻 Code Example: Fetching Inventory Data

You can also interact programmatically with the Node.js backend.

**Request:**
```python
import requests

# Fetch the current inventory status
response = requests.get("http://localhost:3000/api/inventory")
print(response.json())
```

**Expected Output:**
```json
{
  "success": true,
  "data": [
    {
      "id": "item123",
      "name": "Wireless Headphones",
      "current_stock": 42,
      "reorder_level": 50,
      "status": "Low Stock"
    }
  ]
}
```

- **See more in the [examples/README.md](./examples/README.md)** for AI agent configuration payloads and advanced connection scripts.

---

## 🧠 Machine Learning Engine Documentation

Payventory relies on a predictive engine to forecast inventory demand. Below are the details regarding the data, architecture, and evaluation of this model.

### 📊 Dataset Description
The model is trained on the **[BigBasket Entire Product List (28k Datapoints)](https://www.kaggle.com/datasets/surajjha101/bigbasket-entire-product-list-28k-datapoints)** from Kaggle.
- **Source**: Kaggle (BigBasket dataset)
- **Size**: ~28,000 product retail records.
- **Preprocessing**: 
  - Products with 0 average daily sales are filtered out.
  - Engineered features: **Base Weekly Demand** (daily average * 7), **Stock Coverage Days** (current stock / daily sales), **Category Price Ratio** (product price vs category average), and **Momentum** (log-scaled daily sales).
  - Synthetic noise and simple weekend seasonality are injected to simulate realistic 7-day target variance. Categorical columns (`category`, `supplier_id`) are transformed using `LabelEncoder`.

### 🏗️ Model Architecture
Our demand predictor utilizes a **Ridge Regression model** (`sklearn.linear_model.Ridge`) with `alpha=1.0`.
- **Reasoning**: We chose a regularized linear model over complex deep learning architectures (like LSTMs) because tabular retail metadata combined with engineered heuristics (momentum, price elasticity, stock pressure) exhibits mostly linear relationships with the 7-day demand target. Ridge regression introduces an L2 penalty which prevents overfitting on our synthesized features, trains exceedingly fast, and offers high interpretability for auditing Agentic decisions.

### 🔄 Reproducibility Instructions
To retrain the model from scratch on your own machine:
1. Ensure your hardware meets the minimal requirements: A standard CPU (no GPU required) with at least 4GB of RAM is sufficient.
2. Navigate to the ML directory and install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the training script:
   ```bash
   python src/ml/train.py
   ```
This will automatically extract features, fit the Ridge model, and output the updated `demand_model.joblib` artifact into the `src/ml/models/` directory.

### 📈 Evaluation Metrics (Explained)
We use a separate evaluation script (`src/ml/evaluate.py`) which measures three metrics:
- **MAE (Mean Absolute Error)**: This tells us, on average, how many physical units our prediction is off by. E.g., an MAE of 5.0 means our forecast is usually under or over by 5 items.
- **RMSE (Root Mean Squared Error)**: Similar to MAE, but it heavily penalizes *large* errors. If RMSE is much higher than MAE, it means the model occasionally makes massive miscalculations.
- **R² Score**: This represents how much of the demand variance is explained by our model compared to just guessing the average every time. A score closer to `1.0` means the model is highly accurate at capturing trends.

### ⚠️ Limitations, Biases, and Failure Modes
- **Cold Start Problem (Limitation)**: The model relies heavily on historical `avg_daily_sales`. For completely new products with no sales history, the model will struggle to generate an accurate forecast, defaulting to minimal assumptions.
- **Trend Lag (Bias)**: By relying on smoothed averages (momentum), the model can be slow to react to spontaneous viral trends or instant shifts in consumer behavior (e.g., a product blowing up on TikTok overnight).
- **Stockout Blindness (Failure Mode)**: If a product was out of stock for 5 days, its daily sales average drops to 0, which the model misinterprets as "zero demand" rather than "zero supply". We proxy a `stock_pressure` heuristic to combat this, but prolonged stockouts may still cause the model to systematically under-order.

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
