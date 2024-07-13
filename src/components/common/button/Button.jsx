import styles from "../../../style"
const Button = ({ label, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${className} border border-button rounded-xl`}>
            {label}
        </button>
    )
}

export default Button