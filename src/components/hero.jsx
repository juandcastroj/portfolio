import JD_photoDark from '../assets/images/hero/jd_photo_dark.jpeg';
import JD_photoLight from '../assets/images/hero/jd_photo_light.png';

export default function Hero() {
  return (
    <div className="relative isolate -z-10 overflow-hidden pt-14 animate-fade-down animate-duration-[3000ms] animate-delay-800">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-24 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 lg:flex gap-4 lg:max-w-none">
          <div className="flex flex-col justify-between font-mono">
              <h1 className="max-w-2xl text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-green-900 dark:text-white lg:text-7xl lg:col-span-2 xl:col-auto">
                Hi. I&#39;m Juan David. Developer.
              </h1>
              <div className="my-2 sm:my-8 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-base sm:text-lg md:text-xl lg:mt-6 font-medium text-gray-500 dark:text-gray-200">
                    Focused on frontend, but with a full-stack mindset. Love to learn and share knowledge,
                    passionate of technology, music and bicycles. Think this things help to create a better world. Welcome... 
                </p>
              </div>
          </div>
            <img
                id="jd-photo-dark"
                alt="JD photo"
                src={JD_photoDark}
                className="hidden mt-10 sm:mt-8 aspect-square w-full max-w-xl rounded-full object-cover lg:max-w-72 text-center"
              />
            <img
                id="jd-photo-light"
                alt="JD photo"
                src={JD_photoLight}
                className="hidden mt-10 sm:mt-8 aspect-square w-full max-w-xl rounded-full object-cover lg:max-w-72 text-center"
              />
        </div>
      </div>
    </div>
  )
}