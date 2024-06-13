import close from '../../../assets/close-modal.svg';
import { removeFromCart } from '../../../redux/cartSlice';
import styles from '../../../style';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../../../redux/cartSlice';

const CartModal = ({ toggleModal }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = useSelector((state) => state.cart.amount);
    const total = useSelector((state) => state.cart.total);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-[300px] md:w-[600px] xl:w-[996px] flex flex-col h-[80vh] max-h-[90vh] pb-[50px]">
                <h1 className={`${styles.heading} text-center mb-6`}>Кошик</h1>

                {/* cart items container */}
                <div className="cart-items flex flex-col flex-grow overflow-hidden">
                    {cartItems.length > 0 ? (
                        <>
                            {/* cart heading */}
                            <div className={`${styles.menu} cart-heading flex justify-between block-with-divider text-grey`}>
                                <div>{amount} шт</div>
                                <button onClick={handleClearCart}>Видалити все</button>
                            </div>

                            {/* items list */}
                            <div className='cart-list overflow-y-auto max-h-[560px] mt-4 mx-6 flex-grow'>
                                {cartItems.map((item) => {
                                    return <CartItem key={item._id} {...item} />
                                })}
                            </div>

                            <div className='cart-total mt-4'>
                                {/* total */}
                                <div className='flex justify-between px-6 mb-8'>
                                    <p className={`${styles.subtitleSemibold}`}>Разом</p>
                                    <div className={`${styles.subtitleSemibold}`}>{total} грн</div>
                                </div>

                                {/* cart action buttons */}
                                <div className='flex gap-10 px-6 items-center justify-center'>
                                    <button className={`${styles.button} py-[14px]  w-[240px] border border-button rounded-xl`}>Продовжити покупки</button>
                                    <button className={`${styles.button} py-[14px] px-12 w-[240px] border border-button bg-button rounded-xl `}>До сплати</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className={`${styles.subtitleMain} cart-info text-grey`}>Кошик поки що порожній :)</p>
                    )}
                </div>

                {/* close btn */}
                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>
        </div>
    );
};

export default CartModal;
