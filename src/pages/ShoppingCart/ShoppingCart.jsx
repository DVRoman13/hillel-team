import styles from './ShoppingCart.module.scss'

import Header from '../../components/common/Header/components/TopHeader'
import Footer from '../../components/common/Footer/Footer'

import ShoppingList from './components/ShoppingList/ShoppingList'
import ShoppingSummary from './components/ShoppingSummary/ShoppingSummary'


export default function ShoppingCart() {
  return (
    <>
      <Header />
      <div className={styles.container}>
          <div className={styles.shopcart__content}>
               <div className={styles.shopcart__content_nav}>
                    <a href="#">Home</a>
                    <span>{'›'}</span>
                    <a href="#">Login</a>
               </div>
               <div className={styles.shopcart__content_title}>
                    <h3>Shopping Cart</h3>
               </div>
               <div className={styles.shopcart__content_main}>
                    <ShoppingList></ShoppingList>
                    <ShoppingSummary></ShoppingSummary>
               </div>
          </div>
      </div>
      <Footer />
    </>
  )
}
