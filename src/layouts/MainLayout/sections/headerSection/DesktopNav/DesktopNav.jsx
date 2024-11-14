import { NavLink } from 'react-router-dom';
import styles from '../../../../../style';

const DesktopNav = ({ navLinks }) => {
	return (
		<div className={`${styles.boxWidth} ${styles.paddingX} py-5 md:mx-auto hidden md:flex md:justify-between heading`}>
			<nav className="flex gap-3">
				{navLinks.map(link => (
					<NavLink key={link.id} to={link.path}>
						{link.display}
					</NavLink>
				))}
			</nav>
			<span>
				<a href="tel:+380530883635">+38 053 088 3635</a>
			</span>
		</div>
	);
};

export default DesktopNav;
