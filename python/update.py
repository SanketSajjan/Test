import json
from datetime import datetime

data = {
    "date": str(datetime.now()),
    "message": "Daily updated successfully",
    "stocks": ["RELIANCE", "INFY", "TCS"]
}

with open("data/output.json", "w") as f:
    json.dump(data, f, indent=4)
