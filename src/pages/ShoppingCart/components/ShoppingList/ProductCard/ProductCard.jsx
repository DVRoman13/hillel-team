import styles from './ProductCard.module.scss'
import React, { useState } from 'react'

import top from './icons/top.svg'
import bottom from './icons/bottom.svg'
import cross from './icons/cross.svg'
import pen from './icons/pen.svg'

export default function ProductCard({ product }) {
  const [value, setValue] = useState(1)

  return (
    <div className={styles.product_card__container}>
      <div className={styles.container__column_item}>
        <img src={product.image} alt='product' />
        <p>{product.title}</p>
      </div>
      <div className={styles.container__column_price}>
        <p>${product.price}</p>
      </div>
      <div className={styles.container__column_qty}>
        <div className={styles.column_qty__input_wrapper}>
          <input
            type='number'
            min={1}
            max={10}
            value={value}
            placeholder='1'
            readOnly
            onKeyDown={e => e.preventDefault()}
          />
          <div className={styles.button_wrapper}>
            <button onClick={() => setValue(prev => prev + 1)}>
              <img src={top} alt='' />
            </button>
            <button
              style={{ marginBottom: '2px' }}
              onClick={() => setValue(prev => (prev !== 1 ? prev - 1 : prev))}
            >
              <img src={bottom} alt='' />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container__column_subtotal}>
        <p>${product.price * value}</p>
        <div className={styles.subtotal_edit_buttons}>
          <button>
            <img src={cross} alt='cross' />
          </button>
          <button>
            <img src={pen} alt='pen' />
          </button>
        </div>
      </div>
    </div>
  )
}
