import Icon from '../../../../assets/icons/FooterNotFoundPage.svg';
import './Footer.css';

const Footer = () => {
	return (
		<div className='FooterNotFoundPage'>
			<p className='FooterNotFoundPage-Text'>
				<img src={Icon} alt='icon' />
				BIBLIOTEKA 2024. Усі права захищено
			</p>
		</div>
	);
};

export default Footer;
