import { Outlet } from 'react-router-dom';
import Footer from './sections/Footer';
import { HeaderSection as Header } from './sections/headerSection';
import './MainLayout.css';

export default function MainLayout() {
	return (
		<main className='MainLayout font-montserrat'>
			<Header />
			<div className='inner'>
				<Outlet />
			</div>
			<Footer />
		</main>
	);
}
