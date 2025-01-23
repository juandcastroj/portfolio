const technologies = [
    {
      name: 'HTML',
      level: '',
      logoUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
    },
    {
        name: 'CSS',
        level: '',
        logoUrl:
          'https://kintinstitute.org/wp-content/uploads/2016/03/css-logo.png',
      },
      {
        name: 'Javascript',
        level: '',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
      },
      {
        name: 'React js',
        level: '',
        logoUrl:
          'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg',
      },
      {
        name: 'Tailwind css',
        level: '',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png',
      },
      {
        name: 'Github',
        level: '',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      },
      {
        name: 'Vue js',
        level: '',
        logoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
      },
      {
        name: 'Flutter',
        level: '',
        logoUrl:
          'https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp',
      },
      {
        name: 'Node js',
        level: '',
        logoUrl:
          'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png',
      },
      {
        name: 'Postgres',
        level: '',
        logoUrl:
          'https://images.seeklogo.com/logo-png/27/2/postqresql-logo-png_seeklogo-273812.png',
      },
      {
        name: 'AWS',
        level: '',
        logoUrl:
          'https://figmaresource.com/wp-content/uploads/2024/05/AWS-Marketplace-Logo-PNG-to-svg-1.svg',
      },
      {
        name: 'Canva',
        level: '',
        logoUrl:
          'https://oregoncoast.edu/wp-content/uploads/2024/02/canva-logo.png',
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
  