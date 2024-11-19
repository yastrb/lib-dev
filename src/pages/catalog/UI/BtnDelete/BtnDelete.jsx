import BtnIconClose from '../../Icons/BtnIconClose.svg';
import './BtnDelete.css';

const BtnDelete = ({ text, func }) => {
	return (
		<button onClick={func} className='BtnDelete'>
			<span>{text}</span>
			<img src={BtnIconClose} alt='Clear Icon Filter' />
		</button>
	);
};

export default BtnDelete;
