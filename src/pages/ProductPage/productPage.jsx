import FeaturedCarouselSection from 'components/FeaturedCarouselSection'
import ProductImageGallery from 'components/ProductImageGallery/productImageGallery'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useGetBookInfoQuery } from '../../redux/productPageSlice'
import styles from '../../style.ts'
import Button from '../../ui/Button/index.jsx'
import IconStatusFalse from './ProductStatusItemFalse.svg'
import IconStatusTrue from './ProductStatusItemTrue.svg'
import IconClose from './close.svg'
import ProductDescription from './productDescription'
import Modal from 'react-modal'
const ProductPage = () => {
	const { id } = useParams()
	const { data, error, isLoading } = useGetBookInfoQuery(id)
	const [isOpen, setIsOpen] = useState(false)
	const handleOpenModal = () => {
		setIsOpen(true)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
	}
	if (isLoading) return <div className='h-screen'>Loading...</div>
	if (error) return <div className='h-screen'>Error: {error.message}</div>

	const book = data
	console.log('book', book)

	let infoObj = {
		'Мова видання': book.language,
		'Рік видання': book.year,
		'Видавництво': book.publisher,
		'Жанр': book.category,
	}

	let statusIcon = false

	return (
		<div className={`${styles.boxWidth} mt-14 mx-auto`}>

			<Modal
				isOpen={isOpen}
				onRequestClose={handleCloseModal}
				className='modal'
				overlayClassName='overlay'>
				<button onClick={handleCloseModal}>
					<img src={IconClose} alt="close" />
				</button>
				<ProductImageGallery imageSrc={book.images?.map(img => img.url) || []} />
			</Modal>

			<div className='product-item'>
				{/* title */}
				<div className='product-title'>
					<p className='font-semibold text-2xl mb-2  px-3'>
						{book.title}
					</p>
					<p className='font-normal text-base px-3'>
						{book.author}
					</p>
				</div>

				{/* image */}
				<div onClick={handleOpenModal} className='product-img'>

					<ProductImageGallery imageSrc={book.images?.map(img => img.url) || []} />
				</div>

				{/* info */}
				<div className='product-info px-3 py-8 mx-auto'>
					{Object.entries(infoObj).map(([key, value]) => (
						<div
							key={key}
							className='flex items-center justify-between w-auto pb-3'
						>
							<p className='text-base leading-5 font-semibold'>{key}:</p>
							<p className='text-base leading-6 font-normal p-3 bg-skyblue rounded-xl'>
								{value}
							</p>
						</div>
					))}
				</div>

				{/* price */}
				<div className='product-price pl-4'>
					<p className=' text-hover text-2xl flex md:justify-center  lg:justify-end font-semibold'>
						<span className=' text-4xl pr-2'>
							{book.price > 0 ? book.price : 'Ціну уточнюйте'}
						</span>
						грн
					</p>
					{statusIcon ? (
						<p className=' text-green flex text-base md:justify-center  lg:justify-end font-normal  gap-x-2 mt-2'>
							<img src={IconStatusTrue} alt='' /> {'В наявності'}
						</p>
					) : (
						<p className='text-red flex text-base font-normal md:justify-center lg:justify-end gap-x-2 mt-2'>
							<img src={IconStatusFalse} alt='' />
							{'Немає в наявності'}
						</p>
					)}
				</div>

				{/* buttons */}
				<div className={`product-btns`}>
					<Button label='В кошик' className='bg-button' />
					<Button label='Оплатити' className='bg-buttonB border-none' />
				</div>

				<div className='product-summary'>
					<ProductDescription description={book.description} />
				</div>
			</div>

			<FeaturedCarouselSection
				title='Вас може зацікавити'
				data={data.recommendation}
				seeMoreStatus={false}
			/>
		</div>
	)
}

export default ProductPage
