import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomLeftArrow from '../../assets/icons/ArrowCustomLeft.jsx'
import CustomRightArrow from '../../assets/icons/ArrowCustomRight.jsx'
import { BookCard } from '../BookCard/index.js'

const FeaturedCarouselSection = ({ title, data, seeMoreStatus = true }) => {
	const responsive = {
		superLargeDesktop: {
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
			items: 1,
		},
	};

	return (
		<section className={` my-14 `}>
			<div className='flex justify-between'>
				<h2 className='text-2xl font-semibold bg-main py-2 pr-4 pl-6 rounded-br-lg rounded-bl-lg rounded-tr-lg'>
					{title}
				</h2>
				{seeMoreStatus && (
					<button className='text-base hover:cursor-pointer hover:text-blue-500 focus:text-blue-500 border-b-2 border-black hover:border-blue-500'>
						Переглянути повністю
					</button>
				)}
			</div>
			{data && data.length > 0 ? (
				<Carousel
					className={`overflow-hidden my-14 relative`}
					responsive={responsive}
					infinite={true}
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}
				>
					{data.map(el => (
						<div key={el._id} className='flex justify-center'>
							<BookCard book={el} />
						</div>
					))}
				</Carousel>
			) : (
				<div className='text-center text-lg font-bold py-10'>
					У нас немає рекомендацій :(
				</div>
			)}
		</section>
	);
};

export default FeaturedCarouselSection;
