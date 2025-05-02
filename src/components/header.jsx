import { useState } from 'react'
// import { Bars3Icon } from '@heroicons/react/24/outline'
// import ThemeSwitcher from './themeSwitcher'
// import { Link } from 'react-router-dom'
import { MobileHeader } from './mobileHeader'
import { navBarItems } from '../constants/navbar'
import { Navbar } from './navbar'

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
        <header className="fixed inset-x-0 top-0 z-50">

            <Navbar navigationItems={navBarItems} handleMobileMenu={handleMobileMenu}/>

            <MobileHeader navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        </header>
    );
}
