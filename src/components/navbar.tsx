import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
  const navItems = [
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "/", label: "HOME" },
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "/accomodations", label: "ACCOMODATION" },
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "/transportation", label: "TRANSPORTATION" },
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "tours", label: "TOURS" },
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "/contact", label: "CONTACT" },
    { className: "rounded-md px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:bg-gray-700 hover:text-white", route: "/faq", label: "FAQs" }
  ]
  return (
    <nav className="w-100 my-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center items-center gap-4 w-100 relative" >
            <div className='flex align-center justify-center w-6/12 relative'>
              <Image className="h-8 w-auto" src='/logo.png' width={100} height={20} alt='logo' />
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navItems.map(nav => (<Link href={nav.route} className={nav.className} key={nav.label} replace>{nav.label}</Link>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
