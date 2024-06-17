

const LoginModal = ({ toggleModal }) => {
    return (
        <div className=" modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className=" modal-content">
                <p>login</p>
                <button className="close-modal" onClick={toggleModal}>
                    <img src={close} alt="Закрити" />
                </button>
            </div>

        </div>
    )
}

export default LoginModal