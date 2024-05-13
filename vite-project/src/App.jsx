import React from "react"
import { BrowserRouter as Router, useRoutes  } from "react-router-dom"
import Home from "./pages/home/home"
import AboutUs from "./pages/aboutUs/aboutUs"
import Catalog from "./pages/catalog/catalog"
import TopBooks from "./pages/topBooks/topBooks"
import Sales from "./pages/sales/sales"



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

const App = () => {
  return <Router>
      <AppWrapper/>
  </Router>
}


export default App
