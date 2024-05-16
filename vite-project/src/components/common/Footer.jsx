
import {  Typography, Button } from "@material-tailwind/react"
import arrowUp from "../../assets/icons/arrowUp.svg"
import logo from "../../assets/images/logo.svg"
import { footerData, contactData, socialData } from "../../data/footerData"
import styles from "../../style"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className={` ${styles.footerTop}`}>
        <img src={logo} alt="logo-book" />
        <ul className={`${styles.footerList} ${styles.footerContacts}`}>
          {contactData.map(el => (
            <li key={el.id}>
            <Typography
              color="black"
              className={`flex gap-1 ${styles.footerLink}`}
            >
              <img src={el.icon}/>{" "}{el.text}
            </Typography>
          </li>
          ))}
        </ul>
        <div className={`${styles.footerColumns}`}>
        {footerData.map(({id, links}) => (
           <ul key={id} className={`${styles.footerList}`}>
            {
              links.map(link => (
                <li key={link.id}>
                  <Typography as="a" color="black" href={link.link} className={styles.footerLink}>
                    {link.text}
                  </Typography>
                </li>
              ))
            }
           </ul>
        ))
        }
        </div>
        <ul className={styles.footerSocialList}>
          {
            socialData.map(el => (
              <li key={el.id} className={styles.footerGap}>
                <Typography>
                  <img src={el.image} alt={el.alt}/>
                </Typography>
              </li>
            ))
          }
        </ul>
      </div>
      <hr className={`${styles.borderFooter}`}/>
        <div className={`${styles.footerBottom}`}>
          <Typography className="text-center font-normal">
             &copy; BIBLIOTEKA 2024. Усі права захищено
          </Typography>
          <Button variant="text" className={`${styles.textButtonWithIcon}`}>ВГОРУ{" "}<img src={arrowUp} alt="arrow up icon"/></Button> 
      </div>
    </footer>
  )
}

export default Footer