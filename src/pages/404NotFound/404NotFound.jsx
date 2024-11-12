import { useNavigate } from 'react-router-dom';
import BookImage from '../../assets/images/404NotFoundBook.jpg';
import './404NotFound.css';
const NotFoundPage = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};

	return (
		<div className='NotFoundPage'>
			<h1 className='NotFoundPage-Tittle'>УПС... </h1>
			<p className='NotFoundPage-Text'>Ця сторінка не знайдена(</p>
			<img className='NotFoundPage-Image' src={BookImage} alt='404 Not Found' />
			<button className='NotFoundPage-Button' onClick={handleClick}>
				Перейти на головну
			</button>
		</div>
	);
};

export default NotFoundPage;
