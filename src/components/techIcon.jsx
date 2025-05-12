export function TechIcon({shape}) {
    
    return (
        <svg className="w-24 lg:w-36 mx-auto text-green-800 hover:text-green-600 dark:text-gray-200 hover:dark:text-gray-50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d={shape}/>
        </svg>
    )
}