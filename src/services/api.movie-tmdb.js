import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3'
}

let axiosInstance = axios.create(options);
const API_KEY = "?api_key=8aaf14eada5c1779a594aaa553b31207"
const getMovie = (page) => {
    return axiosInstance.get('/discover/movie' + API_KEY + "&page=" + page); // promise
};
const getMovieID = (id) => {
    return axiosInstance.get('/movie/' + id + API_KEY);
}
const getMovieVideo = (id) => {
    return axiosInstance.get('/movie/' + id + '/videos' + API_KEY)
}
const searchMovie = (text, page) => {
    return axiosInstance.get('/search/movie' + API_KEY + "&query=" + text + "&page=" + page)
}
const getPopularMovie = () => {
    return axiosInstance.get('/movie/popular' + API_KEY +"&query=1")
}
export {
    getMovie,
    getMovieID,
    getMovieVideo,
    searchMovie,
    getPopularMovie
}