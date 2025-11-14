import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Form } from './form'

export default function Contact() {

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2 lg:pt-12">

        <div className="relative px-6 lg:static lg:px-8 py-24 sm:py-16 lg:py-28">
          <div className="font-Monserrat mx-auto max-h-full max-w-xl lg:mx-0 lg:max-w-lg animate-fade-right">
            <h2 className="text-4xl font-semibold tracking-tight text-green-900 dark:text-gray-200 sm:text-5xl">
              Get in touch 📧
            </h2>
              <p className="mt-8 text-lg/8 text-gray-600 dark:text-gray-200">
                  To work together on anything related to my current tech stack or dive into new project ideas.
              </p>
            <dl className="mt-10 space-y-4 text-xl sm:text-base/7 text-gray-600">

              <div className="flex gap-x-4 hover:text-gray-700 font-semibold dark:text-gray-200">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 font-semibold"/>
                </dt>
                <dd>
                  <a href="tel:+57 320 484 6725">
                    +57 320 484 6725
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4 hover:text-gray-700 font-semibold dark:text-gray-200">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 font-semibold"/>
                </dt>
                <dd>
                  <a href="mailto:juandavid4130@gmail.com">
                    juandavid4130@gmail.com
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-500 dark:text-gray-200 font-semibold" />
                </dt>
                <dd className='dark:text-gray-200 font-semibold'>
                  Bogotá D.C, Colombia
                </dd>
              </div>

            </dl>
          </div>
        </div>

        <Form />
        
      </div>
    </div>
  )
}
