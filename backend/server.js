const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors()); 
app.use(express.json()); 


const cleanupOldData = async () => {
  console.log('Running daily cleanup...');
  try {
    const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const deletedOrders = await db('orders')
      .where('created_at', '<', fiveDaysAgo)
      .del();
      
    const deletedUsers = await db('users')
      .where('created_at', '<', fiveDaysAgo)
      .del(); 

    console.log(`Cleanup complete: ${deletedOrders} orders, ${deletedUsers} users deleted.`);
  } catch (err) {
    console.error('Error during cleanup:', err);
  }
};

app.get('/api/products', async (req, res) => {
  try {
    const products = await db('products').select('*');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db('products').where({ id }).first();
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

app.post('/api/auth/register', (req, res) => {
  res.status(501).json({ message: 'Register endpoint not implemented' });
});

app.post('/api/auth/login', (req, res) => {
  res.status(501).json({ message: 'Login endpoint not implemented' });
});

app.post('/api/orders', (req, res) => {
  console.log('Simulating order creation:', req.body);
  res.status(201).json({ 
    message: 'Order simulation successful!', 
    orderId: Math.floor(Math.random() * 1000) 
  });
});


// --- Server Start ---
app.listen(PORT, () => {
  cleanupOldData();
  setInterval(cleanupOldData, 24 * 60 * 60 * 1000); 
});