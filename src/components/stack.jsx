import { stackItems } from "../constants/stackIcons";
import { TechIcon } from "./techIcon";

export default function Stack() {

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl font-mono text-center animate-fade-down animate-duration-[1500ms] animate-delay-400">
          <h2 className="text-4xl font-semibold tracking-tight text-green-900 dark:text-gray-100 sm:text-5xl pt-8">
            Technologies
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 animate-fade-down animate-duration-[1500ms] animate-delay-500"
        >
          {
            stackItems.map(( item, index) => (
              <li key={index} >
                <TechIcon shape={item.shape} />
                <h3 className="mt-6 text-base/7 font-mono font-semibold text-green-800 dark:text-gray-300">{item.name}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
  