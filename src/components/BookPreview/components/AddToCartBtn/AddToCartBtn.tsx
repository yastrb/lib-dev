import cn from 'classnames'
import s from './AddToCartBtn.module.scss'

interface Props {
  className?: string
  onClick?: () => void
}

/**
 *  AddToCartBtn
 *  @param className
 */

export default function AddToCartBtn({ className = '', onClick }: Props) {
  return (
    <button onClick={onClick} className={cn(s.AddToCartBtn, className)}>
      В кошик
    </button>
  )
}