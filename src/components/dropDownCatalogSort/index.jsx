import { useState } from 'react'
import arrowDown from '../../assets/icons/CatalogArrowDown.svg'
import arrowUp from '../../assets/icons/CatalogArrowUp.svg'
import './styles.css'

const DropDownCatalogSort = () => {
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
							setSelectedText(e)
							setIsOpen(false)
						}}
					>
						{e}
					</p>
				))}
			</div>
		</div>
	)
}

export default DropDownCatalogSort
