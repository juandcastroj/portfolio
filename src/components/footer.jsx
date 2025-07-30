import { social } from "../constants/footerIcons.jsx";

export default function Footer () {

    return(
        <footer className="mx-auto mt-16 max-w-7xl px-6 sm:mt-0 lg:px-8 antialiased">
          <div className="pb-8">
            <div className="mt-16 border-t border-gray-900/10 dark:border-gray-200 pt-8 sm:mt-0 md:flex md:items-center md:justify-between">
              <div className="flex gap-x-6 md:order-2">
                {
                  social.map((item) => (
                  <a key={item.name} href={item.href} className="text-[#14532d] dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-8" />
                  </a>
                  ))
                }
              </div>
              <p className="mt-8 text-base font-semibold text-[#14532d] dark:text-gray-200 md:order-1 md:mt-0">
                &copy; jdjaramillo  🇨🇴 ☕
              </p>
            </div>
          </div>
        </footer>
    )
}