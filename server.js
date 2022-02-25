const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, './')));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} `);
})
