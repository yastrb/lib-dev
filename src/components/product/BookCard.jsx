import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToCart = () => {
	  dispatch(addToCart(book));
	};

	const handleClick = () => {
		navigate('/productpage', { state: { id: book.price[0].book_id } });
		window.scroll(0, 0);
	};

	return (
		<div className='book-card mx-8 border-solid w-44'>
			<img
				className='rounded-xl w-44 h-60 cursor-pointer'
				src={book.coverImageLink_ukr}
				alt={book.title_ukr}
				onClick={handleClick}
			/>

			<h2 className='font-medium font-montserrat my-4 w-44 truncate'>
				{book.title_ukr}
			</h2>
			<p className='font-montserrat truncate'>
				{book.author
					.map(author => `${author.name_ukr} ${author.surname_ukr}`)
					.join(', ')}
			</p>
			<p className='font-montserrat my-4 font-medium'>
				{book.price[0].discounted_price > 0
					? `${book.price[0].discounted_price} грн`
					: `${book.price[0].original_price} грн`}
			</p>

			<button
				className='bg-button rounded-lg p-2 hover:bg-hover font-montserrat duration-300'
				onClick={handleAddToCart}
			>
				Add to Cart
			</button>
		</div>
	);
}

export default BookCard;
