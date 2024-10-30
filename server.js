const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json({
        status:200,
        message: 'Hello World'
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;