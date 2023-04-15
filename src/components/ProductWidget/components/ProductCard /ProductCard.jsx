import {AiFillStar, BsFillCheckCircleFill} from "react-icons/all";
import styles from './ProductCard.module.scss'

const ProductCard = () => {
    return (
        <li className={styles.productCard}>
            <div>
                <BsFillCheckCircleFill/>
                <span>in stock</span>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEHhK_HmCCccz9NlypnWtL5GTtUo1H2Vkqg&usqp=CAU"
                alt="apple"/>
            <div>
                <ul className={styles.starts}>{
                    [...new Array(5)].map((star, index) => (
                        <li key={index}>
                            <AiFillStar/>
                        </li>
                    ))
                }
                </ul>
                <span>Reviews (4)</span>
            </div>
            <h3>
                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
            </h3>
            <p>
                $499.00
            </p>
            <p>
                $499.00
            </p>
        </li>
    );
};

export default ProductCard;