import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./themeSwitcher";

export function NavbarDesktop({ navigationItems, handleMobileMenu }) {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 120) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>    
      {
        isVisible ? (
                  <nav aria-label="Global" className="font-mono animate-fade-down animate-duration-[1500ms] animate-delay-200 mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8">
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
                       
                       { 
                        navigationItems.map(( {name, href} , index) => (
                           <Link key={index} to={'#' + name} className="text-base font-semibold text-green-900 dark:text-gray-600">
                               {name}
                           </Link>
                           ))
                       }
                   </div>
   
                   <ThemeSwitcher className="hidden lg:inline"/>
               </nav>
         ) : (<></>)
      } 
    </>
  );
}