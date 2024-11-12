import {useAddToCart} from './hooks/useAddToCart';
import {useNavigateToProduct} from './hooks/useNavigateToProduct';
import {useModal} from './hooks/useModal';
import BookInfo from './BookInfo';
import Modal from '@mui/material/Modal';
import PopUp from './AddToCartPopup/AddToCartPopup';

const BookCard = ({ book }) => {

  const handleAddToCart = useAddToCart(book);
  const handleNavigate = useNavigateToProduct(book.price[0].book_id);
  const { open, handleOpen, handleClose } = useModal();

  const handleAddToCartClick = () => {
    handleAddToCart();
    handleOpen();
  };

  return (
    <div>
      <BookInfo
        title={book.title_ukr}
        author={book.author}
        price={book.price[0]}
        onImageClick={handleNavigate}
        imageSrc={book.coverImageLink_ukr}
        altText={book.title_ukr}
      />
      <button
        className="bg-button rounded-lg p-2 hover:bg-hover font-montserrat duration-300"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PopUp
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
};

export default BookCard;
