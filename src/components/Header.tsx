import { useState } from 'react'
import { navbarItems } from '../constants/navbarItems'
import { NavbarMobile } from './navbar/NavbarMobile'
import { NavbarDesktop } from './navbar/NavbarDesktop'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev)
    }

    return ( 
        <header className="fixed inset-x-0 top-0 z-50 font-Monserrat">
            <NavbarDesktop navigationItems={navbarItems} handleMobileMenu={handleMobileMenu}/>
            <NavbarMobile navigationItems={navbarItems} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    );
}
