import { useEffect, useState } from 'react';
import IconBtn from '../../assets/icons/btnCatalogOpenMobileMenu.svg';
import DropDownCatalogSort from '../../components/dropDownCatalogSort';
import { useGetAllBooksQuery } from '../../redux/booksSlice';
import styles from '../../style.js';
import SelectedFilters from '././Components/SelectedFilters/index.js';
import Cataloglist from './cataloglist.jsx';
import FiltersMenu from './Sections/FilterMenu/index.js';
import './styles.css';

const Catalog = () => {
	const [menuStatus, setMenuStatus] = useState(false);
	const { data, error, isLoading } = useGetAllBooksQuery();
	const [sortedBooks, setSortedBooks] = useState([]);

	const handleChangeMenuStatus = () => {
		setMenuStatus(prevStatus => !prevStatus);
	};

	useEffect(() => {
		if (menuStatus) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuStatus]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading books</div>;
	return (
		<div className={`${styles.boxWidth} m-auto  min-h-screen catalogContainer`}>
			<FiltersMenu menuStatus='true' desctopOnly='true' />

			<div className='catalogContent__wrapper'>
				<SelectedFilters />
				<div className='flex justify-between w-full'>
					<p className='catalogTotalAmountItems'>305 товарів</p>
					<DropDownCatalogSort books={data.newBooks} onSort={setSortedBooks} />
				</div>

				{/* ----MobileVersion---- */}
				<button onClick={handleChangeMenuStatus} className='mobileBtnOpenMenu'>
					Усі фільтри <img src={IconBtn} />
				</button>
				<FiltersMenu
					menuStatus={menuStatus}
					changeMenuStatus={handleChangeMenuStatus}
					bgRender='true'
					mobileOnly='true'
				/>
				{/* -------------------- */}
				<Cataloglist
					books={sortedBooks.length > 0 ? sortedBooks : data.newBooks}
				/>
			</div>
		</div>
	);
};

export default Catalog;
