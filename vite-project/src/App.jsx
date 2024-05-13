import React from "react"
import { BrowserRouter } from "react-router-dom"
import styles from "./style"
import Header from './components/common/Header';
import Hero from "./components/hero/Hero";
import New from "./components/new/New";
import Promotion from './components/promotion/Promotion';
import Bestsellers from "./components/bestsellers/Bestsellers";
import Footer from "./components/common/Footer";


const App = () => (
  <>
    <BrowserRouter>
      <div className=" mx-auto min-h-[100vh] flex flex-col">

        {/* header start */}
        <div className={`${styles.flexCenter} pt-[44px] `}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
        {/* header end */}

        {/* hero */}
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* main */}
        <div className={`${styles.paddingX} ${styles.flexStart} flex grow`} >
          <div className={`${styles.boxWidth}`}>
            <New />
            <Promotion />
            <Bestsellers />
          </div>
        </div>

        {/* footer start */}
        <div className={`${styles.paddingX} ${styles.flexStart} shrink-0`}>
          <div className={`${styles.boxWidth}`}>
            < Footer />
          </div>
        </div>
        {/* footer end */}
      </div>
    </BrowserRouter>
  </>
)


export default App
