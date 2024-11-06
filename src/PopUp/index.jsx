import cart from './image/cart.svg'
import close from './image/close.svg'
const PopUp = ({ totalItems, totalPrice, onClose }) => (
  <div className=" z-1000 w-[350px] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={cart} className='text-lg mr-2' alt="shopping_cart" />
          <span className="font-semibold text-lg">Товар в кошику :)</span>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <img src={close} alt="close" />
        </button>
      </div>

      <p className="text-gray-500">Всього: {totalItems} товари</p>
      <p className="text-gray-500 mb-4">Сума товарів: {totalPrice} грн</p>

      <button
        onClick={onClose}
        className="bg-yellow-400 rounded-lg px-4 py-2 text-white font-semibold hover:bg-yellow-500 transition duration-300"
      >
        Оформити замовлення
      </button>
    </div>
  </div>
);


export default PopUp;
