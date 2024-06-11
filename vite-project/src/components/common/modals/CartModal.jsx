import close from '../../../assets/close-modal.svg';
import { removeFromCart } from '../../../redux/cartSlice';
import styles from '../../../style';
import { useSelector, useDispatch } from 'react-redux';

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
                                {cartItems.map((item) => (

                                    <div key={item._id} className="cart-item flex justify-between">

                                        <div className=' flex'>
                                            <img className='hidden' src={item.coverImageLink} alt={item.title} />
                                            <div>
                                                <h2>{item.title}</h2>
                                                <p>Автор: {item.author_id.map(author => `${author.name} ${author.surname}`).join(', ')}</p>
                                                <p>Код товару {item.isbn}</p>
                                            </div>
                                        </div>

                                        <div className=' flex flex-col'>
                                            <button>delete</button>
                                            <div className=' flex justify-between'>
                                                <div className=' flex'>
                                                    <button>-</button>
                                                    <div>{ }</div>
                                                    <button>+</button>
                                                </div>
                                                <p>{item.price_id.discounted_price || item.price_id.original_price} грн</p>
                                            </div>

                                        </div>

                                    </div>
                                ))}
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
