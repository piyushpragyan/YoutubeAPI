const mongoose = require('mongoose');
const {ThumbnailSchema } = require('./thumbnail');
const mongoosePaginate = require('mongoose-paginate-v2');


//Defined the schema for the YoutubeVideo object in the collection of the MongoDatabase.
const YoutubeVideoSchema = new mongoose.Schema(
    {
       kind: {
           type: String,
            required: true,
            index: true,
       },
        etag: {
            type: String,
            required: true,
        },
        id: {
            kind:{
                type: String,
                required: true,
            },
            videoId: {
                type: String,
                required: true,
            }
        },
        snippet: {
            publishedAt: {
                type: Date,
                required: true,
            },
            channelId: {
                type: String,
                require: true,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            thumbnails:{
                type: ThumbnailSchema,
            },
            channelTitle:{
                type: String,
                required: true,
            },
            liveBroadcastContent: {
                type: String,
                required: true,
            },
            publishTime: {
                type: Date,
                required: true,
            }
        }
    },{id: false}
);


//Using the paginate npm package to use with this schema's object instances.
YoutubeVideoSchema.plugin(mongoosePaginate);
const Youtubevideo = mongoose.model('youtubevideos',YoutubeVideoSchema);
module.exports.YoutubeVideo = Youtubevideo;