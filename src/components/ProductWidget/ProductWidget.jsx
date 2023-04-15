import ProductCard from "./components/ProductCard /ProductCard.jsx";
import styles from "./ProductWidget.jsx.scss"
const ProductWidget = () => {
    return (
        <ul className={styles.productList}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </ul>
    );
};

export default ProductWidget;