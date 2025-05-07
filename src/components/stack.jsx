import { stackItems } from "../constants/stack";

export default function Stack() {

  return (
    <div id="Stack" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 font-mono">
          {/* <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">My stack</h2> */}
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 animate-jump"
        >
          {
            stackItems.map(( {name, logoUrl}, index) => (
              <li key={index}>
                <img alt={name} src={logoUrl} className="mx-auto size-28 rounded-md" />
                <h3 className="mt-6 text-base/7 font-mono font-semibold tracking-tight text-green-900 dark:text-blue-300">{name}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
  