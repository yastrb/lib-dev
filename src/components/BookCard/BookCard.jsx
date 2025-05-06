import Modal from '@mui/material/Modal';
import PopUp from './AddToCartPopup/AddToCartPopup';
import {
	BookInfo,
	useAddToCart,
	useModal,
	useNavigateToProduct,
} from './index.js';

const BookCard = ({ book }) => {
	const handleAddToCart = useAddToCart(book);
	const handleNavigate = useNavigateToProduct(book.id);
	const { open, handleOpen, handleClose } = useModal();

	const handleAddToCartClick = () => {
		handleAddToCart();
		handleOpen();
	};

	return (
		<div>
			<BookInfo
				title={book.title || "No title"}
				author={book.author || "No author"}
				price={book.price ?? 0}
				onImageClick={handleNavigate}
				imageSrc={book.images?.[0]?.url || "No image"}
				altText={book.title || "No title"}
			/>
			<button
				className='bg-button rounded-lg p-2 hover:bg-hover font-montserrat duration-300'
				onClick={handleAddToCartClick}
			>
				Add to Cart
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div>
					<PopUp handleClose={handleClose} />
				</div>
			</Modal>
		</div>
	);
};

export default BookCard;
