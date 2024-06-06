import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const LogInIcon = () => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <svg
                onClick={onOpenModal}
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
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Зареєструватись</h2>
            </Modal>
        </>
    )
}

export default LogInIcon