import styles from './SubmitButton.module.scss'

export default function SubmitButton({title}) {
  return <button className={styles.submit_button}>{title}</button>
}
