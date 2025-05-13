import { Link } from 'react-router-dom'
import s from './DesktopNav.module.scss'

const DesktopNav = () => {
	return (
		<div className={s.DesktopNav}>
			<nav className={s.links}>
				<Link to={'/'}>Головна</Link>
				<Link to={'/catalog'}>Каталог</Link>
				<Link to={'/about'}>Про нас</Link>
				<Link to={'/top-books'}>Топ книг</Link>
				<Link to={'/special-offers'}>Акції</Link>
			</nav>
			<span>+380 053 088 3635</span>
		</div>
	)
}

export default DesktopNav
