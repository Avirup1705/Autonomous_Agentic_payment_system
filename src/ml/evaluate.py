import pandas as pd
import numpy as np
from pathlib import Path

from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.linear_model import Ridge

from features import build_features


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATA_PATH = PROJECT_ROOT / "src" / "ml" / "data" / "processed_dataset" / "inventory.csv"


def evaluate_inventory_model():

    print("\nLoading inventory dataset...")

    df = pd.read_csv(DATA_PATH)

    # Build ML features
    X, y, meta = build_features(df)

    # Train / test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # Demand forecasting model
    model = Ridge(alpha=1.0)

    print("Training demand prediction model...")
    model.fit(X_train, y_train)

    # Predictions
    y_pred = model.predict(X_test)

    # Metrics
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)

    # Cross validation
    cv_mae = -cross_val_score(
        model, X, y, cv=5, scoring="neg_mean_absolute_error"
    ).mean()

    print("\n===== Inventory Demand Forecast Evaluation =====")
    print(f"MAE (units error)     : {mae:.2f}")
    print(f"RMSE (units error)    : {rmse:.2f}")
    print(f"R² score              : {r2:.3f}")
    print(f"CV MAE (5-fold)       : {cv_mae:.2f}")

    # -----------------------------
    # Autonomous Restock Simulation
    # -----------------------------
    print("\n===== Autonomous Restock Simulation =====")

    test_df = df.iloc[y_test.index].copy()
    test_df["predicted_7d_demand"] = y_pred.round().clip(min=1)

    test_df["recommended_restock"] = np.maximum(
        test_df["predicted_7d_demand"] - test_df["current_stock"], 0
    )

    test_df["stockout_risk"] = test_df["current_stock"] < (
        test_df["predicted_7d_demand"] * 0.5
    )

    # Display sample results
    cols = [
        "product_name",
        "current_stock",
        "predicted_7d_demand",
        "recommended_restock",
        "stockout_risk",
    ]

    print(test_df[cols].head(10))


if __name__ == "__main__":
    evaluate_inventory_model()