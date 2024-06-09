import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", async(req ,res )=>{
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running in port ${PORT}`);
})
