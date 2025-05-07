import { useTranslation } from 'react-i18next'
import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice.js'
import FeaturedCarouselSection from '../../sections/FeaturedCarouselSection/FeaturedCarouselSection.jsx'
import styles from '../../style.js'
import AboutUsText from './heroSection/AboutUs.jsx'
import Hero from './heroSection/Hero.jsx'

const HomePage = () => {
	const { data, error, isLoading } = useGetNewBestsellersSalesBooks();
	const { t, i18n } = useTranslation();

	if (error) return <div>Error loading data: {error.message}</div>;

	const newBooks = data?.newBooks || [];
	const salesBooks = data?.salesBooks || [];
	const bestsellerBooks = data?.bestsellerBooks || [];

 
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
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<div className={`${styles.boxWidth}`}>
						<FeaturedCarouselSection
							data={newBooks}
							title={t('main.newBooks')}
						/>
						<FeaturedCarouselSection
							data={salesBooks}
							title={t('main.salesBooks')}
						/>
						<FeaturedCarouselSection
							data={bestsellerBooks}
							title={t('main.bestellersBooks')}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;
