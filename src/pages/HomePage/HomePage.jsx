import { useTranslation } from 'react-i18next';
import {
	useGetNewBooksQuery,
	useGetBestsellersQuery,
	useGetPromotionBooksQuery,
} from '../../redux/booksSlice.js';
import FeaturedCarouselSection from '../../sections/FeaturedCarouselSection/FeaturedCarouselSection.jsx';
import styles from '../../style.js';
import AboutUsText from './heroSection/AboutUs.jsx';
import Hero from './heroSection/Hero.jsx';

const HomePage = () => {
	const {
		data: newBooks,
		isLoading: isLoadingNew,
		error: errorNew,
	} = useGetNewBooksQuery();
	

	const {
		data: bestsellers,
		isLoading: isLoadingBestsellers,
		error: errorBestsellers,
	} = useGetBestsellersQuery();

	const {
		data: promoBooks,
		isLoading: isLoadingPromo,
		error: errorPromo,
	} = useGetPromotionBooksQuery();

	const { t, i18n } = useTranslation();

	if (errorNew || errorBestsellers || errorPromo) {
		return <div>Сталася помилка при завантаженні книжок </div>;
	}


	return (
		<div>
			{/* hero */}
			<div
				className={` hero ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<AboutUsText />
			{/* hero end */}

			{/* main */}
			<div className={`${styles.paddingX} ${styles.flexStart} flex grow`}>
				{isLoadingNew || isLoadingBestsellers || isLoadingPromo ? (
					<div>Loading...</div>
				) : (
					<div className={`${styles.boxWidth}`}>
						<FeaturedCarouselSection
							data={newBooks}
							title={t('main.newBooks')}
						/>
						<FeaturedCarouselSection
							data={promoBooks}
							title={t('main.salesBooks')}
						/>
						<FeaturedCarouselSection
							data={bestsellers}
							title={t('main.bestellersBooks')}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
