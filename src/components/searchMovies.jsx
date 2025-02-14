export function SearchMovie(params) {
    

    

    return(
        <>
            <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                <div className="p-20 text-center">
                    <h1 className="text-green-600 dark:text-gray-200 font-bold text-3xl mb-2">Search Movies</h1>
                    <input className="mx-4 p-2 rounded-md" placeholder="insert movie" />
                    <button className="text-gray-200 dark:text-gray-700 p-2 bg-blue-700 dark:bg-gray-200 rounded-md">Search</button>
                </div>
            </div>
        </>
    )
}