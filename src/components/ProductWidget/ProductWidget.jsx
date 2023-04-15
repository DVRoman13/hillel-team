import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import styles from './ProductWidget.module.scss'

import { data } from './ProductWidget.mock.js'

import ProductCard from './components/ProductCard /ProductCard.jsx'
import BtnSlider from '../BtnSlider/BtnSlider.jsx'

const ProductWidget = ({ title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <BtnSlider cls={'prev'} />,
    nextArrow: <BtnSlider cls={'next'} />
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <h3 className={styles.title}>{title}</h3>
        <a className={styles.allProducts} href='#'>
          See All New Products
        </a>
      </div>
      <Slider {...settings}>
        {data.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Slider>
    </div>
  )
}

export default ProductWidget
