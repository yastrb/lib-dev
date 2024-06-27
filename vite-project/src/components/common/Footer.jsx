import { Button, Typography } from '@material-tailwind/react'
import arrowUp from '../../assets/icons/arrowUp.svg'
import logo from '../../assets/images/logo.svg'
import { contactData, footerData, socialData } from '../../data/footerData'
import styles from '../../style'

const Footer = () => {
	const toTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className='realtive bottom-0'>
			<div className={` ${styles.footerTop} py-10`}>
				<img src={logo} alt='logo-book' />
				<ul className={`${styles.footerList} ${styles.footerContacts}`}>
					{contactData.map(el => (
						<li key={el.id}>
							<Typography
								as='a'
								color='black'
								target='_blank'
								href={el.link}
								className={`flex gap-1 ${styles.footerLink}`}
							>
								<img src={el.icon} />
								{el.text}
							</Typography>
						</li>
					))}
				</ul>
				<div className={`${styles.footerColumns}`}>
					{footerData.map(({ id, links }) => (
						<ul key={id} className={`${styles.footerList}`}>
							{links.map(link => (
								<li key={link.id}>
									<Typography
										as='a'
										color='black'
										href={link.link}
										className={styles.footerLink}
									>
										{link.text}
									</Typography>
								</li>
							))}
						</ul>
					))}
				</div>
				<ul className={styles.footerSocialList}>
					{socialData.map(el => (
						<li key={el.id} className={styles.footerGap}>
							<Typography className='cursor-pointer'>
								<a href={el.url} target='_blank' rel='noopener noreferrer'>
									<img src={el.image} alt={el.alt} />
								</a>
							</Typography>
						</li>
					))}
				</ul>
			</div>
			<hr className={`${styles.borderFooter}`} />
			<div className={`${styles.footerBottom}`}>
				<Typography className='text-center font-normal'>
					&copy; BIBLIOTEKA 2024. Усі права захищено
				</Typography>
				<Button
					onClick={toTop}
					variant='text'
					className={`${styles.textButtonWithIcon}`}
				>
					ВГОРУ <img src={arrowUp} alt='arrow up icon' />
				</Button>
			</div>
		</footer>
	)
}

export default Footer
