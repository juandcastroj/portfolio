import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../../components/movies/services/movies'

export function useMovies( {search, sort} ) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const getMovies = useCallback( async ({search}) => { 
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
    },[])

        //useMemo to only execute function when the sort and movies states changes
        const sortedMovies = useMemo(() => {
         return sort ?
            [...movies].sort((a, b) =>  a.title.localeCompare(b.title)) 
           : movies
        },[ sort, movies ])
        

    return { movies: sortedMovies, getMovies, loading, error }
}