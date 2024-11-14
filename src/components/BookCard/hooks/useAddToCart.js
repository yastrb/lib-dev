import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

export const useAddToCart = (book) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return handleAddToCart;
};


