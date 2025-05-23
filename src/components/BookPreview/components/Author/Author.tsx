import cn from 'classnames'
import { useBookPreviewContext } from 'components/BookPreview/context/BookPreviewContext'
import s from './Author.module.scss'

interface Props {
  className?: string
}

/**
 *  Author
 *  @param className
 */

export default function Author({ className = '' }: Props) {
  const { offer } = useBookPreviewContext()
  const author = offer.author || 'No author available'
  return (
    <p className={cn(s.Author, className)}>
      {author}
    </p>
  )
}