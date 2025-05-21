import cn from 'classnames'
import { useBookPreviewContext } from 'components/BookPreview/context/BookPreviewContext'
import s from './Tittle.module.scss'

interface Props {
  className?: string
}

/**
 *  Tittle
 *  @param className
 */

export default function Tittle({ className = '' }: Props) {
  const { offer } = useBookPreviewContext()
  const tittle = offer.title || 'No title available'
  return (
    <p className={cn(s.Tittle, className)}>
      {tittle}
    </p>
  )
}