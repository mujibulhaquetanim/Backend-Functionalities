const express=require("express");
const router=express.Router();
const {getAllMovies,getAllMoviesTesting}=require("../controllers/MovieList")

router.route("/").get(getAllMovies);

router.route("/testing").get(getAllMoviesTesting);

module.exports = router;