import { createContext, useContext } from 'react'
import { TBookBook } from 'types/TBook'

export interface TBookPreviewContextType {
  offer: TBookBook;
}

const defaultValue: TBookPreviewContextType = {
  offer: {} as TBookBook,
};

const BookPreviewContext = createContext<TBookPreviewContextType>(defaultValue);

export const useBookPreviewContext = () => {
  const context = useContext(BookPreviewContext);
  if (!context) {
    throw new Error('BookPreview components must be used within BookPreview');
  }
  return context;
};

export default BookPreviewContext;