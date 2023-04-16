import { data } from './components/NewsWidget'
import classes from './News.module.scss'
const GetNews = () => {
  data.forEach(el => {
    return (
      <div className={classes.news__display__card}>
        <div className={classes.news__images__wrap}>{el.image}</div>
        <span className={classes.news__text__about}>{el.text}</span>
        <span className={classes.news__text__about__data}>{el.data}</span>
      </div>
    )
  })
}
const News = () => {
  return (
    <>
      <div className={classes.news}>
        <div className={classes.news__conteiner}>
          <div className={classes.news__conteiner__display}>
            <div className={classes.news__display__card}>
              <div className={classes.news__images__wrap}>
                <img
                  src='https://img.freepik.com/premium-photo/computer-sitting-on-top-of-a-field-of-flowers-generative-ai_733139-4904.jpg?w=1380'
                  alt=''
                />
              </div>
              <span className={classes.news__text__about}>{data.text}</span>
              <span className={classes.news__text__about__data}>
                {data.data}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
