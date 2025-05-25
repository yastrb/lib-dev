import { useDispatch, useSelector } from 'react-redux';
import stock from '../../assets/stock.svg';
import trash from '../../assets/trash.svg';
import { decrease, increase, removeFromCart } from '../../redux/cartSlice';
import stylesGlobal from '../../style';


const CartItem = ({ id, title, author, images, price }) => {

	const coverImageUrl = images && images.length > 0 ? images[0].url : '';
	const dispatch = useDispatch();

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(id));
	};

	const cartItem = useSelector(state =>
		state.cart.cartItems.find(item => item.id === id)
	);

	const qty = cartItem ? cartItem.qty : 1;

	return (
		<div className="cart-item w-full relative py-6  after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-grey">
			{/* image */}
			<img
				className=' cart-image h-full w-full bg-cover md:h-60 xl:flex xl:w-[180px] xl:h-[240px] rounded-xl'
				src={coverImageUrl}
				alt={title}
			/>

			{/* info */}
			<div className=' cart-data flex items-start justify-between'>
				<div>
					<h4 className={`${stylesGlobal.subtitleMedium} mb-2`}>{title}</h4>
					<p className={`${stylesGlobal.bodyRegular} mb-4`}>
						Автор:{' '}
						{author}
					</p>
					<p
						className={`${stylesGlobal.bodyRegular} mb-4 p-2 bg-[#e4e5e5] rounded-xl`}
					>
						Код товару: {id}
					</p>
					<p className='flex gap-2 items-center'>
						<img src={stock} alt='in stock' />
						<span className={`${stylesGlobal.bodyRegular} text-green`}>
							В наявності
						</span>
					</p>
				</div>

				<button onClick={handleRemoveFromCart}>
					<img src={trash} alt='remove item' />
				</button>
			</div>

			{/* price */}
			<div className='cart-price flex gap-8 justify-between xl:justify-end'>
				<div className={`${stylesGlobal.flexCenter}`}>
					{/* decrease */}
					<button
						onClick={() => {
							if (qty > 1) {
								dispatch(decrease({ id }));
							} else if (qty <= 1) {
								dispatch(removeFromCart(id));
							}
						}}
						className='flex items-center justify-center w-12 h-12'
					>
						-
					</button>

					{/* quantity */}
					<div className='flex items-center justify-center w-8 h-8 md:w-12 md:h-12 border-solid border-[1px] border-grey rounded-lg'>
						{qty}
					</div>

					{/* increase */}
					<button
						onClick={() => {
							dispatch(increase({ id }));
						}}
						className='flex items-center justify-center w-12 h-12'
					>
						+
					</button>
				</div>

				<h4
					className={`flex items-center justify-center text-[20px] ${stylesGlobal.subtitleMedium}`}
				>
					{price * qty} {price > 0 ? `грн` : `Ціну уточнюйте`}
				</h4>
			</div>
		</div>
	);
};

export default CartItem;
