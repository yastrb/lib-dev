import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../../../redux/catalogFilterItemsSlice.js';
import { useGetCatalogFiltersQuery } from '../../../../redux/catalogFiltersApi.js';
import CloseIcon from '../../Icons/IconCloseMenu.svg';
import BtnDelete from '../../UI/BtnDelete/BtnDelete.jsx';
import FiltersCheckBox from './Components/checkBox/index.jsx';
import DropDownFilterMenu from './Components/dropDownFiltersMenu/index.jsx';
import PriceRangePicker from './Components/priceRangePicker/index.jsx';
import SearchBarFitresMenu from './Components/searchBar/index.jsx';
import './FilterMenu.css';
const FiltersMenu = ({
	menuStatus = false,
	changeMenuStatus,
	bgRender = false,
	desctopOnly = false,
	mobileOnly = false,
}) => {
	const { data, error, isLoading } = useGetCatalogFiltersQuery();

	const [clearAllStatus, setClearAllStatus] = useState(true);
	const dispatch = useDispatch();
	const catalogFilterItems = useSelector(state => state.catalogFilterItems);

	console.log(
		'catalogFilterItems:',
		catalogFilterItems,
		catalogFilterItems.length
	);

	if (isLoading) {
		return <div>Загрузка фильтров...</div>;
	}

	if (error) {
		return <div>Ошибка загрузки: {error.message}</div>;
	}

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
				} ${desctopOnly ? 'DesctopOnly' : ''}
				${mobileOnly ? 'MobileOnly' : ''}`}
			>
				<button onClick={changeMenuStatus} className='FiltersMenu_closeBtn'>
					<img src={CloseIcon} alt='Close icon' />
				</button>
				{catalogFilterItems.length > 0 && (
					<BtnDelete text='Очистити все' func={() => dispatch(clearItems())} />
				)}
				{data?.data?.fields.map((e, index) => (
					<div className='pb-4' key={index}>
						<h3 className='FiltersMenu__categoryName'>{e.categoryName__eng}</h3>
						{e.filters_dropdown
							? e.filters_dropdown.map((eSub, subIndex) => (
									<DropDownFilterMenu key={subIndex} array={eSub} />
							  ))
							: e.filters.map((e, filterIndex) => (
									<FiltersCheckBox key={filterIndex} text={e.text} id={e._id} />
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
	);
};

export default FiltersMenu;
