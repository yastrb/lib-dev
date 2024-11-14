const BookInfo = ({ title, author, price, onImageClick, imageSrc, altText }) => (
    <div className="book-card mx-8 border-solid w-44">
      <img
        className="rounded-xl w-44 h-60 cursor-pointer"
        src={imageSrc}
        alt={altText}
        onClick={onImageClick}
      />
      <h2 className="font-medium font-montserrat my-4 w-44 truncate">{title}</h2>
      <p className="font-montserrat truncate">
        {author.map(a => `${a.name_ukr} ${a.surname_ukr}`).join(', ')}
      </p>
      <p className="font-montserrat my-4 font-medium">
        {price.discounted_price > 0
          ? `${price.discounted_price} грн`
          : `${price.original_price} грн`}
      </p>
    </div>
  );
  
  export default BookInfo;
  