'use client'
import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" title="Home" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`block w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`block w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link href="/features" title="Features" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Features
            </Link>

            <Link href="/solutions" title="Solutions" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Solutions
            </Link>

            <Link href="/resources" title="Resources" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Resources
            </Link>

            <Link href="/pricing" title="Pricing" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Pricing
            </Link>
          </div>

          <Link
            href="/get-started"
            title="Get started now"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
          >
            Get started now
          </Link>
        </nav>
        <nav
          className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <Link href="/features" title="Features" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Features
              </Link>

              <Link href="/solutions" title="Solutions" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Solutions
              </Link>

              <Link href="/resources" title="Resources" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Resources
              </Link>

              <Link href="/pricing" title="Pricing" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Pricing
              </Link>
            </div>
          </div>
          <div className="px-6 mt-6">
            <Link
              href="/get-started"
              title="Get started now"
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
            >
              Get started now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
