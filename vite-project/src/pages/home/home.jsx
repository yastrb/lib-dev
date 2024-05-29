import styles from "../../style";
import Hero from "../../components/hero/Hero";
import New from "../../components/new/New";
import Promotion from '../../components/promotion/Promotion';
import Bestsellers from "../../components/bestsellers/Bestsellers";
import AboutUsText from "../../components/hero/AboutUs";
import BookList from "./bookList";



const Home = () => {
    return <div>
        
        {/* hero */}
        <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>
        <AboutUsText />
        {/* hero end */}


        {/* main */}
        <div className={`${styles.paddingX} ${styles.flexStart} flex grow`} >
            <div className={`${styles.boxWidth}`}>
                <New />
                <Promotion />
                <Bestsellers />
                <BookList/>
            </div>
        </div>
    </div>
}

export default Home;
