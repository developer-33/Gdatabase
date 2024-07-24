import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


import "../index.css"
const navigation = [ 
  { name: 'login', href: '/login', current: false },
  { name: 'Home', href: '/home', current: false },
  { name: 'News', href: '/News', current: false },
  { name: 'Sniper', href: '/sniper', current: false },
  { name: 'AdminDashBoard', href: '/admindashboard', current: false },
  { name: 'Assault', href: '/assault', current: false },
  { name: 'MarksMan', href: '/marksman', current: false },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({ isDarkMode, toggleDarkMode }) {
  return (


    <Disclosure as="nav" className="
    bg-yellow-400
     dark:bg-black
  
      dark:text-yellow-400"
      >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2
              bg-yellow-400
               dark:bg-black
                text-black
                 dark:text-yellow-400  
           
           
          
               hover:text-yellow-400 focus:outline-none
                focus:ring-2 focus:ring-inset
                 focus:ring-yellow-400">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/src/client/assets/callLogo.png"

                className="h-8 w-auto"
              />
                    <div className="text-2xl font-bold">
    <button 
    onClick={toggleDarkMode} 
    className="p-2 bg-yellow-400
     dark:bg-black
      text-black
       dark:text-yellow-400"
  >
    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2" />
    {isDarkMode ? '' : ''}
  </button>
  </div>
            {/* End of Dark Mode */}

            </div>
   
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-yellow-400 text-yellow-400' : 'text-black dark:text-yellow-400 hover:bg-black hover:text-yellow-400',
                      'rounded-md px-12 py-2 text-md font-large',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-yellow-400 dark:bg-black p-1 text-black dark:text-yellow-400  hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black focus"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
              
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
              
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src=""
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  bg-yellow-400 dark:bg-black p-1 text-black dark:text-yellow-400   py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm  bg-yellow-400 dark:bg-black p-1 text-black dark:text-yellow-400  ">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm  bg-yellow-400 dark:bg-black p-1 text-black dark:text-yellow-400  ">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm  bg-yellow-400 dark:bg-black p-1 text-black dark:text-yellow-400  ">
                    Sign out
                  </a>


             




                  
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-yellow-400 text-black' : 'dark:bg-black dark:text-yellow-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}








          
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
