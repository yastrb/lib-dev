import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedCarouselSection from '../../components/FeaturedCarouselSection/FeaturedCarouselSection.jsx';
import ImageLightBox from '../../components/ImageLightbox/ImageLightbox';
import img1 from '../../components/ProductImageGallery/imagesPrewiev/img1.webp';
import img2 from '../../components/ProductImageGallery/imagesPrewiev/img2.jpg';
import img3 from '../../components/ProductImageGallery/imagesPrewiev/img3.jpg';
import ProductImageGallery from '../../components/ProductImageGallery/productImageGallery';
import Button from '../../components/common/button/Button.jsx';
import ProductDescription from './productDescription';
import styles from '../../style.js';
import IconStatusFalse from './ProductStatusItemFalse.svg';
import IconStatusTrue from './ProductStatusItemTrue.svg';

const ProductPage = () => {
  const { bookId } = useParams(); // Отримуємо bookId з URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageLightBoxStatus = useSelector(state => state.imageLightBoxStatus.status);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://backend-tan-phi.vercel.app/api/${bookId}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  if (loading) return <div className='h-screen'>Loading...</div>;
  if (error) return <div className='h-screen'>Error: {error.message}</div>;

  if (!book) return <div>Book not found</div>;

  const {
    publication_year,
    language_id,
    title_ukr,
    author_id,
    category_id,
    price_id,
    summary_ukr,
    coverType,
  } = book;

  const PHTArrray = [img1, img2, img3];
  const infoObj = {
    'Мова видання': language_id[0].language,
    'Рік видання': publication_year,
    Видавництво: 'NONE',
    Жанр: category_id[0].category_ukr,
    'Тип обкладинки': coverType,
  };

  const statusIcon = price_id.discounted_price > 0;

  return (
    <div className={`${styles.boxWidth} mt-14 mx-auto`}>
      {imageLightBoxStatus && <ImageLightBox images={PHTArrray} />}
      <div className='product-item'>
        {/* title */}
        <div className='product-title'>
          <p className='font-semibold text-2xl whitespace-nowrap mb-2 px-3'>
            {title_ukr}
          </p>
          <p className='font-normal text-base px-3'>
            {author_id[0].name_ukr} {author_id[0].surname_ukr}
          </p>
        </div>

        {/* image */}
        <div className='product-img'>
          {!imageLightBoxStatus && <ProductImageGallery images={PHTArrray} />}
        </div>

        {/* info */}
        <div className='product-info px-3 py-8 mx-auto'>
          {Object.entries(infoObj).map(([key, value]) => (
            <div key={key} className='flex items-center justify-between w-auto pb-3'>
              <p className='text-base leading-5 font-semibold'>{key}:</p>
              <p className='text-base leading-6 font-normal p-3 bg-skyblue rounded-xl'>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* price */}
        <div className='product-price pl-4'>
          <p className='text-hover text-2xl flex md:justify-center lg:justify-end font-semibold'>
            <span className='text-4xl pr-2'>
              {price_id.discounted_price > 0
                ? price_id.discounted_price
                : price_id.original_price}
            </span>
            грн
          </p>
          {statusIcon ? (
            <p className='text-green flex text-base md:justify-center lg:justify-end font-normal gap-x-2 mt-2'>
              <img src={IconStatusTrue} alt='' /> {'В наявності'}
            </p>
          ) : (
            <p className='text-red flex text-base font-normal md:justify-center lg:justify-end gap-x-2 mt-2'>
              <img src={IconStatusFalse} alt='' /> {'Немає в наявності'}
            </p>
          )}
        </div>

        {/* buttons */}
        <div className='product-btns'>
          <Button label='В кошик' className='bg-button' />
          <Button label='Оплатити' className='bg-buttonB border-none' />
        </div>

        {/* description */}
        <div className='product-summary'>
          <ProductDescription description={summary_ukr} />
        </div>
      </div>

      <FeaturedCarouselSection
        title='Вас може зацікавити'
        data={book.recommendations} // Зміни з data.recommendation на book.recommendations
        seeMoreStatus={false}
      />
    </div>
  );
};

export default ProductPage;
