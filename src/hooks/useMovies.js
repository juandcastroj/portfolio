import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies( {search, sort} ) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const getMovies = async () => {
        if (previusSearch.current === search) return
        try {
            setLoading(true)
            setError(false)
            previusSearch.current = search
            const newMovies = await searchMovies({search})
            setMovies(newMovies)
        } catch (error) {
                setError(error.message)
        }
        //finally is always executed, after try or catch
        finally {
            setLoading(false)
        }
    }

    const sortedMovies = [...movies].sort((a, b) => {

       // console.log(sort);
        
        if (sort) {
            return a.title.localeCompare(b.title)
        } else {
            return movies
        }
    })

    return { movies: sortedMovies, getMovies, loading, error }
}