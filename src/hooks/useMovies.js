//it's a custom hooks for the fetching data logic 
import withResponse from '../assets/mocks/with-results.json'
import withOutResponse from '../assets/mocks/no-results.json'
import { useState } from 'react'

const APIKEY = '4287ad07'

export function useMovies( {search} ) {

    const [responseMovies, setResponseMovies] = useState([])
    const movies = responseMovies.Search

    //mapped for no depend on the API contract extrictly
    const mappedMovies = movies?.map((movie, index) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = async () => {
        if (search) {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
            const json = await response.json()
            setResponseMovies(json)
        }
            else {
            setResponseMovies(withOutResponse)
        }
    }

    return { movies: mappedMovies, getMovies }
}