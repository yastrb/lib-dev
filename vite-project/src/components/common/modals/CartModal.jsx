import close from '../../../assets/close-modal.svg';
import { removeFromCart } from '../../../redux/cartSlice';
import styles from '../../../style';
import { useSelector, useDispatch} from 'react-redux';


const CartModal = ({ toggleModal }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = useSelector((state) => state.cart.amount);

    const handlClearCart = () => {
        cartItems.forEach(item=>{
            dispatch(removeFromCart((item._id)))
        })
    }
    return (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-[300px] md:w-[600px] xl:w-[996px] ">
                <h1 className={`${styles.heading} text-center mb-6`}>Кошик</h1>

                <div className={`${styles.menu} flex justify-between block-with-divider text-grey`}>
                    <div>{amount}</div>
                    <button onClick={handlClearCart}>Видалити все</button>
                </div>

                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item._id} className="cart-item">
                            <h2>{item.title}</h2>
                            <p>Автор: {item.author_id.map(author => `${author.name} ${author.surname}`).join(', ')}</p>
                            <p>Ціна: ${item.price_id.discounted_price || item.price_id.original_price}</p>
                        </div>
                    ))}
                </div>

                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>
        </div>
    );
};

export default CartModal;
