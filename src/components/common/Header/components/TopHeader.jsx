import styles from './TopHeader.module.scss'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

export default function TopHeader() {
  return (
    <div className={styles.header_wrap}>
      <div className={styles.header}>
        <div className={styles.header__workTime}>
          <p>
            Mon-Thu: <span>9:00 AM - 5:30 PM</span>
          </p>
        </div>
        <div className={styles.header__adress}>
          <p>Visit our showroom in 1234 Street Adress City Address, 1234</p>
          <a href='#'>Contact Us</a>
        </div>
        <div className={styles.header__social}>
          <div className={styles.header__social_tel}>
            <p>Call Us:</p>
            <a className={styles.header__social_tel_link} href='tel:0012345678'>
              (00) 1234 5678
            </a>
          </div>
          <div>
            <a className={styles.header__social_icons} href='#'>
              {' '}
              <AiFillFacebook />{' '}
            </a>
            <a className={styles.header__social_icons} href='#'>
              {' '}
              <AiFillInstagram />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
