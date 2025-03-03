import responseMovies from '../assets/mocks/with-results.json'
import noResults from '../assets/mocks/no-results.json'

export function SearchMovie(params) {

    const movies = responseMovies.Search
    const hasMovies  = movies?.length > 0

    return(
        <>
            <header className="pt-20 flex flex-col justify-center text-center">
                <h1 className="text-green-600 dark:text-gray-200 font-bold text-3xl mb-2">Search Movies</h1>

                <form className="p-20 text-center">
                    <input type="text" className="mx-4 p-2 rounded-md" placeholder="insert movie" />
                    <button type="submit" className="text-gray-200 dark:text-gray-700 p-2 bg-blue-700 dark:bg-gray-200 rounded-md">Search</button>
                </form>
            </header>
            <main>
                <h1 className="text-center text-white text-4xl">movies will be shown here</h1>

            {
                hasMovies ? (
                    <ul className="flex flex-wrap justify-center">
                        {responseMovies.Search.map((movie, index) => (
                            <li key={movie.imdbID} className="m-4">
                                <img src={movie.Poster} alt={movie.Title} />
                                <h2 className='text-gray-200 text-2xl font-medium'>{movie.Title}</h2>
                                <p className='text-gray-200 text-2xl font-medium'>{movie.Year}</p>
                            </li>
                        ))} 
                    </ul>
                )    :  
                <h1 className="text-center text-white text-4xl">No movies found</h1>
            }


                <relative-time lang="es"  datetime="2025-09-01T00:00:00Z">
                </relative-time>
            </main>
        </>
    )
}