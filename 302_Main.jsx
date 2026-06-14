import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './302_Home'
import Contact from './302_Contact'
import Shop from './302_Shop'
import Nopage from './302_Nopage'

function Main(){
    return(
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Nopage/>}/>
            </Routes>
        </Router>
    )
}
export default Main