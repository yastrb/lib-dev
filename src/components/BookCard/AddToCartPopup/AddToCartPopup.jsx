import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '../../../redux/cartSlice';
import styles from '../../../style';
import Button from '../../../ui/Button';
import cart from './image/cart.svg';
import close from './image/close.svg';

const PopUp = ({ handleClose }) => {
	const dispatch = useDispatch();
	const amount = useSelector(state => state.cart.amount);
	const total = useSelector(state => state.cart.total);

	useEffect(() => {
		dispatch(calculateTotals());
	}, [dispatch]);

	return (
		<div className='popup z-1000 fixed inset-0 flex items-center justify-center'>
			<div className='bg-white rounded-3xl py-3 px-4 shadow-lg w-80'>
				<div className='flex justify-between items-center mb-5'>
					<div className='flex items-center'>
						<img src={cart} className='text-lg mr-2' alt='shopping_cart' />
						<span className={`${styles.subtitleMedium}`}>
							Товар в кошику :)
						</span>
					</div>
					<button
						onClick={handleClose}
						className='text-gray-500 hover:text-black'
					>
						<img src={close} alt='close' />
					</button>
				</div>

				<p className={`${styles.bodyRegular} text-gray-600 pl-[51px]`}>
					Всього: {amount} товари
				</p>
				<p
					className={`${styles.bodyRegular} text-gray-600 pl-[51px] mb-[22px]`}
				>
					Сума товарів: {total} грн
				</p>

				<Button
					onClick={handleClose}
					label={'Оформити замовлення'}
					className={'bg-button w-full'}
				/>
			</div>
		</div>
	);
};

export default PopUp;
