import JD_photoDark from '../../assets/images/hero/jd_photo_dark.jpeg';
import JD_photoLight from '../../assets/images/hero/jd_photo_light.jpeg';

export default function Hero() {
  
  return (
    <div className="min-h-[75vh] sm:min-h-screen flex items-center relative isolate -z-10 overflow-hidden pt-14 ">
      <div className="mx-auto max-w-5xl p-10 sm:py-28 lg:py-36 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 sm:flex gap-12 lg:max-w-none">

          <div className="flex flex-col justify-between text-center sm:text-left animate-fade-right animate-duration-[3000ms] animate-delay-800">
              <h2 className="font-montserrat max-w-2xl text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-green-900 dark:text-white lg:text-7xl lg:col-span-2 xl:col-auto">
                Hi. I&#39;m Juan David.
              </h2>
              <h1 className="max-w-2xl text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-green-800 dark:text-white lg:text-7xl lg:col-span-2 xl:col-auto">
                Developer.  ⌨
              </h1>
              <div className="my-2 sm:my-8 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-base md:text-xl lg:mt-6 font-normal text-gray-500 dark:text-gray-200">
                    Specialized on frontend and app UI/UX, with a full-stack mindset.
                      I enjoy learning and sharing knowledge, 
                    and I’m passionate about technology, music, boxing and cycling.
                    I strongly believe these tools can help us build a better world for everyone. Ⓐ
                </p>
              </div>
          </div>

          <img
              alt="JD photo"
              src={JD_photoDark}
              className="hidden dark:block aspect-square mx-auto mt-12 sm:mt-8 md:mt-0 w-full rounded-full object-cover max-w-56 lg:max-w-72 text-center animate-fade-down sm:animate-fade-left animate-duration-[3000ms] animate-delay-800 shadow-sm"
            />
          <img
              alt="JD photo"
              src={JD_photoLight}
              className="dark:hidden aspect-square mx-auto mt-12 sm:mt-8 md:mt-0 w-full rounded-full object-cover max-w-56 lg:max-w-72 text-center animate-fade-down sm:animate-fade-left animate-duration-[3000ms] animate-delay-800 shadow-lg"
            /> 

        </div>
      </div>
    </div>
  )
}