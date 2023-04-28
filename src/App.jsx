import './style.scss'

import TopHeader from './components/common/Header/components/TopHeader'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Footer from './components/common/Footer/Footer'
import News from './components/common/News/News'

import NavHeader from './components/Header/NavHeader/NavHeader'


function App() {
  return (
    <div className='App'>
      <TopHeader />

      <NavHeader/>

      <ProductWidget title='New Products' />
      <News/>
      <Footer />
    </div>
  )
}

export default App
