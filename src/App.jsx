import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFoundLayout from './layouts/NotFoundLayout/index.js'
import NotFoundPage from './pages/404NotFound/index.js'
import AboutUs from './pages/aboutUs/aboutUs'
import Catalog from './pages/catalog/catalog.jsx'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage/productPage'
import Sales from './pages/sales/sales'
import TopBooks from './pages/topBooks/topBooks'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/top-books' element={<TopBooks />} />
				<Route path='/special-offers' element={<Sales />} />
				<Route path='/productPage' element={<ProductPage />} />
			</Route>
			<Route
				path='*'
				element={
					<NotFoundLayout>
						<NotFoundPage status={404} title='Not found' />
					</NotFoundLayout>
				}
			/>
		</Routes>
	);
};

export default App;
