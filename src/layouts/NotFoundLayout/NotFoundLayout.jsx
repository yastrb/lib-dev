import { Header } from '../MainLayout/sections/Header/index.js';
import './NotFoundLayout.css';
import Footer from './sections/Footer';

export default function NotFoundLayout({ children }) {
	return (
		<main className='MainLayout'>
			<Header />
			<div className='inner'>{children}</div>
			<Footer />
		</main>
	);
}
