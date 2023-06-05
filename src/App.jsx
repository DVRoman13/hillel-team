import './style.scss'

import TopHeader from './components/common/Header/components/TopHeader'
import NavBar from './components/common/NavBar'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Footer from './components/common/Footer/Footer'
import News from './components/common/News/News'
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <div className='App'>
      <TopHeader />
      {/* <NavBar/> */}
      {/* <ProductWidget title='New Products' /> */}
      {/* <News/> */}
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default App
