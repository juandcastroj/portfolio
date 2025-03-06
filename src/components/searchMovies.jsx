import { useRef, useState, useEffect } from 'react'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import Movies from './movies/movies'

export function SearchMovie() {
    const { search, updateSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({search})

    const inputRef = useRef(null)

    //uncontrolled form way  (need the ref param on input)
    const handleSubmit = e => {
        e.preventDefault()
        getMovies()
    }

    //controlled way
    const handleChange = event => {
        const newsearch = event.target.value // this way we can be sure about the state is the actual value (cause in react state are async)
        if (newsearch.startsWith(' ')) return //this return prevent setting the state when start with a space
        updateSearch(newsearch)
        //console.log(search);
    }

    return(
        <>
            <header className="pt-20 flex flex-col justify-center text-center">
                <h1 className="text-green-600 dark:text-gray-200 font-bold text-3xl mb-2">Movie searcher</h1>

                <form className="p-20 text-center" onSubmit={handleSubmit}>
                    <input value={search} onChange={handleChange} type="text" name='search' ref={inputRef} className="mx-4 p-2 rounded-md" placeholder="insert movie" />
                    <button type="submit" className="text-gray-200 dark:text-gray-700 p-2 bg-blue-700 dark:bg-gray-200 rounded-md">Search</button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>

            </header>

            <main>
                {
                    loading ? 
                    <h1 className="text-center text-white text-4xl">Loading...</h1> 
                    :
                    <Movies movies={movies} />
                }
            </main>
        </>
    )
}