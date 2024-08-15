import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../redux/imageLightBoxStatus'
import './style.css'
const ProductImageGallery = ({ images }) => {
	const [mainImage, setMainImage] = useState(images[0])
	const dispatch = useDispatch()
	const status = useSelector(state => state.imageLightBoxStatus.status)

	const handleToggleStatus = () => {
		dispatch(updateStatus(!status))
	}
	const handleClick = (image, index) => {
		setMainImage(image)
		console.log(index)
	}
	return (
		<div className='imageGallery-container'>
			<img
				onClick={handleToggleStatus}
				className='rounded-xl cursor-pointer imageGallery-mainImage'
				src={mainImage}
				alt=''
			/>
			<div className='flex justify-center gap-x-6 '>
				{images.map((el, index) => (
					<img
						className=' rounded-xl imageGallery-ImgArray cursor-pointer'
						key={index}
						src={el}
						alt=''
						onClick={() => handleClick(el, index)}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductImageGallery
