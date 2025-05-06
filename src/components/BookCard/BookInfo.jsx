const BookInfo = ({ title, author, price, onImageClick, imageSrc, altText }) => (
  <div className="book-card mx-8 border-solid w-44">
    <img
      className="rounded-xl w-44 h-60 cursor-pointer"
      src={imageSrc}
      alt={altText}
      onClick={onImageClick}
    />
    <h2 className="font-medium font-montserrat my-4 w-44 truncate">
      {title || "Без назви"}
    </h2>
    <p className="font-montserrat truncate">
      {author || "Невідомий автор"}
    </p>
    <p className="font-montserrat my-4 font-medium">
      {price > 0 ? `${price} грн` : "Ціну уточнюйте"}
    </p>
  </div>
);

export default BookInfo;

  