import React, { useState } from 'react';
import arrowDown from '../../../../Icons/CatalogArrowDown.svg';
import arrowUp from '../../../../Icons/CatalogArrowUp.svg';
import FiltersCheckBox from '../checkBox';
import './style.css';

const DropDownFilterMenu = ({ array }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleBtnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={handleBtnClick} className='dropDownFiltersMenu__btn'>
				<span className='dropDownFiltersMenu__btn_text'>{array.category}</span>
				<img src={isOpen ? arrowUp : arrowDown} alt='Toggle arrow' />
			</button>
			<div
				className={`dropDownFiltersMenu__list ${
					isOpen ? 'dropDownFiltersMenu-open' : ''
				}`}
			>
				{array.genre_id.map((e, index) => (
					<FiltersCheckBox key={index} text={e.genre} id={e._id} />
				))}
			</div>
		</div>
	);
};

export default DropDownFilterMenu;
