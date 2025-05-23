import BookPreview from './BookPreview'
import AddToCartButton from './components/AddToCartBtn'
import Author from './components/Author/Author'
import Image from './components/Image/Image'
import Price from './components/Price/Price'
import Title from './components/Tittle/Tittle'

type TBookPreviewComponent = typeof BookPreview & {
  AddToCartButton: typeof AddToCartButton
  Author: typeof Author
  Image: typeof Image
  Price: typeof Price
  Title: typeof Title
}

const EnhancedBookPreview = BookPreview as TBookPreviewComponent

EnhancedBookPreview.AddToCartButton = AddToCartButton
EnhancedBookPreview.Author = Author
EnhancedBookPreview.Image = Image
EnhancedBookPreview.Price = Price
EnhancedBookPreview.Title = Title

export default EnhancedBookPreview