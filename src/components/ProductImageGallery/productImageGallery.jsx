import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../redux/imageLightBoxStatus'
import './style.css'
const ProductImageGallery = ({ imageSrc }) => {
	const [mainImage, setMainImage] = useState(imageSrc?.[0])
	const dispatch = useDispatch()
	const status = useSelector(state => state.imageLightBoxStatus.status)

	const handleToggleStatus = () => {
		dispatch(updateStatus(!status))
	}
	const handleClick = (imageSrc, index) => {
		setMainImage(imageSrc)
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
			<div className='flex justify-center sm:justify-start gap-x-6 w-full'>
				{imageSrc.map((el, index) => (
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
