import { Outlet } from 'react-router-dom';

import Footer from './sections/Footer';
import Header from './sections/Header';

import './MainLayout.css';

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
