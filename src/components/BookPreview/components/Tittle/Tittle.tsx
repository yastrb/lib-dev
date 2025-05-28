import cn from 'classnames'
import { useBookPreviewContext } from 'components/BookPreview/context/BookPreviewContext'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/catalog/${offer.id}`)
  }
  return (
    <p onClick={handleClick} className={cn(s.Tittle, className)}>
      {tittle}
    </p>
  )
}