const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema([
    {
        id: {
            type: String
        },

        tracks:{
            type: Array
        }
    }
]);


// eslint-disable-next-line no-undef
module.exports = Skill = mongoose.model('skills' , SkillsSchema )