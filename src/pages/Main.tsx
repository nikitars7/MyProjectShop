import Banner from '../components/Banner'
import Category from '../components/Category'
import Products from '../components/Products'
import Footer from '../components/Footer'
const Main:React.FC = () => {
  return (
    <div>
       <Banner/>
       <Category/>
       <Products/>
       <Footer/>
    </div>
  )
}

export default Main