import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const { offer } = useBookPreviewContext()
  const imageUrl = offer.images?.[0]?.url || ''
  const handleClick = () => {
    navigate(`/catalog/${offer.id}`)
  }
  return (
    <img
      onClick={handleClick}
      className={cn(s.Image, className)}
      src={imageUrl}
      alt={offer.title}
    />
  )
}