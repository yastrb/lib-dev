import cn from 'classnames'
import { ChangeEvent, useState } from 'react'
import EyeClosedIcon from '../../assets/eye-closed.svg?react'
import EyeOpenIcon from '../../assets/eye-open.svg?react'
import s from './InputPassword.module.scss'

interface Props {
  className?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  errorText?: string
}

export default function InputPassword({
  className = '',
  placeholder = "",
  value,
  onChange,
  errorText,
}: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={cn(s.InputPassword, className, { [s.Error]: errorText })}>
      <input
        type={isVisible ? "text" : "password"}
        className={s.inputArea}
        required
        id="inputPassword"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <label htmlFor="inputPassword" className={s.label}>
        {errorText || "*"}
      </label>
      <button
        type="button"
        className={s.visibilityToggle}
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </button>
    </div>
  )
}