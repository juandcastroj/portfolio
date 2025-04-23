import { timelineItems } from '../constants/timeline';

export default function Timeline () {

    return (
      <div className="mx-auto my-12 max-w-7xl px-6 lg:px-8 py-8 lg:py-12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          
          {
            timelineItems.map((item, index) => (
                <div key={index} className={`animate-fade-right animate-duration-1000 animate-ease-in-out animate-duration-${item.animationDelay}`}>
                  <time dateTime={item.dateTime} className="flex items-center text-base font-mono font-semibold text-orange-500 dark:text-gray-200">
                    <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                      <circle r={2} cx={2} cy={2} fill="currentColor" />
                    </svg>
                    {item.date}
                    <div
                      aria-hidden="true"
                      className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    />
                  </time>

                  <div className="flex justify-start mt-12 font-mono">
                        <img src={item.logo} className="w-20 h-20 mx-2" alt="company logo" />
                      <div className="my-auto">
                        <p className="mt-0 text-lg/8 font-semibold tracking-tight text-green-900 dark:text-blue-300">{item.company}</p>
                        <p className="mt-0 text-lg/8 font-semibold tracking-tight text-gray-500 dark:text-gray-300">{item.labor}</p>
                      </div>
                  </div>
                    <p className="mt-2 text-base/7 font-mono text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
            ))
          }

        </div>
      </div>
    )
}