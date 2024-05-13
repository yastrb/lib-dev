import React from 'react';

import styles from "../../style";
import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import user from "../../assets/user.svg"

const Header = () => {
  return (
    <nav className=' w-full'>
      <div className='bg-main'>
        <div className={`${styles.paddingX} flex justify-between py-5`}>
          <img
            src={logo}
            alt="BookShop"
            className=' w-[180px] h-[80px]'
          />
          <div className=' flex flex-end'>
            <img src={cart} alt="cart" />
            <img src={user} alt="user" />
          </div>
        </div>
      </div>

      <div className="bg-secondary">down</div>
    </nav>
  )
}

export default Header