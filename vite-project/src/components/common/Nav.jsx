// import React from 'react'
import { NavLink } from 'react-router-dom';
import { navLinks } from "../../constants/index.js"
import menu from "../../assets/menu.svg"
import SearchBar from './SearchBar.jsx';

const Nav = () =>  (
        <>
            <div className=' hidden md:flex md:justify-between heading'>

                <nav className=' flex gap-3' >
                    {navLinks.map(link => (
                        <NavLink key={link.id} to={link.path}>{link.display}</NavLink>
                    ))}
                </nav>
                <span>
                    +380 053 088 3635
                </span>
            </div>

            <div className=' flex justify-between md:hidden'>
                <div className=' w-12 h-12'>
                    <img src={menu} alt="menu" className=' cursor-pointer w-12 h-12 object-cover'/>
                </div>
                <div className=' flex md:hidden'>
                    <SearchBar />
                </div>

            </div>
        </>
    )


export default Nav