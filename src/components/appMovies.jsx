import { useState , useEffect} from 'react'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import Movies from './movies/movies'

export function AppMovies() {
    
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch()  //this state controls the input values
    const { movies, getMovies, loading } = useMovies({search, sort}) //this state controls the call to the API logic

    const handleSubmit = e => {
        e.preventDefault()

        //now we pass search as a parameter to avoid all the innecesary calls with useCallback
        getMovies({search})
    }

    const handleSort = () => {                        
       setSort(!sort) //this is the way to activate o r deactivate the sort
    }

    // const handleChange = event => {
    //     const newsearch = event.target.value // this way to be sure about the state has the current value (cause states are asyncs on React)
    //     updateSearch(newsearch)
    // }

    //to search while write the movie
    const handleChange = event => {
        const newsearch = event.target.value // this way to be sure about the state has the current value (cause states are asyncs on React)
        updateSearch(newsearch)
        getMovies({search: newsearch})
    }

    useEffect(() => {
     console.log("searchhh getmovies");
     
    }, [getMovies])
    

    return(
        <>
            <header className="pt-20 flex flex-col justify-center text-center">
                <h1 className="text-green-600 dark:text-gray-200 font-bold text-3xl mb-2">Movie searcher</h1>
                <form className="p-20 text-center" onSubmit={handleSubmit}>
                    <input value={search} onChange={handleChange} type="text" name='search' className="mx-4 p-2 rounded-md" placeholder="insert movie" />
                    <button type="submit" className="text-gray-200 dark:text-gray-700 p-2 bg-green-500 dark:bg-gray-200 rounded-md">Search</button>
                    
                    {/* <div className="flex flex-col items-center p-4"> */}
                        <input type="checkbox" name="sort" onChange={handleSort} checked={sort} className="mx-4"/>
                        {/* <label htmlFor="sort" className="text-green-700 dark:text-gray-200">Sort</label>
                    </div> */}

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </form>
            </header>

            <main>
                {    loading ? 
                    <h1 className="text-center text-white text-4xl">Loading...</h1> 
                    :
                    <Movies movies={movies} />
                }
            </main>
        </>
    )
}