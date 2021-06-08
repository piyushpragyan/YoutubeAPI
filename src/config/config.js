const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname,'../../.env')});

module.exports = {
    search_term : process.env.SEARCH_TERM,
    port: process.env.NODE_ENV,
    youtubekey: process.env.YOUTUBE_API_KEY,
    mongoose: {
        url: process.env.MONGODB_URL,
        option: {
            useFindAndModify: false,
            useNewUrlParser: true,

        },
    },
};