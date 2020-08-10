const express = require('express');
const router = express.Router();
const Projects = require('../../models/Projects');

router.get('/test' , (req,res)=> res.json({msg: 'projects route works'}));

router.get('/projects-list' , ( req, res)=>{
    Projects.findOne({"_id": "5f318f8e7c213e3efe1648f1"}).then( project =>{
        res.json(project);
    }).catch( err => res.status(404).json(err))
})

module.exports = router