import { timelineItems } from "../constants/timeline";

export default function Timeline() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-6 lg:px-8 py-8 lg:py-12">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timelineItems.map(
          ({  dateTime,
              date,
              logo,
              company,
              labor,
              description,
            }, index ) => (

            <div key={index}>
              <time
                dateTime={dateTime}
                className="flex items-center text-base font-mono font-semibold text-green-900 dark:text-gray-200"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
            

              <div className="transition transform duration-300 hover:-translate-y-2">
                 
                 <div className="flex justify-start mt-12 font-mono">
                    <img src={logo} className="w-20 h-20 mr-4 rounded-lg" alt={`${company}+ ' company'`} />
                    <div className="my-auto">
                      <p className="mt-0 text-lg/8 font-semibold tracking-tight text-green-900 dark:text-blue-300">
                        {company}
                      </p>
                      <p className="mt-0 text-base font-semibold tracking-tight text-gray-500 dark:text-gray-300">
                        {labor}
                      </p>
                    </div>
                 </div>

                  <div>
                      <p className="mt-2 text-sm leading-6 font-mono text-gray-600 dark:text-gray-300">
                      {description}
                      </p>
                  </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
