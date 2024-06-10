import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { navLinks2 } from '../constants'
import { gt, menu } from '../assets'
import { close } from '../assets'


const Navbar = () => {

    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("transparent") : setnavColor("#000");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const [active, setActive] = useState("");
    const [toggle, setToogle] = useState(false);
    return (
        // <div>navbar</div>
        <nav style={{
            backgroundColor: navColor,
            opacity: 1,
            transition: "all 1s"
        }} className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 `}>
            <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
                <ul className='list-none hidden sm:flex flex-row gap-20'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-slate-400" : "text-slate-400"} uppercase hover:text-white text-[18px] font-normal cursor-pointer `} onClick={() => { setActive(link.title) }}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                {/* <span className="px-8 cursor-pointer font-bold text-4xl text-white">
                    GraF-Tech
                </span> */}
                <img className='px-20 cursor-pointer w-96' src={`${gt}`} alt="Logo image"></img>
                <ul className='list-none hidden sm:flex flex-row gap-20'>
                    {navLinks2.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-slate-400" : "text-slate-400"} uppercase hover:text-white text-[18px] font-normal cursor-pointer `} onClick={() => { setActive(link.title) }}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                {/* <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <p className='text-black text-[18px] font-bold cursor-pointer'>GraF Tech</p>
                </Link> */}

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? close : menu} className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => { setToogle(!toggle) }} />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-5'>
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-slate-400" : "text-slate-400"} uppercase font-poppins font-medium text-[16px] cursor-pointer `} onClick={() => {
                                    setToogle(!toggle);
                                    setActive(link.title);
                                }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                            {navLinks2.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-slate-400" : "text-slate-400"} uppercase font-poppins font-medium text-[16px] cursor-pointer `} onClick={() => { setActive(link.title) }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar