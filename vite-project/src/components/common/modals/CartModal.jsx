import close from '../../../assets/close-modal.svg';
import styles from '../../../style';

const CartModal = ({ toggleModal }) => {
    return (
        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content w-[300px] md:w-[600px] xl:w-[996px] ">
                <h1 className={`${styles.heading} text-center mb-6`}>Кошик</h1>
                <div className={`${styles.menu} flex justify-between block-with-divider text-grey`}>
                    <div>2 шт</div>
                    <button>Видалити все</button>
                </div>
                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>
        </div>
    );
};

export default CartModal;
