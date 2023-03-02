import styles from '../styles/Product.module.scss'
import ProductSvgWish from '../iconsvg/ProductSvgWish';
const Product = (props) => {
  const {children,img} = props;
  return (
 <div className={styles.product}>
   <div className={styles.product__image}>
    <a href="/" className={styles.product__image_block}>
      <img src={img} alt="Product " />
    </a>
    <a href="/" className={styles.add_to_wishlist}>
     <ProductSvgWish/>
    </a>
   </div>
   <div className={styles.product__body}>
     <h3>
      <a href="/">{children}</a>
     </h3>
     <p>$79.00</p>
   </div>
 </div>
  )
}

export default Product