import React from 'react'
import { styles } from '../style';
import { ae } from '../assets';
import { ai } from '../assets';
import { ps } from '../assets';
import { id } from '../assets';
import { pr } from '../assets';
const Hero = () => {
    return (
        <section id='home' className='relative mt-28 w-full mx-auto'>
            <div className="flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2
                            className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            <span className="font-bold text-white">Dream. Design. Deliver.</span>
                        </h2>
                        <span className="font-bold text-white">--- What We Do ---</span>
                        <p className="max-w-md mx-auto text-base text-white sm:text-lg md:mt-2 md:text-xl md:max-w-3xl">
                            We Make your brand better and more impactful so that you can identify your problems.
                        </p>
                        <div className="mt-2 sm:flex md:mt-6">
                            <div className="rounded-md shadow"><a href=""
                                className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-transperant transition duration-150 ease-in border-2 hover:bg-black hover:text-white rounded-md md:py-2 md:text-lg md:px-5">
                                Getting started
                            </a></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded  md:p-8">
                        <div
                            className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            <div>
                                <img className='hover:animate-wiggle' src={`${ae}`} alt="" srcset="" />
                            </div>
                            <div>
                                <img className='hover:animate-wiggle w-full' src={`${id}`} alt="" srcset="" />
                            </div>
                            <div>
                                <img className='hover:animate-wiggle' src={`${pr}`} alt="" srcset="" />
                            </div>
                            <div>
                                <img className='hover:animate-wiggle w-full' src={`${ai}`} alt="" srcset="" />
                            </div>
                            <div>
                                <img className='hover:animate-wiggle' src={`${ae}`} alt="" srcset="" />
                            </div>
                            <div>
                                <img className='hover:animate-wiggle w-full' src={`${ps}`} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero;