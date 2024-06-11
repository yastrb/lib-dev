
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author_id.map(author => `${author.name} ${author.surname}`).join(', ')}</p>
      <p>Price: ${book.price_id.discounted_price || book.price_id.original_price}</p>
      <button className=' bg-button rounded-lg p-2 hover:bg-hover' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default BookCard;