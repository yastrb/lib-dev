import { useState } from 'react'
import arrowDown from '../../assets/icons/CatalogArrowDown.svg'
import arrowUp from '../../assets/icons/CatalogArrowUp.svg'
import './styles.css'

const DropDownCatalogSort = ({ books, onSort }) => {
	const variantsArray = [
		'За популярністю',
		'За знижкою',
		'Від дешевих',
		'Від дорогих',
	]
	const [selectedText, setSelectedText] = useState(variantsArray[0])
	const [isOpen, setIsOpen] = useState(false)

	const handleBtnClick = () => {
		setIsOpen(!isOpen)
	}

	const handleSort = (sortOption) => {
		let sortedBooks = [...books];

		if (sortOption === 'Від дешевих') {
			sortedBooks.sort((a, b) => {
				const priceA = a.price[0].discounted_price || a.price[0].original_price;
				const priceB = b.price[0].discounted_price || b.price[0].original_price;
				return priceA - priceB;
			});
		} else if (sortOption === 'Від дорогих') {
			sortedBooks.sort((a, b) => {
				const priceA = a.price[0].discounted_price || a.price[0].original_price;
				const priceB = b.price[0].discounted_price || b.price[0].original_price;
				return priceB - priceA;
			});
		}

		// Тут можна додати додаткові умови для "За популярністю" та "За знижкою"
		onSort(sortedBooks);
	}

	return (
		<div className='relative'>
			<button className='catalogDropDownBtnSort' onClick={handleBtnClick}>
				{selectedText}
				<img src={isOpen ? arrowUp : arrowDown} alt='Toggle arrow' />
			</button>
			<div
				className={`CatalogDropDownVariantsOfSort ${
					isOpen ? 'variants-open' : ''
				}`}
			>
				{variantsArray.map((e, index) => (
					<p
						key={index}
						className='CatalogDropDownVariantsOfSort__item'
						onClick={() => {
							setSelectedText(e);
							setIsOpen(false);
							handleSort(e);
						}}
					>
						{e}
					</p>
				))}
			</div>
		</div>
	)
}

export default DropDownCatalogSort;
