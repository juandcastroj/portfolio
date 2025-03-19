import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Form } from './form'

export default function Contact() {

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg font-mono">
            <h2 className="animate-flip-down animate-duration-1000 animate-delay-200 text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">
              Get in touch
            </h2>

            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            Let&apos;s work together on any project related to any of my known technologies.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd className='dark:text-gray-200'>
                  Bogotá D.C, Colombia
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+57 320 484 6725" className="hover:text-gray-900 dark:text-gray-200">
                    +57 320 484 6725
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:juandavid4130@gmail.com" className="hover:text-gray-900 dark:text-gray-200">
                    juandavid4130@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <Form/>
        
      </div>
    </div>
  )
}
