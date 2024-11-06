import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';

const useAddToCart = (book) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return handleAddToCart;
};

export default useAddToCart;
