var express = require('express')
var router = express.Router()
// const validator = require('../helpers/validator')
// const AuthController = require('../controllers/AuthController');
const MovieController = require ('../controllers/MovieController');


router.get("/discover", MovieController.discover);

router.get("/popular", MovieController.popular);

router.get("/search", MovieController.search);

router.get("/review", MovieController.review);

router.get("/now-playing", MovieController.now_playing);

router.get("/top-rated", MovieController.top_rated);

router.get("/movie-detail/:id", MovieController.movie_detail);

router.get("/review/:id", MovieController.review);

router.get("/credits/:id", MovieController.credits);

module.exports = router