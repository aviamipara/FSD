import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Shop from './Shop'
import Nopage from './Nopage'

function My(){
    return(
        <Router>
            <ul>
                <li><lLink to="/">Home</lLink></li>
                <li><lLink to="/shop">Shop</lLink></li>
                <li><lLink to="/contact">Contact</lLink></li>
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
export default My