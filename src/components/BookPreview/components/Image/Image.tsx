import cn from 'classnames'
import { useBookPreviewContext } from '../../context/BookPreviewContext'
import s from './Image.module.scss'

interface Props {
  className?: string
}

/**
 *  Image
 *  @param className
 */

export default function Image({ className = '' }: Props) {
  const { offer } = useBookPreviewContext()
  const imageUrl = offer.images?.[0]?.url || ''
  return (
    <img className={cn(s.Image, className)} src={imageUrl} alt={offer.title} />
  )
}