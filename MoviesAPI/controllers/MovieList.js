const getAllMovies = async(req,res)=>{
    res.status(200).json({msg: "This is from getallmovies"});
}
const getAllMoviesTesting = async(req,res)=>{
    res.status(200).json({msg: "This is from getallmoviesTesting"});
}

module.exports ={getAllMovies,getAllMoviesTesting};