const timeline = [
    {
      company: 'Faram Ingenieros SAS',
      labor: 'CAD draftsman',
      logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/autocad-icon.png',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: 'Sept 2019',
      dateTime: '2019-09',
    },
    {
      company: 'Bitheader',
      labor: 'Web Developer Jr',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQFfMRXDWMDYBw/company-logo_200_200/company-logo_200_200/0/1630657267883?e=1745452800&v=beta&t=G0rVhhW9Jo2Do1OIfDJGZBGXuwUr045GR3bcQh484r0',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: 'Mar 2021',
      dateTime: '2021-03',
    },
    {
      company: 'Academia Geek',
      labor: 'Frontend Dev Trainee',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEpITHet9W9YA/company-logo_100_100/company-logo_100_100/0/1630617533471?e=1745452800&v=beta&t=hHnYGBtkNPflWSDg-c1quCXZcykU_DDHS3AFV_y0qCY',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      company: 'SessionForward',
      labor: 'Software developer',
      logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQECn3e1O48SUw/company-logo_100_100/company-logo_100_100/0/1630622917558/sessionforward_logo?e=1745452800&v=beta&t=ZUxgGFAech7n240l77540Lq7WecApHNrFkNChrjWsrg',
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