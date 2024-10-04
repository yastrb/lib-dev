import { useState } from 'react'
import Slider from 'react-slider'
import './styles.css'

const PriceRangePicker = () => {
	let independentMaximumPrice = 10000
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(independentMaximumPrice)

	const handleSliderChange = ([min, max]) => {
		setMinPrice(min)
		setMaxPrice(max)
	}

	const handleInputChange = (e, setValue, otherValue, isMin) => {
		const value = Number(e.target.value)

		if (/^\d*$/.test(e.target.value)) {
			if (isMin) {
				if (value <= otherValue) {
					setValue(value)
					handleSliderChange([value, otherValue])
				}
			} else {
				if (value <= independentMaximumPrice && value >= otherValue) {
					setValue(value)
					handleSliderChange([otherValue, value])
				}
			}
		}
	}

	return (
		<div className='w-full relative'>
			<h3 className='PriceRangePicker__title'>Ціна</h3>
			<Slider
				className='PriceRangePicker__slider'
				value={[minPrice, maxPrice]}
				onChange={handleSliderChange}
				min={0}
				max={independentMaximumPrice}
				step={1}
			/>
			<div className='PriceRangePicker__inputContainer'>
				<input
					className='PriceRangePicker__inputContainer_inputMin'
					type='text'
					placeholder={minPrice}
					value={minPrice === 0 ? '' : minPrice}
					onChange={e => handleInputChange(e, setMinPrice, maxPrice, true)}
				/>
				<div className='PriceRangePicker__inputContainer_horizontalLine' />
				<input
					className='PriceRangePicker__inputContainer_inputMax'
					type='text'
					placeholder={maxPrice}
					value={maxPrice === independentMaximumPrice ? '' : maxPrice}
					onChange={e => handleInputChange(e, setMaxPrice, minPrice, false)}
				/>
			</div>
		</div>
	)
}

export default PriceRangePicker
