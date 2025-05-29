import { Outlet } from 'react-router-dom'
import s from './MainLayout.module.scss'
import Footer from './sections/Footer'
import Header from './sections/Header'

export default function MainLayout() {
	return (
		<main className={s.MainLayout}>
			<Header />
			<div className={s.inner}>
				<Outlet />
			</div>
			<Footer />
		</main>
	);
}
