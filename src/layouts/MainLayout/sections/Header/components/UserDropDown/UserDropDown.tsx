import client from 'api/index'
import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './UserDropDown.module.scss'

interface Props {
  className?: string
}

export default function UserDropDown({ className = '' }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    client.AM.logout()
    window.location.reload()
  }

  return (
    <div className={cn(s.UserDropDown, className)}>
      <button
        className={s.avatarButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className=" icon cursor-pointer"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M17 32V31C17 27.134 20.134 24 24 24C27.866 24 31 27.134 31 31V32"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className={s.dropdown}>
          <Link to="/profile" className={s.dropdownItem}>
            Мій профіль
          </Link>
          <button
            onClick={handleLogout}
            className={s.dropdownItem}
          >
            Вийти
          </button>
        </div>
      )}
    </div>
  )
}