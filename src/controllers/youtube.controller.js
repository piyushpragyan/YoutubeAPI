const { youtubeService } = require("../services");
const catchAsync = require("../utils/catchAsync");

//Calls the Service layers's getVideo method to fetch the data from the MongoDB.
const getVideo = catchAsync(async (req, res) => {
    try {
      let videos = await youtubeService.getVideo(req.query);
        res.status(200).send({
          videos: videos,
        }); 
    }catch(error){
      res.status(error.statusCode).send({
          code: error.statusCode,
          message: error.message,
          stack: error.stack
      });
    }
  });



  //Calls the searchVideo function from the service's Layer.
  const searchVideo = catchAsync(async (req, res) => {
    try {
      let videos = await youtubeService.searchVideo(req.query);
        res.status(200).send({
          videos: videos,
        }); 
    }catch(error){
      res.status(error.statusCode).send({
          code: error.statusCode,
          message: error.message,
          stack: error.stack
      });
    }
  });


  module.exports = {getVideo,searchVideo};