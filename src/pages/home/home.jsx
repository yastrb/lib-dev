import FeaturedCarouselSection from '../../components/FeaturedCarouselSection/FeaturedCarouselSection'
import AboutUsText from '../../components/hero/AboutUs'
import Hero from '../../components/hero/Hero'
import { useGetNewBestsellersSalesBooks } from '../../redux/booksSlice.js'
import styles from '../../style'
const Home = () => {
	const { data, error, isLoading } = useGetNewBestsellersSalesBooks()
	if (error) return <div>Error loading data</div>
	return (
		<div>
			{/* hero */}
			<div
				className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
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
						<FeaturedCarouselSection data={data.newBooks} title={'Новинки'} />
						<FeaturedCarouselSection data={data.salesBooks} title={'Акції'} />
						<FeaturedCarouselSection
							data={data.bestsellerBooks}
							title={'Бестселери'}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
