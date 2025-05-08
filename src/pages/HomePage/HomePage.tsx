// import useRegisterMut from 'queries/auth/useRegisterMut'
import styles from '../../style.ts'
import BestSellers from './sections/BestSellers'
import Hero from './sections/Hero/index.ts'
import NewArrival from './sections/NewArrival'
import Promotion from './sections/Promotion'
import StoreDescription from './sections/StoreDescription/index.ts'
const HomePage = () => {
	return (
		<div>
			<div
				className={` hero ${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<StoreDescription />
			<div className={`${styles.paddingX} ${styles.flexStart} flex grow`}>
				<div className={`${styles.boxWidth}`}>
					<NewArrival />
					<Promotion />
					<BestSellers />
				</div>
			</div>
		</div>
	)
}

export default HomePage
