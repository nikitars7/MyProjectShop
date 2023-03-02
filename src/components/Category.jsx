import styles from '../styles/Category.module.scss'
import imgBannerF from '../img/banner-20.jpg'
import imgBannerS from '../img/banner-21.jpg'
import imgBannerT from '../img/banner-22.jpg'
import CategoryItem from './CategoryItem'
const Category = () => {
  return (
   <section className={styles.category}>
   <div className={styles.container}>
    <h2 className={styles.category__title}>This Season Collection</h2>
    <div className={styles.category__grid}>
     <CategoryItem img={imgBannerF} alt='Glasses'/>
     <CategoryItem img={imgBannerS} alt='Sneakers'/>
     <CategoryItem img={imgBannerT} alt='Handbags'/>
    </div>
   </div>
  </section>
  )
}

export default Category