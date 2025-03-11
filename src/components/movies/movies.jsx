function ListOfMovies({movies}) {
    return (
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {movies.map((movie, index) => (
                <li key={movie.id} className="flex flex-col text-green-800 dark:text-gray-200 text-2xl font-medium m-4">
                    <img src={movie.poster} alt={movie.title} className="rounded-xl"/>
                    <h2>{movie.title}</h2>
                    <p className="font-bold">{movie.year}</p>
                </li>
            ))} 
        </ul>
    )
}


function NoMovies(params) {
    return(
        <h1 className="text-center text-white text-4xl">No movies founded</h1>
    )
}


export default function Movies({movies}) {
    const hasMovies  = movies?.length > 0

    return(
        hasMovies ? 
        <ListOfMovies movies={movies} />
        :
        <NoMovies />
    )
}