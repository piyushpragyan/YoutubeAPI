const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('mongoose');
const {YoutubeVideo} = require('./modals/youtube.modal');
const { google } = require('googleapis');

const routes = require('./routes/v1');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1',routes);

//Function used to add the videos the 'Youtube' MongoDB database.
 const addVideos = async (response) => {
   console.log(response.data.items);
  await YoutubeVideo.insertMany(response.data.items,rawResult = true,function(err,docs){
    if(docs){
     console.log('Successfully inserted the data into the Database.');
    }
    else{
      return err;
    }
  })
}


//This function calls the Youtube Data API for every 10 seconds with the required parameters.
 async function apicall(){
  console.log('Calling the api for every 10 seconds');
   google.youtube('v3').search.list({
    type: 'video',
    order: "title",
    publishedAfter: new Date('May 26,2021 05:35:32').toISOString(),
    key: `${config.youtubekey}`,
    part: 'snippet',
    q:`${config.search_term}`,
    maxResults: 10

  }).then((response) => {
     addVideos(response);
  }).catch((error) => console.log(error));
}



//This function connects and calls the required function.
mongoose.connect(config.mongoose.url).then(() =>{
  console.log("Connected to MongoDB at the given URL");

  app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
    //setInterval(apicall, 10000);
  });
})
