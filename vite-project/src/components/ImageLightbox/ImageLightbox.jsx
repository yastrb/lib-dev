import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import CustomLeftArrow from '../../assets/icons/ArrowCustomLeft'
import CustomRightArrow from '../../assets/icons/ArrowCustomRight'
import closeIcon from '../../assets/icons/IconClose.svg'
import { updateStatus } from '../../redux/imageLightBoxStatus'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1280 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 1280, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}
const ImageLightBox = ({ images }) => {
	const dispatch = useDispatch()
	const status = useSelector(state => state.imageLightBoxStatus.status)

	const handleToggleStatus = () => {
		dispatch(updateStatus(!status))
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		})
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [status])

	return (
		<div className='fixed top-0 left-0 w-full h-full bg-white md:bg-popUpBg flex justify-center items-center z-30 md:bg-opacity-90'>
			<div className=' bg-white w-full'>
				<img
					style={{ right: '10%', top: '7%' }}
					className='absolute'
					onClick={handleToggleStatus}
					src={closeIcon}
					alt='CloseIcon'
				/>

				<Carousel
					responsive={responsive}
					infinite={true}
					showDots={true}
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}
					className='mx-2'
				>
					{images.map(el => (
						<div className='flex justify-center pb-8'>
							<img className='w-64 h-21rem rounded-xl' src={el} alt='el' />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default ImageLightBox
