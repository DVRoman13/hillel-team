import styles from './Footer.module.scss'
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import {links} from './Footer.mock'

import paypal from './icons/paypal.png';
import visa from './icons/visa.png';
import maestro from './icons/maestro.png';
import discover from './icons/discover.png';
import americanexpress from './icons/american-express.png';



import InfoBox from './components/InfoBox/InfoBox'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__contentTop}>
          <div className={styles.contentTop__titleside}>
            <h1 className={styles.titleside__title}>
              Sign Up To Our Newsletter.
            </h1>
            <p className={styles.titleside__text}>
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className={styles.contentTop__inputside}>
            <input
              className={styles.inputside__input}
              placeholder='Your Email'
            ></input>
            <button className={styles.inputside__button}>Subscribe</button>
          </div>
        </div>
        <div className={styles.footer__contentMiddle}>
          {links.map(item => <InfoBox key={item.id} {...item} />)}
        </div>
        <div className={styles.footer__content_bottom}>
          <div className={styles.content_bottom__icons}>
               <a className={ styles.bottom_icons} href="#"> <AiFillFacebook className={styles.social_icon}/> </a>
               <a className={ styles.bottom_icons} href="#"> <AiFillInstagram className={styles.social_icon}/> </a>
          </div>
          <div className={styles.content_bottom__cards}>
               <div className={styles.footer__card_icon}><img src={paypal} alt="paypal" /></div>
               <div className={styles.footer__card_icon}><img src={visa} alt="visa" /></div>
               <div className={styles.footer__card_icon}><img src={maestro} alt="maestro" /></div>
               <div className={styles.footer__card_icon}><img src={discover} alt="discover" /></div>
               <div className={styles.footer__card_icon}><img src={americanexpress} alt="americanexpress" /></div>

          </div>
          <div className={styles.content_bottom__text}>
               <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
