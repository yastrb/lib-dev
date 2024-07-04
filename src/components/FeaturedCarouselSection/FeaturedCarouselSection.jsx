import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styles from '../../style.js'
import BookCard from '../product/BookCard.jsx'
import CustomLeftArrow from './ArrowCustomLeft.jsx'
import CustomRightArrow from './ArrowCustomRight.jsx'

const FeaturedCarouselSection = ({ title, data }) => {
	// console.log(data)

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1280 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 1280, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	}
	return (
		<section className={`${styles.boxWidth} my-14 `}>
			<div className='flex justify-between'>
				<h2 className='text-2xl font-semibold bg-main py-2 pr-4 pl-6 rounded-br-lg rounded-bl-lg rounded-tr-lg'>
					{title}
				</h2>
				<button className='text-base hover:cursor-pointer hover:text-blue-500 focus:text-blue-500 border-b-2 border-black hover:border-blue-500'>
					Переглянути повністю
				</button>
			</div>

			<Carousel
				className={`overflow-hidden  my-14 relative`}
				responsive={responsive}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				infinite={true}
				customLeftArrow={<CustomLeftArrow />}
				customRightArrow={<CustomRightArrow />}
			>
				{data.map(el => {
					// console.log(`${title}`, el)
					return <BookCard key={el._id} book={el} />
				})}
			</Carousel>
		</section>
	)
}

export default FeaturedCarouselSection
