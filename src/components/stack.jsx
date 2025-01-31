import HTMLLogo from '../assets/images/techs/HTML5_logo.png';
import CSSLogo from '../assets/images/techs/CSS_logo.png';
import JavascriptLogo from '../assets/images/techs/Javascript_logo.png';
import ReactLogo from '../assets/images/techs/React_logo.svg';
import TailwindLogo from '../assets/images/techs/Tailwind_CSS_logo.png';
import GithubLogo from '../assets/images/techs/Github_logo.svg';
import VueLogo from '../assets/images/techs/Vue_logo.png';
import FlutterLogo from '../assets/images/techs/Flutter_logo.webp';
import NodejsLogo from '../assets/images/techs/Node_logo.png'
import PostgresLogo from '../assets/images/techs/Postgresql_logo.png';
import AWSLogo from '../assets/images/techs/AWS_logo.svg';
import CanvaLogo from '../assets/images/techs/Canva_logo.png';


const technologies = [
    {
      name: 'HTML',
      level: '',
      logoUrl: HTMLLogo,
    },
    {
        name: 'CSS',
        level: '',
        logoUrl: CSSLogo,
      },
      {
        name: 'Javascript',
        level: '',
        logoUrl: JavascriptLogo,
      },
      {
        name: 'React js',
        level: '',
        logoUrl: ReactLogo,
      },
      {
        name: 'Tailwind css',
        level: '',
        logoUrl: TailwindLogo,
      },
      {
        name: 'Github',
        level: '',
        logoUrl: GithubLogo,
      },
      {
        name: 'Vue js',
        level: '',
        logoUrl: VueLogo,
      },
      {
        name: 'Flutter',
        level: '',
        logoUrl: FlutterLogo,
      },
      {
        name: 'Node js',
        level: '',
        logoUrl: NodejsLogo,
      },
      {
        name: 'Postgres',
        level: '',
        logoUrl: PostgresLogo,
      },
      {
        name: 'AWS',
        level: '',
        logoUrl: AWSLogo,
      },
      {
        name: 'Canva',
        level: '',
        logoUrl: CanvaLogo,
      },
  ]
  
  export default function Stack() {

    return (

      <div className="py-16 sm:py-20">
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
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6 animate-jump"
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
  