const API_KEY = "77fc249d067fee2fdc9c1cade5aebec7";

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;