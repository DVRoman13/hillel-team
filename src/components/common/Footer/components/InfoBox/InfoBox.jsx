import styles from './InfoBox.module.scss'

export default function InfoBox({ title, subTitles, isLink }) {
  return (
    <div className={styles.infobox__container}>
      <div className={styles.infobox__titleblock}>
        <p className={styles.titleblock__title}>{title}</p>
      </div>
      <div className={styles.infobox__datablock}>
        {isLink &&
          subTitles.map(subtitle => (
            <a
              key={subtitle.id}
              href={subtitle.link}
              className={styles.datablock__title}
            >
              <p>{subtitle.title}</p>
            </a>
          ))}
        {!isLink &&
          subTitles.map(subtitle => (
            <p key={subtitle.id} className={styles.datablock__title}>
              {subtitle.title}:&nbsp;
              {!subtitle.isLink && <span>{subtitle.value}</span>}
              {subtitle.isLink && (
                <a
                  href={`${subtitle.isLink.type}:${subtitle.isLink.value}`}
                  className={styles.datablock__span}
                >
                  {subtitle.value}
                </a>
              )}
            </p>
          ))}
      </div>
    </div>
  )
}
