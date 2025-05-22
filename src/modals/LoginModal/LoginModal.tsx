import cn from 'classnames'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import InputPassword from 'ui/InputPassword'
import InputText from 'ui/InputText'
import google from '../../assets/google.svg'
import { validationSchema } from './helpers/validation'
import s from './LoginModal.module.scss'

interface Props {
	className?: string
	toggleModal: () => void
	toggleForm: () => void
}

const LoginModal = ({ className = '', toggleModal, toggleForm }: Props) => {

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			password: '',
			agreement: false
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values)
			toggleModal()
			// submission
		},
	})

	return (
		<div className={cn(s.LoginModal, className)}>
			<div onClick={toggleModal} className={s.overLay} />
			<div className={s.content}>
				<h2 className={s.title}>Увійти</h2>
				<form onSubmit={formik.handleSubmit} className={s.inputContainer}>
					<InputText
						placeholder="Ваша пошта або телефон"
						value={formik.values.email}
						onChange={(value) => formik.setFieldValue('email', value)}
						errorText={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
						className={s.inputEmail}
					/>

					<InputPassword
						placeholder="Пароль"
						value={formik.values.password}
						onChange={(value) => formik.setFieldValue('password', value)}
						errorText={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
						className={s.inputPassword}
					/>
					<Link to='/' className={s.forgotPassword}>
						Забули пароль?
					</Link>

					<div className={s.btnContainer}>
						<button className={s.btnLog}>
							Увійти
						</button>
						<button className={s.btnReg} onClick={toggleForm} >
							Зареєструватися
						</button>
					</div>
				</form>
				<div className={s.alternativeContainer}>
					<div className={s.lineBox}>
						<div className={s.line} />
						<span className={s.alternative}>
							Зареєструватися з
						</span>
						<div className={s.line} />
					</div>
					<Link to="https://accounts.google.com/" target='_blank' className={s.googleBtn}>
						<img src={google} alt='google login' />
						<span>Google</span>
					</Link>
				</div>

				<button className={s.BtnClose} onClick={toggleModal}>
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

export default LoginModal
