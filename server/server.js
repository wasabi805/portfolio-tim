const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;
const db = require('./config/keys').mongoURI;

mongoose.connect(db , { useNewUrlParser: true }).then(()=>{
    console.log('mongodb connect!')}).catch((err)=>{console.log(err);
})

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));