import './style.scss'

import TopHeader from './components/common/Header/components/TopHeader'
import ProductWidget from "./components/ProductWidget/ProductWidget";
import Footer from './components/common/Footer/Footer'


function App() {

    return (
        <div className="App">
            <TopHeader/>
            <ProductWidget title="New Products"/>
            <Footer />
        </div>
    )
}

export default App