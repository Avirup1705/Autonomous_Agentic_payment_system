import pandas as pd
from sklearn.linear_model import Ridge
import joblib
from pathlib import Path

from features import build_features


# -------------------------------
# PATH FIX (ONLY CHANGE)
# -------------------------------

# Resolve path relative to project root
PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_PATH = PROJECT_ROOT / "src" / "ml" / "data" / "processed_dataset" / "inventory.csv"
MODEL_PATH = PROJECT_ROOT / "src" / "ml" / "models" / "demand_model.joblib"


# -------------------------------
# ORIGINAL LOGIC (UNCHANGED)
# -------------------------------
df = pd.read_csv(DATA_PATH)

X, y, _ = build_features(df)

model = Ridge(alpha=1.0)
model.fit(X, y)

joblib.dump(model, MODEL_PATH)

print("Demand model trained and saved")
print("Predicted demand stats:")
print("Min:", y.min())
print("Max:", y.max())
print("Mean:", y.mean())
