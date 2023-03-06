import WishListItem from '../components/WishListItem'
import styles from '../styles/WishList.module.scss'
const Wishlist = () => {
  document.title = 'Wishlish';
  return (
    <div className={styles.container}>
      <h2 className={styles.wishlist__title}>Wishlist</h2>
      <div className={styles.list}>
        <WishListItem/>
        <WishListItem/>
      </div>
    </div>
  )
}

export default Wishlist