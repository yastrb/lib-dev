import cn from 'classnames'
import { useBookPreviewContext } from 'components/BookPreview/context/BookPreviewContext'
import s from './Price.module.scss'

interface Props {
  className?: string
}

/**
 *  Price
 *  @param className
 */

export default function Price({ className = '' }: Props) {
  const { offer } = useBookPreviewContext()
  const price = offer.price || 'No price available'

  return (
    <p className={cn(s.Price, className)}>
      {price}<span>грн</span>
    </p>
  )
}