import cn from 'classnames'

import BookPreviewContext, { TBookPreviewContextType } from './context/BookPreviewContext'

import s from './BookPreview.module.scss'

type TBookPreviewProps = {
  children: React.ReactNode
  className?: string
  contextValue: TBookPreviewContextType
}

const BookPreview = ({ children, className, contextValue }: TBookPreviewProps) => {
  return (
    <BookPreviewContext.Provider value={contextValue}>
      <div className={cn(s.BookPreview, className)}>{children}</div>
    </BookPreviewContext.Provider>
  )
}

export default BookPreview
