import './style.scss'

import TopHeader from './components/Header/components/TopHeader'
import ProductWidget from "./components/ProductWidget/ProductWidget";


function App() {

    return (
        <div className="App">
            <TopHeader/>
            <ProductWidget title="New Products"/>
        </div>
    )
}

export default App