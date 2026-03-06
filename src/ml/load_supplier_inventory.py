import sys
from pathlib import Path

import pandas as pd
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parents[2]
if str(BASE_DIR) not in sys.path:
    sys.path.append(str(BASE_DIR))


load_dotenv(BASE_DIR / "backend" / ".env")

from src.backend.db import supplier_inventory_collection


DATA_DIR = BASE_DIR / "src" / "ml" / "data" / "processed_dataset"

SUPPLIERS = {
    "SUP1": DATA_DIR / "inventory_sup1.csv",
    "SUP2": DATA_DIR / "inventory_sup2.csv",
    "SUP3": DATA_DIR / "inventory_sup3.csv",
}

def load_supplier_inventory():
    print(" Loading supplier inventories into MongoDB...")

    # Clear old data
    supplier_inventory_collection.delete_many({})
    print("Cleared old supplier inventory")

    total = 0

    for supplier_id, csv_path in SUPPLIERS.items():
        if not csv_path.exists():
            print(f"Missing file: {csv_path.name}")
            continue

        df = pd.read_csv(csv_path)

        records = df.to_dict(orient="records")

        for r in records:

            r["supplier_id"] = supplier_id

            r["available_stock"] = int(r.get("current_stock", 0))

  
            r.pop("current_stock", None)

        if records:
            supplier_inventory_collection.insert_many(records)
            print(f"Loaded {len(records)} items for {supplier_id}")
            total += len(records)

    print("\n Supplier inventory load complete")
    print(f" Total items loaded: {total}")


if __name__ == "__main__":
    load_supplier_inventory()
