import styles from './ShoppingList.module.scss'

import { data } from '../../../../components/ProductWidget/ProductWidget.mock'
import ProductCard from './ProductCard/ProductCard';

export default function ShoppingList(){

     console.log(data)

     return(
          <div className={styles.shopping_list__container}>
               <div className={styles.container__title_block}>
                    <h6>Item</h6>
                    <h6>Price</h6>
                    <h6>Qty</h6>
                    <h6>Subtotal</h6>
               </div>
               <div className={styles.container__main_block}>
                    {data.map(item => <ProductCard product={item} key={item.id}></ProductCard>)}
               </div>
               <div className={styles.container__buttons_block}>
                    <button>Continue Shopping</button>
                    <button>Clear Shopping Cart</button>
                    <button>Update Shopping Cart</button>
               </div>
          </div>
     );
}