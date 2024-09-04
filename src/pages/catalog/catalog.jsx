import { useEffect, useState } from 'react'
import IconBtn from '../../assets/icons/btnCatalogOpenMobileMenu.svg'
import DropDownCatalogSort from '../../components/dropDownCatalogSort'
import FiltersMenu from '../../components/filtersMenu/index.jsx'
import styles from '../../style.js'
import './styles.css'

const Catalog = () => {
	const [menuStatus, setMenuStatus] = useState(false)

	const handleChangeMenuStatus = () => {
		setMenuStatus(prevStatus => !prevStatus)
	}
	useEffect(() => {
		if (menuStatus) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [menuStatus])
	return (
		<div className={`${styles.boxWidth} m-auto  min-h-screen catalogContainer`}>
			<FiltersMenu menuStatus='true' desctopOnly='true' />

			<div className='catalogContent__wrapper'>
				<div className='flex justify-between w-full'>
					<p className='catalogTotalAmountItems'>305 товарів</p>
					<DropDownCatalogSort />
				</div>

				{/* ----MobileVersion---- */}
				<button onClick={handleChangeMenuStatus} className='mobileBtnOpenMenu'>
					Усі фільтри <img src={IconBtn} />
				</button>
				<FiltersMenu
					menuStatus={menuStatus}
					changeMenuStatus={handleChangeMenuStatus}
					bgRender='true'
				/>
				<p>hallo</p>
				{/* -------------------- */}
			</div>
		</div>
	)
}

export default Catalog
