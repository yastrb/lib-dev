import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../../../../../ui/SearchBar'
import close from '../../assets/close.svg'
import menu from '../../assets/menu.svg'
import s from './MobileNav.module.scss'

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
 const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    // Toggle body scroll
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto'
  }

  const DrawerList = (
    <div className={cn(s.DrawerList, { [s.active]: menuOpen })}>
      <img
        onClick={toggleMenu}
        src={close}
        alt='close'
				className={s.btnClose}
      />
			<div className={s.links}>
      <Link to={'/'}>Головна</Link>
      <Link to={'/catalog'}>Каталог</Link>
      <Link to={'/about'}>Про нас</Link>
      <Link to={'/top-books'}>Топ книг</Link>
      <Link to={'/special-offers'}>Акції</Link>
      <span>+380 053 088 3635</span>
			</div>
    </div>
  )

  return (
    <div className={s.MobileNav}>
      <img
        onClick={toggleMenu}
        src={menu}
        alt='menu'
				className={s.btnOpen}
      />
      <SearchBar />
      <div 
        className={cn(s.Drawer, { [s.active]: menuOpen })} 
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenuOpen(false)
          }
        }}
      >
        {DrawerList}
      </div>
    </div>
  )
}