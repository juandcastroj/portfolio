import { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {

      const [form, setForm] = useState({ firstName : "", lastName : "",  email : "", message : "", })
      const { firstName, lastName, email, message} = form;
      const [error, setError] = useState(false);

      const handleSubmit = (e) => {
          e.preventDefault();
          console.log("submit click ");  
              // fast validation
              if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
                console.log("campos vacíos");
                setError(true);
                return;
              } else {
                setError(false);
              }

        console.log(firstName, lastName, email, message);   
          setForm({ firstName : "",  lastName : "", email : "",  message : "",})
      }

      const handleChange = (e) => {
        setForm({
          ...form, 
          [e.target.name]: e.target.value,
        })
      }

      const ShowError = () => (
        <div className="mx-6 text-red-600 my-2">All fields are mandatory</div>
      );

    return (

    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="animate-flip-down animate-duration-1000 animate-delay-200 text-pretty text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">
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

        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">

            {error && <ShowError/>}  
              
              <button
                type="submit"
                className="rounded-md bg-green-900 dark:bg-blue-200 px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-gray-800 shadow-sm hover:bg-green-700 dark:hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>

  )
}
