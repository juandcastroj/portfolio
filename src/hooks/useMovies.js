//it's a custom hooks for the fetching data logic 
import responseMovies from '../assets/mocks/with-results.json'


export function useMovies() {
    const movies = responseMovies.Search

    //mapped for no depend on the API contract extrictly
    const mappedMovies = movies?.map((movie, index) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))
    return { movies: mappedMovies }
}