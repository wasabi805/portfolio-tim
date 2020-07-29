const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
const db = require('./config/keys').mongoURI;
const tracks = require('./routes/api/tracks');

mongoose.connect(db , { useNewUrlParser: true }).then(()=>{
    console.log('mongodb connect!')}).catch((err)=>{console.log(err);
})

//  CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/api/tracks', tracks); //see http://localhost:5000/api/tracks/test

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));