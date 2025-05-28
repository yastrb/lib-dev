import cn from 'classnames'
import { ChangeEvent } from 'react'
import s from './InputText.module.scss'

interface Props {
  className?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  errorText?: string
}

/**
 *  InputText
 *  @param className - Additional class name
 *  @param placeholder - Placeholder text
 *  @param value - Input value
 *  @param onChange - Change handler function
 */

export default function InputText({
  className = '',
  placeholder = "",
  value,
  onChange,
  errorText,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className={cn(s.InputText, className, { [s.Error]: errorText })}>
      <input
        type="text"
        className={s.inputArea}
        required
        id={placeholder}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <label htmlFor={placeholder} className={s.label}>
        {errorText || "*"}
      </label>
    </div>
  )
}