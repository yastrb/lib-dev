﻿// import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ProductPage from './pages/ProductPage/productPage'
import AboutUs from './pages/aboutUs/aboutUs'
import Catalog from './pages/catalog/catalog.jsx'
import Home from './pages/HomePage/HomePage.jsx'
import Sales from './pages/sales/sales'
import TopBooks from './pages/topBooks/topBooks'
import styles from './style'
import Footer from './sections/footerSection'
import {HeaderSection} from './sections/headerSection'

const AppWrapper = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <AboutUs /> },
		{ path: '/catalog', element: <Catalog /> },
		{ path: '/top-books', element: <TopBooks /> },
		{ path: '/special-offers', element: <Sales /> },
		{ path: '/productPage', element: <ProductPage /> },
	])
	return routes
}

const Layout = () => {
	return (
		<Router>
			<div className='overflow-x-hidden mx-auto min-h-[100vh] flex flex-col'>
				<div className={`${styles.flexCenter} `}>
					<HeaderSection />
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

