import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies( {search} ) {
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

    return { movies, getMovies, loading, error }
}