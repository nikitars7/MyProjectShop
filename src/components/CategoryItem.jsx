import styles from '../styles/CategoryItem.module.scss'
import classNames from 'classnames'
const CategoryItem = ({img,alt}) => {
  return (
    <div className={styles.category__item}>
    <img src={img} alt={alt} />
    <div className={styles.category__overlay}>
       <a href="/" className={(classNames(styles.btn,styles.btn_dark))}>{alt}</a>
    </div>
 </div>
  )
}

export default CategoryItem