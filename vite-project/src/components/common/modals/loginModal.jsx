import close from '../../../assets/close-modal.svg';
import google from '../../../assets/google.svg'
import facebook from '../../../assets/facebook_2.svg'
import styles from '../../../style';
import { Link } from "react-router-dom";
import Button from '../button/Button';

const LoginModal = ({ toggleModal }) => {
    return (
        <div className=" modal ">
            <div onClick={toggleModal} className="overlay"></div>
            <div className=" modal-content w-[300px] md:w-[600px]  flex flex-col items-center h-[80vh] max-h-[90vh] pb-[50px]">
            <h1 className={`${styles.heading} text-center mb-10`}>увійти</h1>

                <input type="text"
                placeholder='Ваша пошта або телефон'
                className=' modal-input w-[90%] md:w-[75%]'
                />

                <input type="text"
                placeholder='Пароль'
                className=' modal-input w-[90%] md:w-[75%] mb-6'
                />
                <Link to='/' className='mt-3 mb-10'>Забули пароль?</Link>

                <Button label="Увійти" className="bg-button mb-3"/>
                <Button label="Зареєструватися" className="mb-10" />

                <span className={`${styles.bodyRegular} login-links text-grey mb-6 relative `}>Увійти з</span>

                <div className=' flex gap-20 '>
                    <Link>
                        <img src={facebook} alt="facebook login" />
                    </Link>
                    <Link>
                        <img src={google} alt="google login" />
                    </Link>
                </div>

                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>

        </div>
    )
}

export default LoginModal