import React, { useState } from 'react'
import './style.css'

const FiltersCheckBox = ({ text }) => {
	let [isChecked, setIsChecked] = useState(false)
	let handleClick = () => {
		setIsChecked(!isChecked)
	}
	return (
		<div onClick={handleClick} className='filtersCheckBox__wrapper'>
			<input
				className='filtersCheckBox__wrapper_input'
				checked={isChecked}
				type='checkbox'
				readOnly
			/>
			<span
				className={`filtersCheckBox__wrapper_text ${
					isChecked ? 'filtersCheckBox__wrapper_text-checked' : null
				}`}
			>
				{text}
			</span>
		</div>
	)
}

export default FiltersCheckBox
