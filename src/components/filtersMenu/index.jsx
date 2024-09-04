import { useState } from 'react'
import { useGetCatalogFiltersQuery } from '../../redux/catalogFiltersSlice.js'
import FiltersCheckBox from './checkBox/index.jsx'
import DropDownFilterMenu from './dropDownFiltersMenu/index.jsx'
import ClearFiltersIcon from './IconClearFilters.svg'
import CloseIcon from './IconCloseMenu.svg'
import PriceRangePicker from './priceRangePicker/index.jsx'
import SearchBarFitresMenu from './searchBar/index.jsx'
import './styles.css'

const FiltersMenu = ({
	menuStatus = false,
	changeMenuStatus,
	bgRender = false,
	desctopOnly = false,
}) => {
	const { data, error, isLoading } = useGetCatalogFiltersQuery()
	const [clearAllStatus, setClearAllStatus] = useState(true)

	if (isLoading) return <div>Загрузка фильтров...</div>
	if (error) return <div>Ошибка загрузки: {error.message}</div>

	return (
		<>
			{bgRender && (
				<div
					onClick={changeMenuStatus}
					className={`FiltersMenu_bg ${menuStatus ? 'menu-open' : ''}`}
				/>
			)}
			<div
				className={`FiltersMenu_container ${
					menuStatus ? 'FiltersMenu_container-open' : ''
				} ${desctopOnly ? 'DesctopOnly' : ''}`}
			>
				<button onClick={changeMenuStatus} className='FiltersMenu_closeBtn'>
					<img src={CloseIcon} alt='Close icon' />
				</button>
				{clearAllStatus && (
					<button className='FiltersMenu_clearAllBtn'>
						<span>Очистити все</span>
						<img src={ClearFiltersIcon} alt='Clear Icon Filter' />
					</button>
				)}
				{data.map((e, index) => (
					<div className='pb-4' key={index}>
						<h3 className='FiltersMenu__categoryName'>{e.categoryName__ukr}</h3>
						{e.subCategories
							? e.subCategories.map((eSub, subIndex) => (
									<DropDownFilterMenu key={subIndex} array={eSub} />
							  ))
							: e.filters__ukr.map((e, filterIndex) => (
									<FiltersCheckBox key={filterIndex} text={e} />
							  ))}
					</div>
				))}

				<SearchBarFitresMenu
					id='author'
					title='Автор'
					placeholder='Пошук за автором'
					searchUrl='https://backend-tan-phi.vercel.app/api'
				/>
				<SearchBarFitresMenu
					id='publisher'
					title='Видавництво'
					placeholder='Пошук видавництва'
					searchUrl='https://backend-tan-phi.vercel.app/api'
				/>

				<PriceRangePicker />
			</div>
		</>
	)
}

export default FiltersMenu
