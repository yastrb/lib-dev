import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, clearCart } from '../../redux/cartSlice'
import stylesGlobal from '../../style'
import CartItem from './CartItem'
import styles from './cartModal.module.scss';
import Button from '../../ui/Button';

const CartModal = ({ toggleModal }) => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.cart.cartItems)
	const amount = useSelector(state => state.cart.amount)
	const total = useSelector(state => state.cart.total)

	const handleClearCart = () => {
		dispatch(clearCart())
	}

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	return (
		<div className= 'modal'>
			<div onClick={toggleModal} className={styles.overlay}></div>

			<div className={styles.cartModal + ' modal-content'}>
				<h1 className={`${stylesGlobal.heading} ${styles.cartHeading}`}>Кошик</h1>

				{/* cart items container */}
				<div className={styles.cartItems}>
					{cartItems.length > 0 ? (
						<>
							{/* cart heading */}
							<div
								className={`${stylesGlobal.menu} ${styles.cartAmount}  block-with-divider`}
							>
								<div>{amount} шт</div>
								<button onClick={handleClearCart}>Видалити все</button>
							</div>

							{/* items list */}
							<div className={styles.cartList} >
								{cartItems.map(item => {
									return <CartItem key={item.id} {...item} />
									
								})}
							</div>

							<div className={styles.cartTotalContainer}>
								{/* total */}
								<div className={`${styles.cartTotal} ${stylesGlobal.subtitleSemibold} `}>
									<p >Разом</p>
									<div >
										{total} грн
									</div>
								</div>

								{/* cart action buttons */}
								<div className={`${stylesGlobal.flexCenter} ${styles.cartButtonContainer}`}>
									<Button
										label={"Продовжити покупки"}
										onClick={toggleModal}
										className={`${stylesGlobal.button} ${styles.cartButton}`}
										/>	
									<Button
										label='До сплати'
										onClick={handleClearCart}
										className={`${stylesGlobal.button} ${styles.cartButton}`}	/>
								</div>
							</div>
						</>
					) : (
						<p className={`${stylesGlobal.subtitleMain} cart-info text-grey`}>
							Кошик поки що порожній :)
						</p>
					)}
				</div>

				{/* close btn */}
				<button className='close-modal' onClick={toggleModal}>
					<svg
						className='icon cursor-pointer'
						width='14'
						height='14'
						viewBox='0 0 14 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1.75732 12.2431L6.99995 7.00045M6.99995 7.00045L12.2426 1.75781M6.99995 7.00045L1.75732 1.75781M6.99995 7.00045L12.2426 12.2431'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default CartModal
