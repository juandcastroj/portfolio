function ListOfMovies({movies}) {
    return (
        <ul className="flex flex-wrap justify-center">
            {movies.map((movie, index) => (
                <li key={movie.id} className="m-4">
                    <img src={movie.poster} alt={movie.title} />
                    <h2 className='text-gray-200 text-2xl font-medium'>{movie.title}</h2>
                    <p className='text-gray-200 text-2xl font-medium'>{movie.year}</p>
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