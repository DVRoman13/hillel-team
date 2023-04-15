import {AiFillStar, BsFillCheckCircleFill, BsFillTelephoneFill} from "react-icons/all";

import styles from './ProductCard.module.scss'

const ProductCard = ({isStock, title, fullPrice, price, rating, reviews, image}) => {
    return (
        <div className={styles.productCard}>
            <div className={isStock ? styles.isStockTrue : styles.isStockFalse}>
                {isStock
                    ? <BsFillCheckCircleFill className={styles.icon}/>
                    : <BsFillTelephoneFill className={styles.icon}/>}
                {isStock ? "in stock" : "check availability"}
            </div>
            <img className={styles.img}
                 src={image}
                 alt="apple"/>
            <div className={styles.rating}>
                <ul className={styles.starts}>{
                    [...new Array(5)].map((star, index) => (
                            index >= rating
                                ? <li className={styles.star} key={index}><AiFillStar/></li>
                                : <li className={styles.starActive} key={index}><AiFillStar/></li>
                        )
                    )
                }
                </ul>
                <span>Reviews ({reviews})</span>
            </div>
            <h4 className={styles.title}>
                {title}
            </h4>
            <div>
                <p className={styles.fullPrice}>
                    ${fullPrice}
                </p>
                <p className={styles.price}>
                    ${price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;