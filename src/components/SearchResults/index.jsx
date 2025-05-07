import { Link } from 'react-router-dom';
import stock from '../../assets/stock.svg';
import styles from '../../style';

const SearchResults = ({ filteredBooks }) => {
  return (
    <div className="search-results absolute top-20 z-50 rounded-md shadow bg-white">
      <p className="px-3 py-2 font-medium divider">Результат пошуку</p>
      <ul>
        {filteredBooks.map((item) => {
          const displayPrice = item.price > 0 ? item.price : 'Ціна недоступна';
          const imageUrl = item.images && item.images.length > 0 ? item.images[0].url : '';

          return (
            <Link to={`/${item.id}`}
            className="p-3 flex gap-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            key={item.id}>
              {/* Зображення */}
              <div>
                <img
                  className="w-[75px] h-[99px] object-cover"
                  src={imageUrl}
                  alt={item.title}
                />
              </div>

              {/* Інформація про книжку */}
              <div className="flex flex-col">
                {/* Назва */}
                <p className={`${styles.bodyRegular}`}>{item.title}</p>

                {/* Автор */}
                <p className={`${styles.captionRegular} mb-2`}>{item.author}</p>

                {/* Ціна */}
                <p className={`${styles.bodyMedium} mb-2`}>{displayPrice} грн</p>

                {/* Наявність */}
                <p className="flex gap-2 items-center">
                  <img src={stock} alt="in stock" />
                  <span className={`${styles.bodyRegular} text-green`}>
                    {item.quantity > 0 ? 'В наявності' : 'Немає в наявності'}
                  </span>
                </p>
              </div>
            </Link>
            
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
