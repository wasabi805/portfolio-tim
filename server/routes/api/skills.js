const express = require('express');
const router = express.Router();
const Skill = require('../../models/Skills');

router.get('/test' , (req,res)=> res.json({msg: 'tracks route works'}));

router.get('/skill-set' , ( req, res )=>{
    Skill.findOne({"_id" : '5f21e3e17c213e0f577b5595'}).then( skill =>{
        res.json(skill);
    }).catch(err=> res.status(404).json(err))
})

module.exports = router;
