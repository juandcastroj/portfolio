import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import ThemeSwitcher from "./themeSwitcher";
import { Link } from "react-router-dom";

export function NavbarMobile({
  navigationItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleMobileMenu,
}) {
  return (
    <>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full h-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#faffb4] to-[#f7ff8b]  dark:bg-gradient-to-br dark:to-[#140824] dark:from-black px-6 py-6 sm:max-w-sm">
          <div className="flex items-center right-6 top-6 absolute">
            <button
              type="button"
              onClick={handleMobileMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-28">
            <div className="-my-6">
              <div className="py-8 flex flex-col text-center space-y-4 font-Monserrat">
                {
                  navigationItems.map(({ name, to }) => (
                  <Link
                    key={name}
                    to={to}
                    className="block rounded-lg px-3 py-3 text-3xl font-semibold text-green-900 dark:text-blue-200 hover:bg-gray-50"
                    onClick={handleMobileMenu}
                  >
                    {name}
                  </Link>
                ))}
              </div>

              <ThemeSwitcher className="inline lg:hidden" />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

NavbarMobile.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
};
