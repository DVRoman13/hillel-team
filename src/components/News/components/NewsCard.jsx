import classes from '../News.module.scss'
const NewsCard = props => {
  return (
    <>
      <div className={classes.news__display__card}>
        <div className={classes.news__images__wrap}>
          <img src={props.src} alt='news' />
        </div>
        <span className={classes.news__text__about}>
        {props.text}
        </span>
        <span className={classes.news__text__about__data}>01.09.2020</span>
      </div>
    </>
  )
}
export default NewsCard
