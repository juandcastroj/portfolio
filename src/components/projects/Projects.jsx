import { projectsData } from "../../constants/projectsPortfolio";

export default function Projects() {
  return (
    <div className="py-20 md:py-28 animate-fade-down animate-duration-[1500ms] animate-delay-400">
      <div className="mx-auto max-w-6xl gap-20 px-6 sm:px-12 lg:px-16">
        <div className="text-center font-Monserrat xl:col-span-2 mb-12 mx-auto max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-green-900 dark:text-gray-100 sm:text-5xl">
           My main projects
          </h2>
            <p className="mt-6 text-base tracking-tighter text-gray-600 dark:text-gray-200">
              Below is a list of my completed works and collaborations for websites and apps over the past few years as a software developer using different technologies, from Figma and canva for design, HTML, CSS, Tailwind, JavaScript, React, Vue for user interfaces, Firebase and Aws for cloud services until Node, Mysql and Postgresql for Backend and Databases, even Flutter for multiplatform mobile apps.             </p>
        </div>

        <ul role="list" className="font-Monserrat grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-3 animate-fade-down animate-duration-[1500ms] animate-delay-500">

          {  projectsData.map(
            ({ company, role, imageUrl, description, url, repo }, index) => (
              <li
                key={index}
                className="flex flex-col gap-4 p-6 dark:border-0 rounded-3xl shadow-md dark:hover:shadow-md 
                           bg-white/30 hover:bg-white/40 backdrop-blur-md
                           dark:bg-white/10 dark:hover:bg-white/20 " >
                  <img
                    alt={company}
                    src={imageUrl}
                    className="w-full h-auto rounded-lg md:rounded-2xl object-contain"
                  />

                <div className="flex-auto pt-2 text-justify">
                    <h3 className="text-xl font-semibold tracking-tight text-green-900 dark:text-blue-300">
                      {company}
                    </h3>
                    <p className="text-base/7 font-semibold text-gray-600 dark:text-gray-200">
                      {role}
                    </p>
                    <p className="mt-1 text-base leading-normal text-gray-600 dark:text-gray-200">
                      {description}
                    </p>

                  <div className="flex items-center gap-4 mt-4 sm:mt-8 flex-row">
                    <a
                      href={url} target="_blank" rel="noopener noreferrer"
                      className="text-green-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    >
                      <span className="sr-only">Deploy</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 22 22"
                        aria-hidden="true"
                        className="size-10"
                      >
                        <path clipRule="evenodd"
                          fillRule="evenodd" d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"/>
                      </svg>
                    </a>
                    
                    <a
                        href={repo} target="_blank" rel="noopener noreferrer"
                        className="text-green-900 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                      >
                      <span className="sr-only">Code</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 30 30"
                        aria-hidden="true"
                        className="size-10"
                      >
                        <path
                          d="M14.831,17c-.256,0-.512-.098-.707-.293-.391-.391-.391-1.023,0-1.414l2.583-2.583c.188-.189,.293-.44,.293-.708s-.104-.518-.293-.707l-2.583-2.584c-.391-.391-.391-1.024,0-1.414,.391-.391,1.023-.391,1.414,0l2.583,2.583c.566,.566,.879,1.32,.879,2.121s-.312,1.555-.879,2.122l-2.583,2.583c-.195,.195-.451,.293-.707,.293Zm-4.955-.298c.391-.391,.391-1.023,0-1.414l-2.583-2.583c-.189-.189-.293-.44-.293-.708s.104-.518,.293-.707l2.583-2.583c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0l-2.583,2.583c-.567,.567-.879,1.32-.879,2.122s.312,1.555,.879,2.122l2.583,2.583c.195,.195,.451,.293,.707,.293s.512-.098,.707-.293Zm14.124,2.298V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
