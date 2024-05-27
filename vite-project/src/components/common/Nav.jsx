import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from "../../constants/index.js";
import menu from "../../assets/menu.svg";
import SearchBar from './SearchBar.jsx';
import close from '../../assets/close.svg';
import SelectLanguage from './SelectLanguage.jsx';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className='hidden md:flex md:justify-between heading'>

                {/* navlinks desktop */}
                <nav className='flex gap-3'>
                    {navLinks.map(link => (
                        <NavLink key={link.id} to={link.path}>{link.display}</NavLink>
                    ))}
                </nav>
                <span>
                    +380 053 088 3635
                </span>
            </div>

            <div className='flex justify-between md:hidden'>

                    {/*open menu btn on mobile devices*/}
                <div className='w-12 h-12'>
                    <img 
                        onClick={toggleMenu}
                        src={menu} 
                        alt="menu" 
                        className='cursor-pointer w-12 h-12 object-cover' 
                    />
                </div>

                    {/* searchbar on mobile devices */}
                <div className='flex md:hidden'>
                    <SearchBar />
                </div>
            </div>

            {/* overlay for blur effect */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
            )}

            {/* mobile menu */}
            <div className={`${menuOpen ? "absolute" : "hidden"} md:hidden absolute z-50 top-0 left-0 bottom-0 w-[300px] bg-secondary rounded-r-2xl pt-2 pr-2 sidebar drop-shadow-md`}>
                <div className='flex justify-end mb-6 cursor-pointer'>
                    <img 
                        onClick={toggleMenu}
                        src={close} 
                        alt="close" 
                        className='w-12 h-12' 
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <nav className='flex flex-col justify-center items-center gap-8 py-[14px] mb-6'>
                        {navLinks.map(link => (
                            <NavLink key={link.id} to={link.path}>{link.display}</NavLink>
                        ))}
                    </nav>
                    <div className='mb-[38px]'>
                        <SelectLanguage />
                    </div>
                    <span>
                        +380 053 088 3635
                    </span>
                </div>
            </div>
        </>
    );
};

export default Nav;
