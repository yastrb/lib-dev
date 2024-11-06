import cart from './image/cart.svg'
import close from './image/close.svg'

const PopUp = ({handleClose}) => {



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

      <p className="text-gray-500">Всього: {3} товари</p>
      <p className="text-gray-500 mb-4">Сума товарів: {3} грн</p>

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
