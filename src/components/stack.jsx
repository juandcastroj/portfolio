const technologies = [
    {
      name: 'HTML',
      level: '',
      logoUrl:
        '/src/assets/images/techs/HTML5_logo.png',
    },
    {
        name: 'CSS',
        level: '',
        logoUrl:
          '/src/assets/images/techs/CSS_logo.png',
      },
      {
        name: 'Javascript',
        level: '',
        logoUrl:
          '/src/assets/images/techs/JavaScript_logo.png',
      },
      {
        name: 'React js',
        level: '',
        logoUrl:
          '/src/assets/images/techs/React_logo.svg',
      },
      {
        name: 'Tailwind css',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Tailwind_CSS_logo.png',
      },
      {
        name: 'Github',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Github_logo.svg',
      },
      {
        name: 'Vue js',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Vue_logo.png',
      },
      {
        name: 'Flutter',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Flutter_logo.webp',
      },
      {
        name: 'Node js',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Node_logo.png',
      },
      {
        name: 'Postgres',
        level: '',
        logoUrl:
          '/src/assets/images/techs/Postqresql_logo.png',
      },
      {
        name: 'AWS',
        level: '',
        logoUrl:
          '/src/assets/images/techs/AWS_logo.svg',
      },
      {
        name: 'Canva',
        level: '',
        logoUrl:
          '/src/assets/images/techs/canva_logo.png',
      },
    // More technologies...
  ]
  
  export default function Stack() {

    return (

      <div id="stack" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">My stack</h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >

            {technologies.map((tech) => (
              <li key={tech.name}>
                <img alt="" src={tech.logoUrl} className="mx-auto size-28 rounded-md" />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-green-900 dark:text-blue-300">{tech.name}</h3>
                {/* <p className="text-sm/6 text-gray-600 dark:text-gray-200">{tech.level}</p> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  