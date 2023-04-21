import styles from './SummaryForm.module.scss'

import React, { useState } from 'react'

import { countries } from './SummaryForm.helper'

export default function SummaryForm() {
  const [inputValues, setInputValues] = useState({
    country: countries[0].name,
    province: '',
    zip: ''
  })

  return (
    <form action='' className={styles.form}>
      <div className={styles.top_inputs_wrapper}>
        <label htmlFor='Contry'>Country</label>
        <select className={styles.input}>
          {countries.map(country => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <label htmlFor='State/Province'>State/Province</label>
        <input type='text' className={styles.input} />
        <label htmlFor='Zip/Postal Code'>Zip/Postal Code</label>
        <input type='number' className={styles.input} />
      </div>

      <div className={styles.bottom_inputs_wrapper}>
        <label htmlFor='Standard Rate'>Standard Rate</label>
        <div className={styles.wrapper}>
          <input type='radio' name='option' checked />
          <p>
            Price may vary depending on the item/destination. Shop Staff will
            contact you. $21.00
          </p>
        </div>

        <label htmlFor='Pickup from store'>Pickup from store</label>
        <div className={styles.wrapper}>
          <input type='radio' name='option' />
          <p>1234 Street Adress City Address, 1234 $0.00</p>
        </div>
      </div>
    </form>
  )
}
