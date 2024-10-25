import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addItem,
	removeItem,
} from '../../../../../../redux/catalogFilterItemsSlice';
import './style.css';

const FiltersCheckBox = ({ text, id }) => {
	let [isChecked, setIsChecked] = useState(false);
	const dispatch = useDispatch();
	const catalogFilterItems = useSelector(state => state.catalogFilterItems);
	let obj = { text: text, id: id };

	useEffect(() => {
		const isItemChecked = catalogFilterItems.some(item => item.id === id);
		setIsChecked(isItemChecked);
	}, [catalogFilterItems, id]);

	let handleClick = () => {
		if (!isChecked) {
			dispatch(addItem(obj));
		} else {
			dispatch(removeItem(id));
		}
	};

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
	);
};

export default FiltersCheckBox;
