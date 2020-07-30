const express = require('express');
const router = express.Router();
const Track = require('../../models/Tracks');

router.get('/test' , (req,res)=> res.json({msg: 'tracks route works'}));

router.get('/track-list' , ( req , res )=>{
    Track.findOne({"_id": "5f2041dd7c213e0f577b0501"}).then( mix =>{
        res.json(mix.tracks);
    }).catch(err => res.status(404).json(err))
})

module.exports = router;