import React from 'react'
import { s1 } from '../assets';
import { s2 } from '../assets';
import { s3 } from '../assets';
import { s4 } from '../assets';
import { s5 } from '../assets';
import { s6 } from '../assets';
import { styles } from '../style'
import { useRef, useState } from "react";
import Select from "react-tailwindcss-select";
import emailjs from '@emailjs/browser';



const Services = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        budget: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_jg5xfbi',
            'template_4lojk8h',
            {
                from_name: form.name,
                to_name: 'Maharshi',
                from_email: form.email,
                to_email: 'graphtech.ltd@gmail.com',
                website: form.website,
                phone: form.phone,
                budget: form.budget,
                message: form.message,
            },
            '1eh7gq2SvFuBBo31s').then(() => {
                setLoading(false);
                alert("Thank you. I will get back to you as soon as possible.");
                setForm({
                    name: '',
                    website: '',
                    email: '',
                    phone: '',
                    budget: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false);
                console.log(error);
                alert("Something went wrong !!");
            })
    }

    const styles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: '#f7fafc',
        }),
        option: (base) => ({
            ...base,
            color: '#2d3748',
            backgroundColor: '#f7fafc',
        }),
    };
    return (
        <section id='services' className='relative w-full mx-auto mt-8'>
            <div className='flex flex-row justify-center text-center mx-auto w-3/4 text-xl font-normal md:leading-normal tracking-tight text-white sm:text-2xl sm:leading-8 md:text-5xl'><p className=''>A 360-Degree <span className='hover:text-red-500'>Branding</span>, <span className='hover:text-red-500'>Advertising</span>, <span className='hover:text-red-500'>Creative</span>, <span className='hover:text-red-500'>Digital Marketing</span> And <span className='hover:text-red-500'>Communication Agency</span></p></div>
            <div className="flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left w-full">
                        <h2
                            className="text-2xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl">
                            <span className="font-bold text-blue-500 underline">Enquire Now</span>
                        </h2>
                        <div className='rounded-2xl'>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className='mt-3 flex flex-col gap-4'
                            >
                                <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-2'>Company Name</span>
                                    <input
                                        type='text'
                                        name='name'
                                        value={form.name}
                                        required={true}
                                        onChange={handleChange}
                                        placeholder="What's your company or buisness name?"
                                        className='bg-slate-500 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-2'>Company Website</span>
                                    <input
                                        type='text'
                                        name='website'
                                        value={form.website}
                                        required={true}
                                        onChange={handleChange}
                                        placeholder="What's your company website?"
                                        className='bg-slate-500 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-2'>Your email</span>
                                    <input
                                        type='email'
                                        name='email'
                                        value={form.email}
                                        required={true}
                                        onChange={handleChange}
                                        placeholder="What's your web address?"
                                        className='bg-slate-500 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-2'>Your Phone</span>
                                    <input
                                        type='tel'
                                        maxLength={10}
                                        name='phone'
                                        required={true}
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="What's your phone number?"
                                        className='bg-slate-500 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex flex-row mt-4'>
                                    <span className='text-white font-medium mb-2 mr-3'>Give us your estimate budget for project</span>
                                    <input
                                        type='text'
                                        name='budget'
                                        value={form.budget}
                                        onChange={handleChange}
                                        placeholder="What's your project budget?"
                                        className='bg-slate-500 py-3 px-8 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='text-white font-medium mb-2'>Your Project</span>
                                    <textarea
                                        rows={7}
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder='Tell us about your project...  '
                                        className='bg-slate-500 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                                    />
                                </label>
                                <button
                                    type='submit'
                                    className='w-1/4 font-medium px-4 text-white bg-transperant transition duration-150 ease-in border-2 hover:bg-white hover:text-black rounded-md md:py-2 md:text-lg md:px-5'
                                >
                                    {loading ? "Submiting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded md:p-8">
                        <h2
                            className="text-blue-400 text-3xl font-bold sm:text-5xl sm:leading-none md:text-6xl">
                            <span className="font-bold text-blue-500">Services</span>
                        </h2>
                        <p className="mx-auto text-base sm:text-lg md:mt-2 md:text-xl md:max-w-3xl">
                            We provide services for digital marketing, branding, Advertising and development so that you can grow your buisness.
                        </p>
                        <div className="mt-2 sm:flex md:mt-6">
                            <ul className="grid grid-rows-3 gap-3 grid-flow-col list-none">
                                <li className="mt-5 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-2' src={`${s4}`} alt="" srcset="" />Stop-Motion Animation</li>
                                <li className="mt-5 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-3' src={`${s5}`} alt="" srcset="" />VFX & CGS Videos</li>
                                <li className="mt-5 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-3' src={`${s3}`} alt="" srcset="" />Concept Shorts</li>
                                <li className="mt-5 ml-3 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-3' src={`${s6}`} alt="" srcset="" />Website development</li>
                                <li className="mt-5 ml-3 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-3' src={`${s2}`} alt="" srcset="" />Design Training</li>
                                <li className="mt-5 ml-3 flex flex-row items-center text-lg text-gray-500 hover:text-white"><img className='pr-3' src={`${s1}`} alt="" srcset="" />UCEED/CEED & NID</li>
                            </ul>
                        </div>
                        <div className="rounded-md mt-6 shadow"><a href=""
                            className="flex w-1/4 py-2 text-base font-medium px-4 text-white bg-transperant transition duration-150 ease-in border-2 hover:bg-white hover:text-black rounded-md md:py-2 md:text-lg md:px-5">
                            View More
                        </a></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Services