// import React from 'react'
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import styles from '../../style'
import Home from '../../pages/home/home'
import AboutUs from '../../pages/aboutUs/aboutUs'
import Catalog from '../../pages/catalog/catalog'
import TopBooks from '../../pages/topBooks/topBooks'
import Sales from '../../pages/sales/sales'
import Header from './Header'
import Footer from './Footer'

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/top-books", element: <TopBooks /> },
    { path: "/sales", element: <Sales /> },
  ])
  return routes
}

const Layout = () => {
  return (
    <Router>
    <div className=" mx-auto min-h-[100vh] flex flex-col">
      <div className={`${styles.flexCenter} `}>
        <Header />
      </div>

     
        <AppWrapper />
     

      <div className={`${styles.paddingX} ${styles.flexStart}  ${styles.footerHeader} static shrink-0`}>
        <div className={`${styles.boxWidth}`}>
          < Footer />
        </div>
      </div>
    </div>
    </Router>
  )
}

export default Layout