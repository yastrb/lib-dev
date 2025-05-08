import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import { useTranslation } from 'react-i18next'
import {
	useGetBestsellersQuery,
	useGetPromotionBooksQuery
} from '../../redux/booksSlice.js'
import styles from '../../style.ts'
import Hero from './sections/Hero'
import NewArrival from './sections/NewArrival'
import StoreDescription from './sections/StoreDescription'
const HomePage = () => {
	// const {
	// 	data: newBooks,
	// 	isLoading: isLoadingNew,
	// 	error: errorNew,
	// } = useGetNewBooksQuery();
	

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

	if (errorBestsellers || errorPromo) {
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
			<StoreDescription />
			{/* hero end */}

			{/* main */}
			<div className={`${styles.paddingX} ${styles.flexStart} flex grow`}>
				{isLoadingBestsellers || isLoadingPromo ? (
					<div>Loading...</div>
				) : (
					<div className={`${styles.boxWidth}`}>
						<NewArrival />
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
