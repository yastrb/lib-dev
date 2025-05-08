import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import navLinksData from '../../data/navLinks.ts'
import DesktopNav from '../DesktopNav'
import MobileNav from '../MobileNav'


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);
	const { t } = useTranslation();


	const navLinks = navLinksData.map(link => ({
		...link, display: t(link.displayKey),
	}));

	return (
		<>
			<DesktopNav navLinks={navLinks} />
			<MobileNav navLinks={navLinks} menuOpen={menuOpen} toggleMenu={toggleMenu} />
		</>
	);
};

export default Navbar;

