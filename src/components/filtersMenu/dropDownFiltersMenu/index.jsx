import React, { useState } from 'react'
import arrowDown from '../../../assets/icons/CatalogArrowDown.svg'
import arrowUp from '../../../assets/icons/CatalogArrowUp.svg'
import FiltersCheckBox from '../checkBox'
import './style.css'

const DropDownFilterMenu = ({ array }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleBtnClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<button onClick={handleBtnClick} className='dropDownFiltersMenu__btn'>
				<span className='dropDownFiltersMenu__btn_text'>
					{array.subCategoryName__ukr}
				</span>
				<img src={isOpen ? arrowUp : arrowDown} alt='Toggle arrow' />
			</button>
			<div
				className={`dropDownFiltersMenu__list ${
					isOpen ? 'dropDownFiltersMenu-open' : ''
				}`}
			>
				{array.filters__ukr.map((e, index) => (
					<FiltersCheckBox key={index} text={e} />
				))}
			</div>
		</div>
	)
}

export default DropDownFilterMenu
