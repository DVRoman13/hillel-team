import styles from './Footer.module.scss'

import {links} from './Footer.mock'

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
        <div className={styles.footer__content_bottom}></div>
      </div>
    </footer>
  )
}
