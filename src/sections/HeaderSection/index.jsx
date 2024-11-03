import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import CartIcon from '../../components/CartIcon';
import LoginIcon from '../../components/LoginRegisterIcon';
import SelectLanguage from '../../components/LanguageSwitcher';
import Nav from '../../components/Navbar';
import styles from '../../style';
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
							<LoginIcon />
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
