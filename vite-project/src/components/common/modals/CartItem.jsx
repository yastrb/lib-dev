const CartItem = ({ _id, title, author_id, coverImageLink, isbn, price_id }) => {
    return (
        <div className="cart-item flex justify-between">
            <div className='flex'>
                <img className='hidden' src={coverImageLink} alt={title} />
                <div>
                    <h2>{title}</h2>
                    {/* Відображення авторів із бази даних */}
                    <p>Автор: {author_id.map(author => `${author.name_ukr} ${author.surname_ukr}`).join(', ')}</p>
                    <p>Код товару: {isbn}</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <button>delete</button>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <button>-</button>
                        {/* Додано значення кількості товарів (приклад) */}
                        <div>{1}</div> 
                        <button>+</button>
                    </div>
                    {/* Перевірка значення ціни */}
                    <p>{price_id.discounted_price || price_id.original_price} грн</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
