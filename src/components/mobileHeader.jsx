import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ThemeSwitcher from './themeSwitcher'

export function MobileHeader( { navigation, mobileMenuOpen, setMobileMenuOpen, handleMobileMenu }) {

    
    return (
        <>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#2b0076] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-24 font-mono flex flex-col text-center space-y-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg px-3 py-2 text-2xl font-semibold text-gray-900 dark:text-blue-200 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <ThemeSwitcher className="inline lg:hidden"/>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    )
}