import AutocadLogo from '../assets/images/timeline/AutoCAD_logo.jpeg';
import BitheaderLogo from '../assets/images/timeline/Bitheader_logo.jpeg';
import AcademiaGeekLogo from '../assets/images/timeline/AcademiaGeek_logo.jpeg';
import SessionForwardLogo from '../assets/images/timeline/SessionForward_logo.jpeg';


const timeline = [
    {
      company: 'Faram Ingenieros SAS',
      labor: 'CAD Draftsman',
      logo: AutocadLogo,
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: 'Sept 2019',
      dateTime: '2019-09',
    },
    {
      company: 'Bitheader',
      labor: 'Web Developer Jr',
      logo: BitheaderLogo,
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: 'Mar 2021',
      dateTime: '2021-03',
    },
    {
      company: 'Academia Geek',
      labor: 'Frontend Dev Trainee',
      logo: AcademiaGeekLogo,
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      company: 'SessionForward',
      labor: 'Software Developer',
      logo: SessionForwardLogo,
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: 'Jun 2022',
      dateTime: '2022-05',
    },
  ]

export default function Timeline () {

    return (
      <div id="timeline" className="mx-auto my-12 max-w-7xl px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={index}>
              <time dateTime={item.dateTime} className="flex items-center text-base font-semibold text-orange-500 dark:text-gray-200">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-400 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>

            <div className="flex justify-start mt-12">
                  <img src={item.logo} className="w-20 h-20 mx-2" alt="" />
                <div className="my-auto">
                  <p className="mt-0 text-lg/8 font-semibold tracking-tight text-green-900 dark:text-blue-300">{item.company}</p>
                  <p className="mt-0 text-lg/8 font-semibold tracking-tight text-gray-500 dark:text-gray-300">{item.labor}</p>
                </div>
            </div>
              
              <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
}