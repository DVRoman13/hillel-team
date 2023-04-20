import './style.scss'

import TopHeader from './components/common/Header/components/TopHeader'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Footer from './components/common/Footer/Footer'

import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

function App() {
  return (
    <div className='App'>
      {/* <TopHeader />
      <ProductWidget title='New Products' />
      <Footer /> */}
      <ShoppingCart />
    </div>
  )
}

export default App
