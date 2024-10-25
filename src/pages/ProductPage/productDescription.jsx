import React, { useEffect, useRef, useState } from 'react'
import IconDown from './BtnIconDown.svg'
import IconUp from './BtnIconUp.svg'
const ProductDescription = ({ description }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const contentRef = useRef(null)
	const [contentHeight, setContentHeight] = useState('7rem')
	const [showButton, setShowButton] = useState(false)
	useEffect(() => {
		if (contentRef.current) {
			const totalHeight = contentRef.current.scrollHeight
			if (totalHeight > 7 * 16) {
				// 7rem = 7 * 16px
				setShowButton(true)
			} else {
				setShowButton(false)
			}
			if (isExpanded) {
				setContentHeight(`${totalHeight}px`)
			} else {
				setContentHeight('7rem')
			}
		}
	}, [isExpanded])

	const handleToggle = () => {
		setIsExpanded(!isExpanded)
	}
	return (
		<div className='relative w-full max-w-2xl mt-14 px-3 mb-10 md:mb-36'>
			<div
				ref={contentRef}
				style={{ height: contentHeight }}
				className='w-full font-normal text-base transition-all duration-500 overflow-hidden'
			>
				<p>{description}</p>
			</div>
			{showButton && (
				<>
					<div
						className={`absolute bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-white ${
							isExpanded ? 'hidden' : 'block'
						}`}
					></div>
					<button className='text-base font-normal mt-4' onClick={handleToggle}>
						{isExpanded ? (
							<p className='flex'>
								Згорнути <img className='pl-5' src={IconUp} alt='' />
							</p>
						) : (
							<p className='flex'>
								Читати все <img className='pl-5' src={IconDown} alt='' />
							</p>
						)}
					</button>
				</>
			)}
		</div>
	)
}

export default ProductDescription
