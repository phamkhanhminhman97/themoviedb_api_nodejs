const API_TOKEN = process.env.API_TOKEN || "1h";
const response = require('../utils/response');
const axios = require('axios');
const path = require('../config/path');


let discover = async (req, res) => {
    console.log(path.API_KEY);
    // Make a request for a user with a given ID
    const movie = await axios.get(path.DISCOVER)
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let popular = async (req, res) => {
    let page = req.query.page;
    const movie = await axios.get(path.POPULAR + '&page=' + page);
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let search = async (req, res) => {
    let search = req.query.query;
    let page = req.query.page;
    console.log(search);
    const movie = await axios.get(path.SEARCH + '&query=' + search + '&page=' + page); 
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let review = async (req, res) => {
    console.log(path.REVIEW + req.params.id + '/' + path.REVIEW_QUERY_URL);
    const movie = await axios.get(path.REVIEW + req.params.id + '/' + path.REVIEW_QUERY_URL)
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let now_playing = async (req, res) => {
    const movie = await axios.get(path.NOW_PLAYING)
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let top_rated = async (req, res) => {
    console.log('top-rated');
    const movie = await axios.get(path.TOP_RATED)
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let movie_detail = async (req, res) => {
    const movie = await axios.get(path.MOVIE_DETAIL + req.params.id + path.QUERY_URL);
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

let credits = async (req, res) => {
    const movie = await axios.get(path.CREDIT + req.params.id + '/' + path.CREDIT_QUERY_URL);
    return response.withMessage("COMMON.GET_SUCCESS", true, movie.data, res)
}

module.exports = {
    discover: discover,
    popular: popular,
    search: search,
    review: review,
    now_playing: now_playing,
    top_rated: top_rated,
    movie_detail: movie_detail,
    credits: credits

}