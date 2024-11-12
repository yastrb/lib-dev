import Header from '../MainLayout/sections/Header/index.js';
import Footer from './sections/Footer';

import './NotFoundLayout.css';

export default function NotFoundLayout({ children }) {
	return (
		<main className='MainLayout'>
			<Header />
			<div className='inner'>{children}</div>
			<Footer />
		</main>
	);
}
