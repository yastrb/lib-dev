import trash from './../../../assets/trash.svg'
import stock from './../../../assets/stock.svg'
import styles from '../../../style';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/cartSlice';
import { increase, decrease } from '../../../redux/cartSlice';
const CartItem = ({ _id, __v,  title, author_id, coverImageLink, isbn, price_id }) => {

    const dispatch = useDispatch();
    const  handleRemoveFromCart = () => {
        dispatch(removeFromCart(_id))
    }

    return (
        <>
            <div className="relative cart-item flex justify-between pb-6 after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-grey">
                <div className='flex gap-4'>

                    <img className='hidden xl:flex xl:w-[180px] xl:h-[240px] rounded-xl' src={coverImageLink} alt={title} />
                    <div>
                        <h4 className={`${styles.subtitleMedium} mb-2`}>{title}</h4>
                        <p className={`${styles.bodyRegular} mb-4`}>Автор: {author_id.map(author => `${author.name_ukr} ${author.surname_ukr}`).join(', ')}</p>
                        <p className={`${styles.bodyRegular} mb-4 p-2 bg-[#e4e5e5] rounded-xl`}>Код товару: {isbn}</p>
                        <p className=' flex gap-2 items-center'>
                            <img src={stock} alt="in stock" />
                            <span className={`${styles.bodyRegular} text-green`}>В наявності</span>
                        </p>
                    </div>

                </div>

                <div className='flex flex-col justify-between items-end'>
                    <button onClick={handleRemoveFromCart}>
                        <img src={trash} alt="remove item" />
                    </button>
                    <div className='flex gap-8 justify-between'>

                        {/* quantity */}
                        <div className='flex'>
                            <button onClick={() => {
                                if (__v === 1) {
                                    dispatch(removeFromCart(_id));
                                  }
                                  else {
                                    dispatch(decrease({ _id }));
                                  }
                                  
                            }} className=' flex items-center justify-center w-12 h-12'>-</button>
                            <div className='flex items-center justify-center w-12 h-12 border-solid border-[1px] border-grey rounded-lg'>{__v}</div>
                            <button onClick={()=>{
                                dispatch(increase({_id}))
                            }} className='flex items-center justify-center w-12 h-12'>+</button>
                        </div>

                        {/* price */}
                        <h4 className={`flex items-center justify-center text-[20px] ${styles.subtitleMedium}`}>{price_id.discounted_price || price_id.original_price} грн</h4>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartItem;
