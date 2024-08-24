'use client';
import Link from 'next/link';
import { useState } from 'react';

function HeaderCmp() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

    return (
        <>
            <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                onClick={toggleMobileMenu}
            >
                <svg
                    className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
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
                    className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
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
                {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        title={item}
                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                        {item}
                    </Link>
                ))}

                <Link
                    href="/login"
                    title="Get started now"
                    className="inline-flex items-center px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                >
                    Get started now
                </Link>
            </div>

            <nav
                className={`pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            >
                <div className="flow-root">
                    <div className="flex flex-col px-6 -my-2 space-y-1">
                        {['Features', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                title={item}
                                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="px-6 mt-6">
                    <Link
                        href="/login"
                        title="Get started now"
                        className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    >
                        Get started now
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default HeaderCmp;
