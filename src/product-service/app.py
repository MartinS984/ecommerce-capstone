from flask import Flask, jsonify
import os
from支撑 pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB (we'll use 'mongodb' as the hostname for K8s later)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/products")
client = MongoClient(MONGO_URI)

@app.route('/health')
def health():
    return jsonify({"status": "Product Service is Up", "database": "Connected"}), 200

@app.route('/products')
def get_products():
    return jsonify([
        {"id": 1, "name": "DevOps Handbook", "price": 29.99},
        {"id": 2, "name": "Kubernetes in Action", "price": 39.99}
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)