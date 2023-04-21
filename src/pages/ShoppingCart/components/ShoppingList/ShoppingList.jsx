import styles from './ShoppingList.module.scss'
import React, { useState, useEffect } from 'react'

import { data } from '../../../../components/ProductWidget/ProductWidget.mock'
import ProductCard from './ProductCard/ProductCard'

export default function ShoppingList() {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(data)
  }, [])

  return (
    <div className={styles.shopping_list__container}>
      <div className={styles.container__title_block}>
        <h6>Item</h6>
        <h6>Price</h6>
        <h6>Qty</h6>
        <h6>Subtotal</h6>
      </div>
      <div className={styles.container__main_block}>
        {list.map(item => (
          <ProductCard product={item} key={item.id}></ProductCard>
        ))}
      </div>
      <div className={styles.container__buttons_block}>
        <div className={styles.buttons_block_right}>
          <button className={styles.light}>Continue Shopping</button>
          <button className={styles.dark}>Clear Shopping Cart</button>
        </div>
        <button className={styles.dark}>Update Shopping Cart</button>
      </div>
    </div>
  )
}
