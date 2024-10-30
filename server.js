const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        status:200,
        message: 'Hello World from Express JS and Node JS'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;