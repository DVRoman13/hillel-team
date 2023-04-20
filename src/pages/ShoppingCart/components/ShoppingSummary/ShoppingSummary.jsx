import styles from './ShoppingSummary.module.scss'

import React, {useState} from 'react';

import up from './icons/up.svg'
import down from './icons/down.svg'

import SummaryForm from './components/SummaryForm/SummaryForm';

export default function ShoppingSummary(){

     const [isTaxOpen, setIsTaxOpen] = useState(false);

     return(
          <div className={styles.shopping_summary_container}>
               <div className={styles.container_top}>
                    <div className={styles.container_top__title}>
                         <h5>Summary</h5>
                    </div>
                    <div className={styles.container_top__tax}>
                         <div className={styles.top__tax_wrapper}>
                              <h6>Estimate Shipping and Tax</h6>
                              <button onClick={() => setIsTaxOpen(prev => !prev)}>
                                   {!isTaxOpen && <img src={up} alt="up" />}
                                   {isTaxOpen && <img src={down} alt="down" />}
                              </button>
                         </div>
                         <p>Enter your destination to get a shipping estimate.</p>
                         {isTaxOpen && <SummaryForm />}
                    </div>
                    <div className={styles.container_top__code}></div>
               </div>
               <div className={styles.container_main}></div>
               <div className={styles.container_bottom}></div>
          </div>
     );
}