const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    id:{
        type: String
    },
    image: {
        type: String
    },
    hasMobileImg: {
        type: String
    },
    href: {
        type: String
    },
    title: {
        type: String
    },
    context: {
        type: String
    }
});

// eslint-disable-next-line no-undef
module.exports = Project = mongoose.model('projects', ProjectsSchema);