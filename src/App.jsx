import './style.scss'

import TopHeader from './components/common/Header/components/TopHeader'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Footer from './components/common/Footer/Footer'
import News from './components/common/News/News'
import CustomerLogin from './pages/CustomerLogin/CustomerLogin'

function App() {
  return (
    <div className='App'>
      {/* <TopHeader />
      <ProductWidget title='New Products' />
      <News/>
      <Footer /> */}
      <CustomerLogin />
    </div>
  )
}

export default App
