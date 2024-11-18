import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import Footer from './sections/Footer';
import { Header } from './sections/Header/index.js';

export default function MainLayout() {
	return (
		<main className='MainLayout'>
			<Header />
			<div className='inner'>
				<Outlet />
			</div>
			<Footer />
		</main>
	);
}
