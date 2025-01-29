// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests (optional)
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my web server.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
