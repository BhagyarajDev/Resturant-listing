import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestaurantDetails from './component/RestaurantDetails'

function App() {


  return (
    <Router>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant/:id' element={<RestaurantDetails/>}/>
        

        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
