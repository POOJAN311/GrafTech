import React from 'react'
import { client1 } from '../assets'
import { client2 } from '../assets'
import { client3 } from '../assets'
import { client4 } from '../assets'
import { client5 } from '../assets'
import { client6 } from '../assets'
import { client7 } from '../assets'
import { client9 } from '../assets'

export default function Clients() {
    return (
        <section class="w-full md:px-4">
            <div class="mb-20 text-center">
                <span class="text-blue-500 text-center text-4xl font-bold mb-4 block">OUR PARTNERS</span>
                <h1 class="text-4xl text-white text-center font-bold">We work with the best partners</h1>
            </div>
            <div className='bg-white'>
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="flex flex-wrap items-center justify-center">
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client1}`}
                                        alt="image"
                                        class="h-32 w-full"
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client4}`}
                                        alt="image"
                                        class="h-38 w-full"
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client3}`}
                                        alt="image"
                                        class="h-32 w-full"
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client7}`}
                                        class="h-32 w-full"
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client6}`}
                                        class="h-32 w-32"
                                    />
                                </a>
                                <a
                                    href="javascript:void(0)"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                >
                                    <img
                                        src={`${client9}`}
                                        class="h-32 w-32"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <section class="relative block h-screen mt-48 bg-neutral-900/50">
        //     <div class="mb-20 text-center">
        //         <span class="text-blue-500 text-center text-4xl font-bold mb-4 block">OUR PARTNERS</span>
        //         <h1 class="text-4xl text-white text-center font-bold">We work with the best partners</h1>
        //     </div>
        //     <div class="relative flex flex-col items-center justify-center mx-auto max-w-5xl px-6 py-10 md:py-20 md:px-10">
        //         <div class="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-4">
        //             <a href="#"
        //                 class="flex justify-center items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client1}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client2}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client3}`} alt="" srcset="" />

        //             </a>
        //             <a href="#"
        //                 class="flex justify-center w-1/2 items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client4}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client5}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center w-3/4 items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client6}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client8}`} alt="" srcset="" />
        //             </a>
        //             <a href="#"
        //                 class="flex justify-center w-1/2 items-center shadow-sm h-24 rounded-2xl">
        //                 <img src={`${client9}`} alt="" srcset="" />
        //             </a>
        //         </div>
        //     </div>
        // </section>

    )
}
