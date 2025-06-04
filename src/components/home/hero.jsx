import JD_photoDark from '../../assets/images/hero/jd_photo_dark.jpeg';
import JD_photoLight from '../../assets/images/hero/jd_photo_light.png';

export default function Hero() {
  
  return (
    <div className="relative isolate -z-10 overflow-hidden pt-14 animate-fade-down animate-duration-[3000ms] animate-delay-800">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-28 lg:py-36 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 lg:flex gap-4 lg:max-w-none">
          <div className="flex flex-col justify-between">
              <h2 className="max-w-2xl text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-green-900 dark:text-white lg:text-7xl lg:col-span-2 xl:col-auto">
                Hi. I&#39;m Juan David.
              </h2>
              <h1 className="max-w-2xl text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-green-800 dark:text-white lg:text-7xl lg:col-span-2 xl:col-auto">
                Developer.
              </h1>
              <div className="my-2 sm:my-8 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-base sm:text-lg md:text-xl lg:mt-6 font-medium text-gray-500 dark:text-gray-200">
                    Focused on frontend, but with a full-stack mindset. Love to learn and share knowledge and experiences;
                    Passionate of technology, music and bicycles. Trust this tools help to create a better world for all. Welcome... 
                </p>
              </div>
          </div>
            <img
                alt="JD photo"
                src={JD_photoDark}
                className="hidden dark:block aspect-square w-full max-w-xl rounded-full object-cover lg:max-w-72 text-center"
              />
            <img
                alt="JD photo"
                src={JD_photoLight}
                className="dark:hidden aspect-square w-full max-w-xl rounded-full object-cover lg:max-w-72 text-center"
              />
        </div>
      </div>
    </div>
  )
}