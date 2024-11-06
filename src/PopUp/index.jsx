import { useEffect } from 'react'
import cart from './image/cart.svg'
import close from './image/close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals} from '../redux/cartSlice'

const PopUp = ({handleClose}) => {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.cart.amount)
	const total = useSelector(state => state.cart.total)

  useEffect(() => {
		dispatch(calculateTotals())
	}, [])


  return (
  <div className=" popup z-1000 ] fixed inset-0 flex items-center justify-center">
    <div className="w-[350px bg-white rounded-lg p-6 shadow-lg w-80 text-center">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={cart} className='text-lg mr-2' alt="shopping_cart" />
          <span className="font-semibold text-lg">Товар в кошику :)</span>
        </div>
        <button onClick={handleClose}  className="text-gray-500 hover:text-black">
          <img src={close} alt="close" />
        </button>
      </div>

      <p className="text-gray-500">Всього: {amount} товари</p>
      <p className="text-gray-500 mb-4">Сума товарів: {total} грн</p>

      <button
        onClick={handleClose}
        className="bg-yellow-400 rounded-lg px-4 py-2 text-white font-semibold hover:bg-yellow-500 transition duration-300"
      >
        Оформити замовлення
      </button>
    </div>
  </div>
);
} ;

 
 


export default PopUp;
