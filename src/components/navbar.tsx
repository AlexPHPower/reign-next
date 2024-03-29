'use client';
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 lg:ml-24">
                <a href="/" className="text-xl font-semibold">
                    <Image
                        src="/reign.svg"
                        alt="Reign Logo"
                        className="invert w-auto h-24"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsNavOpen(!isNavOpen)} className="flex items-center px-3 py-2 border rounded">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="hidden lg:block lg:flex-grow">
                <div className="text-sm lg:flex lg:justify-end lg:mr-24">
                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 mr-4 border-b-white border-b-2 hover:border-b-0">
                        About Reign
                    </a>
                    <a href="/sign-up" className="block mt-4 lg:inline-block lg:mt-0 border-b-white border-b-2 hover:border-b-0">
                        Sign Up
                    </a>
                </div>
            </div>
            {isNavOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-10 lg:hidden" onClick={() => setIsNavOpen(false)}></div>
            )}
            <div className={`fixed inset-y-0 left-0 transform ${isNavOpen ? "translate-x-0" : "-translate-x-full"} text-center w-64 p-6 transition duration-300 ease-in-out z-20 lg:hidden`}>
                <div className="text-sm">
                    <a href="/about" className="block py-2 border-b-destructive border-b-2">
                        About Reign
                    </a>
                    <a href="/sign-up" className="block py-2 border-b-destructive border-b-2">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    )
}
