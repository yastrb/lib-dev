// import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import AboutUs from '../../pages/aboutUs/aboutUs'
import Catalog from '../../pages/catalog/catalog'
import Home from '../../pages/home/home'
import Sales from '../../pages/sales/sales'
import TopBooks from '../../pages/topBooks/topBooks'
import styles from '../../style'
import Footer from './Footer'
import Header from './Header'

const AppWrapper = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <AboutUs /> },
		{ path: '/catalog', element: <Catalog /> },
		{ path: '/top-books', element: <TopBooks /> },
		{ path: '/sales', element: <Sales /> },
	])
	return routes
}

const Layout = () => {
	return (
		<Router>
<<<<<<< HEAD
			<div className=' mx-auto min-h-[100vh] flex flex-col font-montserrat'>
=======
			<div className=' mx-auto min-h-[100vh] flex flex-col'>
>>>>>>> 6b682d2e7b8398b7d0372c4ee472c8f896913544
				<div className={`${styles.flexCenter} `}>
					<Header />
				</div>

				<AppWrapper />

				<div
					className={`${styles.paddingX} ${styles.flexStart}  ${styles.footerHeader} static shrink-0`}
				>
					<div className={`${styles.boxWidth}`}>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	)
}

export default Layout
