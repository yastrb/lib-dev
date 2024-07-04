import styles from '../../../style';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart, calculateTotals } from '../../../redux/cartSlice';
import { useEffect } from 'react';

const CartModal = ({ toggleModal }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const amount = useSelector((state) => state.cart.amount);
    const total = useSelector((state) => state.cart.total);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

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
                            <div className='cart-list overflow-y-auto max-h-[560px] mx-3 mt-4 md:mx-6 flex-grow'>
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
                                <div className='flex flex-col md:flex-row gap-3 md:gap-[6px] lg:gap-10 px-6 items-center justify-center'>
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
                    <svg
                    className="icon cursor-pointer"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75732 12.2431L6.99995 7.00045M6.99995 7.00045L12.2426 1.75781M6.99995 7.00045L1.75732 1.75781M6.99995 7.00045L12.2426 12.2431"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartModal;
