import cn from 'classnames'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import InputPassword from 'ui/InputPassword'
import InputText from 'ui/InputText'
import google from '../../assets/google.svg'
import s from './RegistrationModal.module.scss'
import { validationSchema } from './helpers/validation'
interface Props {
  className?: string
  toggleModal: () => void
  toggleForm: () => void
}

/**
 *  RegistrationModal
 *  @param className
 */





export default function RegistrationModal({ className = '', toggleModal, toggleForm }: Props) {
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
    <div className={cn(s.RegistrationModal, className)}>
      <div className={s.overLay} onClick={toggleModal} />
      <div className={s.content}>
        <h2 className={s.title}>Регістрація</h2>
        <form onSubmit={formik.handleSubmit} className={s.inputContainer}>
          <InputText
            placeholder="Ваше ім'я"
            value={formik.values.name}
            onChange={(value) => formik.setFieldValue('name', value)}
            errorText={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
          />
          <InputText
            placeholder="Ваша пошта"
            value={formik.values.email}
            onChange={(value) => formik.setFieldValue('email', value)}
            errorText={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
          />

          <InputText
            placeholder="Телефон"
            value={formik.values.phone}
            onChange={(value) => formik.setFieldValue('phone', value)}
            errorText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
          />

          <InputPassword
            placeholder="Пароль"
            value={formik.values.password}
            onChange={(value) => formik.setFieldValue('password', value)}
            errorText={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
          />

          <p className={s.passwordHint}>Пароль має містити не менше 6 символів</p>


          <div className={cn(s.CheckboxContainer, {
            [s.Error]: formik.touched.agreement && formik.errors.agreement
          })}>
            <input
              type="checkbox"
              id="agreement"
              className={s.checkbox}
              checked={formik.values.agreement}
              onChange={() => formik.setFieldValue('agreement', !formik.values.agreement)}
            />
            <label htmlFor="agreement" className={s.checkboxLabel}>
              <span className={s.checkmark}></span>
              <span className={s.text}>Погоджуюсь з умовами використання</span>
            </label>
          </div>

          <div className={s.btnContainer}>
            <button type="submit" className={s.btnReg}>
              Зареєструватися
            </button>
            <button type="button" className={s.btnLog} onClick={toggleForm}>
              Увійти
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
            className={s.closeIcon}
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.75732 12.2431L6.99995 7.00045M6.99995 7.00045L12.2426 1.75781M6.99995 7.00045L1.75732 1.75781M6.99995 7.00045L12.2426 12.2431'
              stroke='black'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

