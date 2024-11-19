import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import CartIcon from '../../components/CartIcon/index.jsx';
import SelectLanguage from '../../components/LanguageSwitcher/index.jsx';
import styles from '../../style.js';
import LogInIcon from './LoginRegisterIcon/LoginRegisterIcon.jsx';
import Nav from './Navbar/Navbar.jsx';

import SearchBar from '../../ui/SearchBar/index.js';

const Header = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<header className='w-full'>
			<div className='bg-main'>
				<div
					className={`${styles.paddingX} ${styles.boxWidth} mx-auto justify-between flex py-5`}
				>
					{isHomePage ? (
						<img src={logo} alt='BookShop' className='w-[180px] h-[80px]' />
					) : (
						<Link to='/'>
							<img src={logo} alt='BookShop' className='w-[180px] h-[80px]' />
						</Link>
					)}

					<div className='searchfield hidden md:flex md:flex-col md:items-center md:justify-center relative'>
						<SearchBar searchType='books' />
					</div>

					<div className='flex md:items-center md:justify-center'>
						<div className='hidden md:flex h-12'>
							<SelectLanguage />
						</div>
						<div className='flex items-center justify-center'>
							<CartIcon />
							<LogInIcon />
						</div>
					</div>
				</div>
			</div>

			<div className='bg-secondary'>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
