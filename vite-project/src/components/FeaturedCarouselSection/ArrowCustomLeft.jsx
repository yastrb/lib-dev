const CustomLeftArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest
	// onMove means if dragging or swiping in progress.
	return (
		<button
			onClick={() => onClick()}
			className='absolute bottom-2/3 top: 25% left-0'
		>
			<svg
				width='16'
				height='28'
				viewBox='0 0 16 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='text-gray-500 hover:text-black duration-500 '
			>
				<path
					d='M14 2L2 14L14 26'
					stroke='currentColor'
					strokeWidth='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</button>
	)
}
export default CustomLeftArrow
