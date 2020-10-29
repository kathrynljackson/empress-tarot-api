const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const importData = require("./data.json");
let port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Empress Tarot api RUNNING');
});

app.get('/cards', (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Empress Tarot api is listening on port http://localhost:${port}`);
});