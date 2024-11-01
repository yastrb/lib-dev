import FeaturedCarouselSection from '../../components/FeaturedCarouselSection/FeaturedCarouselSection'
import AboutUsText from '../../components/hero/AboutUs'
import Hero from '../../components/hero/Hero'
import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice.js'
import styles from '../../style'
import { useTranslation } from 'react-i18next'

const Home = () => {
	const { data, error, isLoading } = useGetNewBestsellersSalesBooks()

	const { t, i18n } = useTranslation()

	if (error) return <div>Error loading data: {error.message}</div>

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
	)
}

export default Home
