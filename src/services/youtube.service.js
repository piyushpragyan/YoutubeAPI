const { YoutubeVideo } = require("../modals/youtube.modal");
const httpstatus = require("http-status");
const ApiError = require("../utils/ApiError");

const getPagination = (page, size) => {
    const limit = size ? +size : 4;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };




//Returns the JSON response with paginated Results.
const getVideo = async(requery) => {
    let query = {}
    let {page, size} = requery;
    let { limit, offset } = getPagination(page, size);
    let videos = await YoutubeVideo.paginate(query,{offset,limit});
    if(videos.docs.length != 0){
    videos.docs.sort((a,b) => {'a.snippet.publishedAt' - 'b.snippet.publishedAt'});
    return videos.docs;

    }
    else{
     throw new ApiError(httpstatus.NOT_FOUND,'No videos found in the library');
    }
}


//Returns the paginated response 
const searchVideo = async(requery) => {
  const {page,size,title,description} = requery;
  if(!title && !description){
    throw new ApiError(httpstatus.EXPECTATION_FAILED,'No Search query given')
  }
  else{
      let condition = {};
    if(title && description)
    {
      condition =   { 'snippet.title': { $regex: new RegExp(`${title}`), $options: "x" }, 'snippet.description': { $regex: new RegExp(description), $options: "i"} }
      }
      else if (title){
       condition =   { 'snippet.title': { $regex: new RegExp(title), $options: "i" } }
      }
      else{
       condition =   { 'snippet.description': { $regex: new RegExp(description), $options: "i" } }
      }
      const {limit, offset} = getPagination(page,size);
      const videos = await YoutubeVideo.paginate(condition,{offset,limit});
      if(videos.docs.length == 0){
        throw new ApiError(httpstatus.NOT_FOUND,'No vidoes found with the given query');
      }
      else{
        return videos.docs.sort((a,b) => {a.snippet.publishedAt - b.snippet.publishedAt});  
      }
  }
}

module.exports = {getVideo,searchVideo}


