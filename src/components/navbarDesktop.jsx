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
          <nav className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-[#2b0076] shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    onClick={handleMobileMenu}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                  { navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900 dark:text-blue-200 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <ThemeSwitcher className="hidden lg:inline" />
              </div>
            </div>
          </nav>
        ) : (<></>)
      }
    </>
  );
}