'use client';
import Image from "next/image";
import {useState, useRef, useEffect} from "react";

export default function Footer() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (


        <footer className="bg-background rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            src="/ReignText.svg"
                            alt="Reign Logo"
                            className="invert w-auto h-12"
                            width={100}
                            height={12}
                            priority
                        />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline underline-offset-8 me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline underline-offset-8 me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline underline-offset-8 me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline underline-offset-8">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-primary sm:mx-auto lg:my-8" />
            </div>
        </footer>


    )
}
