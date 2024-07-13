import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../redux/imageLightBoxStatus'
const ProductImageGallery = ({ images }) => {
	const [mainImage, setMainImage] = useState(images[0])
	const dispatch = useDispatch()
	const status = useSelector(state => state.imageLightBoxStatus.status)

	const handleToggleStatus = () => {
		dispatch(updateStatus(!status))
	}
	const handleClick = image => {
		setMainImage(image)
	}
	return (
		<div className='w-60 mx-auto'>
			<img
				onClick={handleToggleStatus}
				className='rounded-xl w-full h-80'
				src={mainImage}
				alt=''
			/>
			<div className='flex justify-center gap-x-6 '>
				{images.map((el, index) => (
					<img
						className=' rounded-xl h-24 w-16 mt-4 cursor-pointer'
						key={index}
						src={el}
						alt=''
						onClick={() => handleClick(el)}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductImageGallery
