import { projectsData } from "../services/projectsPortfolio";

export default function Projects() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8 font-mono">
        <div className="max-w-2xl xl:col-span-2 mb-12 animate-fade-right">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">
            Main projects
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            Below is a list view of my main and fully develop web and mobile
            jobs throughout my career as software developer.
          </p>
        </div>

        <ul
          role="list"
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          {projectsData.map(
            ({ company, role, imageUrl, description, url, repo }, index) => (
              <li
                key={index}
                className="flex flex-col gap-10 pt-12 sm:flex-row"
              >
                {/* <iframe src={url} className="aspect-square w-[24rem] md:w-96 xl:w-[40rem] h-60 flex-none rounded-none md:rounded-2xl object-cover"></iframe> */}

                <div>
                  <img
                    alt={company}
                    src={imageUrl}
                    className="aspect-auto w-[24rem] md:w-96 xl:w-[35rem] h-auto flex-none rounded-none md:rounded-2xl"
                  />
                </div>

                <div className="max-w-xl flex-auto animate-fade-left">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold tracking-tight text-green-900 dark:text-blue-300">
                      {company}
                    </h3>
                    <p className="text-base/7 font-semibold text-gray-600 dark:text-gray-200">
                      {role}
                    </p>
                    <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-200">
                      {description}
                    </p>
                  </a>

                  <a
                    href={repo}
                    className="text-gray-600 hover:text-gray-500 dark:text-gray-200"
                  >
                    <span className="sr-only">Repository</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 30 30"
                      aria-hidden="true"
                      className="mt-4 size-10"
                    >
                      <path
                        d="M14.831,17c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414l2.583-2.583c.188-.189,.293-.44,.293-.708s-.104-.518-.293-.707l-2.583-2.584c-.391-.391-.391-1.024,0-1.414,.391-.391,1.023-.391,1.414,0l2.583,2.583c.566,.566,.879,1.32,.879,2.121s-.312,1.555-.879,2.122l-2.583,2.583c-.195,.195-.451,.293-.707,.293Zm-4.955-.298c.391-.391,.391-1.023,0-1.414l-2.583-2.583c-.189-.189-.293-.44-.293-.708s.104-.518,.293-.707l2.583-2.583c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.583,2.583c-.567,.567-.879,1.32-.879,2.122s.312,1.555,.879,2.122l2.583,2.583c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293Zm14.124,2.298V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
