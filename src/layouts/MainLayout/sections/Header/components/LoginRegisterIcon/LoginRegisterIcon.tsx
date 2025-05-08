import { useState } from 'react';
import LoginModal from '../../../../../../modals/LoginModal/LoginModal';
import RegistrationModal from '../../../../../../modals/RegistrationModal/RegistrationModal';

const LogInIcon = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);

    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
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
                className=" icon cursor-pointer"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17 32V31C17 27.134 20.134 24 24 24C27.866 24 31 27.134 31 31V32"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
            {modal && (isLogin ?
                <LoginModal toggleModal={toggleModal} toggleForm={toggleForm} />
                :
                <RegistrationModal toggleModal={toggleModal} toggleForm={toggleForm} />
            )}

        </>
    )
}

export default LogInIcon