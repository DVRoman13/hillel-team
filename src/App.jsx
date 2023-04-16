import './style.scss'

import TopHeader from './components/Header/components/TopHeader'
import ProductWidget from './components/ProductWidget/ProductWidget'
import Footer from './components/Footer/Footer'
import News from './components/News/News'

function App() {
  return (
    <div className='App'>
      <TopHeader />
      <ProductWidget title='New Products' />
      <News />
      <Footer />
    </div>
  )
}

export default App
