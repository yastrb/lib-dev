import { useBreakpointMF } from 'react-responsive-tools'
import DesktopNav from '../DesktopNav'
import MobileNav from '../MobileNav'

import s from './NavBar.module.scss'

const Navbar = () => {
  const isMedium = useBreakpointMF('md');
	return (
		<div className={s.NavBar}>
		{!isMedium ?
			<MobileNav/>:
			<DesktopNav/>}
		</div>
	);
};

export default Navbar;

