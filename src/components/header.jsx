import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import ThemeSwitcher from './themeSwitcher'
import { Link } from 'react-router-dom'
import { MobileHeader } from './mobileHeader'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Stack', href: '/stack' },
    { name: 'Contact', href: '/contact' },
  ]

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
        <header className="fixed inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="animate-fade-down animate-duration-[3000ms] animate-delay-200 mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8">
                <div className="flex lg:hidden fixed top-6 right-6">
                    <button
                        type="button"
                        onClick={handleMobileMenu}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12 bg-amber-100 dark:bg-blue-200 bg-opacity-80 rounded-2xl px-6 py-2 fixed top-8">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="text-sm/6 font-semibold text-green-900 dark:text-gray-600">
                        {item.name}
                        </Link>
                    ))}
                </div>

                <ThemeSwitcher className="hidden lg:inline"/>
            </nav>

            <MobileHeader navigation={navigation} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    );
}
