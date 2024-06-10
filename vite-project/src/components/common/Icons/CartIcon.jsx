import { useState } from 'react';
import close from '../../../assets/close-modal.svg';
import styles from '../../../style';
const CartIcon = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <svg
                onClick={toggleModal}
                className="icon cursor-pointer"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5 34C32.3284 34 33 33.3284 33 32.5C33 31.6716 32.3284 31 31.5 31C30.6716 31 30 31.6716 30 32.5C30 33.3284 30.6716 34 31.5 34Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M21.5 34C22.3284 34 23 33.3284 23 32.5C23 31.6716 22.3284 31 21.5 31C20.6716 31 20 31.6716 20 32.5C20 33.3284 20.6716 34 21.5 34Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M17 16H34L32 27H19L17 16ZM17 16C16.8333 15.3333 16 14 14 14"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M32 27H19H17.2308C15.4465 27 14.5 27.7812 14.5 29C14.5 30.2188 15.4465 31 17.2308 31H31.5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h1 className={`${styles.heading} text-center`}>Кошик</h1>
                        <div className=' flex justify-between'>
                            <div>2 шт</div>
                            <div>2</div>
                        </div>
                        
                        <button className="close-modal" onClick={toggleModal}>
                            <img src={close} alt="" />
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

export default CartIcon