import close from '../../../assets/close-modal.svg';
import styles from '../../../style';

const LoginModal = ({ toggleModal }) => {
    return (
        <div className=" modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className=" modal-content w-[300px] md:w-[600px] xl:w-[996px] flex flex-col h-[80vh] max-h-[90vh] pb-[50px]">
            <h1 className={`${styles.heading} text-center mb-6`}>увійти</h1>
                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>

        </div>
    )
}

export default LoginModal