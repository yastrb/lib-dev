import close from '../../../assets/close-modal.svg';
import { removeFromCart } from '../../../redux/cartSlice';
import styles from '../../../style';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';

const CartModal = ({ toggleModal }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = useSelector((state) => state.cart.amount);

    const handleClearCart = () => {
        cartItems.forEach(item => {
            dispatch(removeFromCart(item._id));
        });
    };

    return (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-[300px] md:w-[600px] xl:w-[996px]">
                <h1 className={`${styles.heading} text-center mb-6`}>Кошик</h1>

                <div className="cart-items">
                    {cartItems.length > 0 ? (
                        <>
                            <div className={`${styles.menu} cart-heading flex justify-between block-with-divider text-grey`}>
                                <div>{amount} шт</div>
                                <button onClick={handleClearCart}>Видалити все</button>
                            </div>

                            <div className='mt-8 mx-6 flex flex-col gap-6'>
                                {cartItems.map((item) => {
                                    return <CartItem key={item._id} {...item}/>
                                })}
                            </div>

                        </>
                    ) : (

                        <p className={`${styles.subtitleMain} cart-info text-grey`}>Кошик поки що порожній :)</p>
                    )}
                </div>

                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>
        </div>
    );
};

export default CartModal;
