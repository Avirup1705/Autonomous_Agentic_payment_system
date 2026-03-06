import httpx
import json

# ==========================================
# Payventory API Usage Example
# ==========================================
# This script demonstrates how to interact with the
# Payventory ML Engine and Node.js Backend concurrently.

BASE_URL_BACKEND = "http://localhost:3000/api"
BASE_URL_ML = "http://localhost:8000"

def get_inventory():
    print("--- Fetching Current Inventory ---")
    try:
        # Assumes no auth required for this example, or token is omitted for simplicity
        response = httpx.get(f"{BASE_URL_BACKEND}/inventory")
        if response.status_code == 200:
            print("Inventory Data:", json.dumps(response.json(), indent=2))
        else:
            print(f"Failed to fetch inventory. Status: {response.status_code}")
    except httpx.RequestError as e:
         print(f"Error connecting to Backend API: {e}")

def run_ml_prediction():
    print("\n--- Running ML Demand Forecast ---")
    payload = {
        "historical_data": [12, 18, 15, 22, 19, 25, 30],
        "days_to_predict": 7
    }
    
    try:
        response = httpx.post(f"{BASE_URL_ML}/predict", json=payload)
        if response.status_code == 200:
            print("Prediction Results:", json.dumps(response.json(), indent=2))
        else:
             print(f"Failed to fetch prediction. Status: {response.status_code}")
    except httpx.RequestError as e:
         print(f"Error connecting to ML API: {e}")

if __name__ == "__main__":
    print("Starting Payventory API Examples...\n")
    get_inventory()
    run_ml_prediction()
    print("\nExamples completed.")
