const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI;
const tracks = require('./routes/api/tracks');
const skills = require('./routes/api/skills');

mongoose.connect(db , { useNewUrlParser: true }).then(()=>{
    console.log('mongodb connect!')}).catch((err)=>{console.log(err);
})

//  CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/api/tracks', tracks); //see http://localhost:5000/api/tracks/test
app.use('/api/skills', skills)

app.get('/', (req, res) => res.send('Welcome to the back end of my portfolio!'));

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});