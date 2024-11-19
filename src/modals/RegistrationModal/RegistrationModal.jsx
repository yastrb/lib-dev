import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import styles from '../../style'
import Button from '../../ui/Button'

const RegistrationModal = ({ toggleModal, toggleForm }) => {
	return (
		<div className='modal'>
			<div onClick={toggleModal} className='overlay'></div>
			<div className='modal-content w-[300px] md:w-[600px] flex flex-col items-center h-[80vh] max-h-[90vh] pb-[50px]'>
				<h1 className={`${styles.heading} text-center mb-10`}>
					Зареєструватися
				</h1>

				<input
					type='text'
					placeholder='Ваше ім’я'
					className='modal-input w-[90%] md:w-[75%]'
				/>
				<input
					type='text'
					placeholder='Ваша пошта'
					className='modal-input w-[90%] md:w-[75%]'
				/>
				<input
					type='text'
					placeholder='Пароль'
					className='modal-input w-[90%] md:w-[75%] mb-6'
				/>

				<Button label='Зареєструватися' className='bg-button mb-10' />

				<span
					className={`${styles.bodyRegular} login-links text-grey mb-6 relative`}
				>
					Або увійти з
				</span>

				<div className='flex gap-20'>
					<Link>
						<img src={facebook} alt='facebook login' />
					</Link>
					<Link>
						<img src={google} alt='google login' />
					</Link>
				</div>

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

export default RegistrationModal
