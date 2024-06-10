import React from 'react'
import { w8, w7, w12, w11 } from '../assets';




export default function Works() {
    return (
        <div id='works' className="h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold uppercase text-blue-500 lg:text-4xl">Our Portfolio</h2>
                        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                            This is a section of some simple filler text,
                            also known as placeholder text. It shares some characteristics of a real written text.
                        </p>
                    </div>
                    <a href="#"
                        className="inline-block rounded-lg border border-2 dark:border-white px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 hover:text-black outline-none ring-indigo-300 transition duration-100 hover:bg-white focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                        View More
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={`${w7}`} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Branding & Advertising</span>
                    </a>

                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={`${w8}`} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Design Solutions</span>
                    </a>

                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={`${w12}`} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Digital Marketing</span>
                    </a>

                    <a href="#"
                        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={`${w11}`} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Content Solutions</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
