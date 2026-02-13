const express = require('express');
const redis = require('redis');
require('dotenv').config();

const app = express();
const port = 3000;

const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Cart Service is Up' });
});

app.listen(port, () => {
    console.log(`Cart service listening at http://localhost:${port}`);
});