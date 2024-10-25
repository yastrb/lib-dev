import FeaturedCarouselSection from '../../components/FeaturedCarouselSection/FeaturedCarouselSection'
import AboutUsText from '../../components/hero/AboutUs'
import Hero from '../../components/hero/Hero'
import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice.js'
import styles from '../../style'

const Home = () => {
	const { data, error, isLoading } = useGetNewBestsellersSalesBooks()

	if (error) return <div>Error loading data: {error.message}</div>

	// Перевіряємо наявність даних перед використанням
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
							title={'Новинки'}
						/>
						<FeaturedCarouselSection
							data={salesBooks}
							title={'Акції'}
						/>
						<FeaturedCarouselSection
							data={bestsellerBooks}
							title={'Бестселери'}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
