// import React from 'react';

import styles from "../../style";
import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import user from "../../assets/user.svg"
import SearchBar from './SearchBar';
import SelectLanguage from './SelectLanguage';
import Nav from './Nav';


const Header = () => {
  return (
    <header className=' w-full '>
      <div className='bg-main pt-[44px]'>
        <div className={`${styles.paddingX} flex justify-between  py-5`}>
          <img src={logo} alt="BookShop" className=' w-[180px] h-[80px]' />

          <div className=' hidden md:flex'>
            <SearchBar />
          </div>

          <div className=' flex'>

            <div className=" hidden md:flex">
              <SelectLanguage />
            </div>

            <div className="flex">
              <img src={cart} alt="cart" />
              <img src={user} alt="user" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className={`${styles.paddingX} py-5`}>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header