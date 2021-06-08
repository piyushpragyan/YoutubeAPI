const mongoose = require('mongoose');

//Defined the thumbnail schema for the thumbnail JSON object present in the Youtube Data API's GET Response.
const ThumbnailSchema = mongoose.Schema ({
    default: {
        url: {
            type: String,
            required: true,
        },
        width:{
            type: Number,
            required: true,
        },
        height:{
            type: Number,
            required: true,
        }
    },
    medium: {
        url: {
            type: String,
            required: true,
        },
        width:{
            type: Number,
            required: true,
        },
        height:{
            type: Number,
            required: true,
        }},
    high: {
        url: {
            type: String,
            required: true,
        },
        width:{
            type: Number,
            required: true,
        },
        height:{
            type: Number,
            required: true,
        }
    }
});

module.exports.ThumbnailSchema = ThumbnailSchema;

