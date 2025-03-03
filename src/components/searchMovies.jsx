import { useRef, useState, useEffect } from 'react'
import { useMovies } from '../hooks/useMovies'
import Movies from './movies/movies'

export function SearchMovie() {

    const { movies } = useMovies()
    const inputRef = useRef(null)

    //uncontrolled form way  (need teh ref param on input)
    const handleSubmit = event => {
        event.preventDefault()
        //const value = inputRef.current.value
        const fields = new window.FormData(event.target)
        console.log(fields.get('query'))
    }

    //controlled way
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)

    const handleChange = event => {
        const newQuery = event.target.value // this way we can be sure about the state is the actual value  (cause is react state are async)
        if (newQuery.startsWith(' ')) return //prevent setting the state with a space
        setQuery(newQuery)
        console.log(query);
    }


    //validate a controlled form 
    useEffect(() => {
      if (query === '') {
        setError('Please enter a movie name')
       return
      }
      setError(null)
    }, [query])
    

    return(
        <>
            <header className="pt-20 flex flex-col justify-center text-center">
                <h1 className="text-green-600 dark:text-gray-200 font-bold text-3xl mb-2">Movie searcher</h1>

                <form className="p-20 text-center" onSubmit={handleSubmit}>
                    <input value={query} onChange={handleChange} type="text" name='query' ref={inputRef} className="mx-4 p-2 rounded-md" placeholder="insert movie" />
                    <button type="submit" className="text-gray-200 dark:text-gray-700 p-2 bg-blue-700 dark:bg-gray-200 rounded-md">Search</button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>

            </header>

            <main>
                <h1 className="text-center text-white text-4xl">movies will be shown here</h1>
                <Movies movies={movies} />
            </main>
        </>
    )
}