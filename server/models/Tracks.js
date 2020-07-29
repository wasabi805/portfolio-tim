const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema([
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
module.exports = Track = mongoose.model('tracks' , TrackSchema)