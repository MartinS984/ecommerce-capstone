const express = require('express');
const redis = require('redis');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await client.connect();
    console.log("Connected to Redis");
})();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Cart Service is Up' });
});

// --- UPDATED POST ROUTE ---
app.post('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    const { product_id, quantity } = req.body;

    console.log(`[Request] Add to cart User:${userId} Prod:${product_id} Qty:${quantity}`);

    try {
        const cartKey = `cart:${userId}`;
        
        // FIX: Force product_id to be a String. Redis v4 requires strings for fields!
        const productString = String(product_id);
        
        await client.hIncrBy(cartKey, productString, quantity);
        
        console.log(`[Success] Added to Redis`);
        res.status(200).json({ message: "Item added to cart", userId, product_id, quantity });
    } catch (error) {
        // This will now show up in your logs if it fails again
        console.error("REDIS CRASH:", error); 
        res.status(500).json({ error: "Failed to add to cart" });
    }
});
// --------------------------

app.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const cartKey = `cart:${userId}`;
        const cartItems = await client.hGetAll(cartKey);
        res.status(200).json(cartItems);
    } catch (error) {
        console.error("Redis Error:", error);
        res.status(500).json({ error: "Failed to fetch cart" });
    }
});

app.listen(port, () => {
    console.log(`Cart Service V2 (Fixed) listening at http://localhost:${port}`);
});