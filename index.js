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
    //console.log('app', app);
    console.log('importData', importData);
    consolelog('data', data)
});

app.get('/cards/:id', (req, res) => {
    res.send(importData[req.params.id]);
});

// app.get('/cards/:id', (req, res) => {
//     const id = req.params;
//     const card = importData.find(card => {
//         return card.id ===id
//     })
//     res.send(importData[card.id])
// });

//The above funcation needs to be refactored. Right now, it is finding cards based 
//on their index. This works fine for now, but may not be the best choice in case
//the card API is edited and ever made to be out of order. 

app.listen(port, () => {
    console.log(`Empress Tarot api is listening on port http://localhost:${port}`);
});