import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Load dataset
df = pd.read_csv("data/raw_dataset/BigBasket Products.csv")

# Remove unnecessary columns
df = df.drop(columns=["description"], errors="ignore")

# Handle missing values
df = df.dropna()

# Create discount feature
df["discount"] = df["market_price"] - df["sale_price"]

# Create demand score (target variable)
df["demand_score"] = df["rating"] * df["discount"]

# Encode categorical columns
categorical_cols = ["product", "category", "sub_category", "brand", "type"]

encoder = LabelEncoder()

for col in categorical_cols:
    if col in df.columns:
        df[col] = encoder.fit_transform(df[col])

# Features and target
X = df.drop("demand_score", axis=1)
y = df["demand_score"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Model
model = RandomForestRegressor(
    n_estimators=150,
    max_depth=12,
    random_state=42
)

# Train
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Model Performance")
print("------------------")
print("Mean Squared Error:", mse)
print("R2 Score:", r2)