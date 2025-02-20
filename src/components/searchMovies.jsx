export function SearchMovie(params) {

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
            </main>
        </>
    )
}