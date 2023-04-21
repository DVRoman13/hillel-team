import styles from './ShoppingSummary.module.scss'

import React, { useState } from 'react'

import up from './icons/up.svg'
import down from './icons/down.svg'
import paypal from './icons/paypal.svg'
import zip from './icons/zip.svg'

import SummaryForm from './components/SummaryForm/SummaryForm'

export default function ShoppingSummary() {
  const [isTaxOpen, setIsTaxOpen] = useState(false)
  const [isCodeOpen, setIsCodeOpen] = useState(false)

  return (
    <div className={styles.shopping_summary_container}>
      <div className={styles.container_top}>
        <div className={styles.container_top__title}>
          <h5>Summary</h5>
        </div>
        <div className={styles.container_top__tax}>
          <div className={styles.top__tax_wrapper}>
            <h6>Estimate Shipping and Tax</h6>
            <button onClick={() => setIsTaxOpen(prev => !prev)}>
              {!isTaxOpen && <img src={up} alt='up' />}
              {isTaxOpen && <img src={down} alt='down' />}
            </button>
          </div>
          <p>Enter your destination to get a shipping estimate.</p>
          {isTaxOpen && <SummaryForm />}
        </div>
        <div className={styles.container_top__code}>
          <div className={styles.top__code_wrapper}>
            <h6>Apply Discount Code</h6>
            <button onClick={() => setIsCodeOpen(prev => !prev)}>
              {!isCodeOpen && <img src={up} alt='up' />}
              {isCodeOpen && <img src={down} alt='down' />}
            </button>
          </div>
          {isCodeOpen && (
            <div className={styles.hidebox__code}>
              <label htmlFor='discountCode'>Enter discount code</label>
              <input
                type='text'
                className={styles.input}
                placeholder='Enter Discount code'
              />
              <button>Apply Discount</button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.container_main}>
        <div className={styles.main_titles_block}>
          <div className={styles.main_info_block}>
            <label htmlFor='Subtotal'>Subtotal</label>
            <p>$13,047.00</p>
          </div>
          <div className={styles.main_info_block}>
            <label htmlFor='Shipping '>Shipping </label>
            <p>$21.00</p>
          </div>
          <div className={styles.main_info_block}>
            <label className={styles.text}>(Standard Rate - Price may vary depending on the <br />item/destination. Shop Staff will contact you.)</label>
          </div>
          <div className={styles.main_info_block}>
            <label htmlFor=''>Tax</label>
            <p>$1.91</p>
          </div>
          <div className={styles.main_info_block}>
            <label htmlFor=''>GST (10%)</label>
            <p>$1.91</p>
          </div>
          <div className={styles.main_info_block}>
            <label htmlFor=''>Order Total</label>
            <p style={{fontSize: '18px'}}>$13,068.00</p>
          </div>
        </div>
        <div className={styles.main_buttons_block}>
          <button>Proceed to Checkout</button>
          <button style={{background: '#FFB800', color: '#232C65', gap: '15px'}}>
               <p>Check out with</p>
               <img src={paypal} alt="paypal" />
          </button>
          <button style={{border: '2px solid #A2A6B0', background: 'transparent', color: '#666666'}}>Check Out with Multiple Addresses</button>
        </div>
      </div>
      <div className={styles.container_bottom}>
          <img src={zip} alt="zip" className={styles.img}/>
          <p><span>own</span>it now, up to 6 months interest free <a href="#">learn more</a></p>
      </div>
    </div>
  )
}