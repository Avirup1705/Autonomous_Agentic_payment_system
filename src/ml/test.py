import pandas as pd
from ml.predict import predict_7_day_demand

import os
from pathlib import Path

# Resolve path relative to project root
PROJECT_ROOT = Path(__file__).resolve().parents[2]
csv_path = PROJECT_ROOT / "src" / "ml" / "data" / "processed_dataset" / "inventory.csv"
df = pd.read_csv(csv_path)
preds = predict_7_day_demand(df)

print(preds[:5])
