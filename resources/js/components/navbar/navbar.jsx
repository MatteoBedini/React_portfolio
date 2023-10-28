import './style.css';
import Capture from './Capture.png';
import { Outlet, NavLink } from 'react-router-dom'
const Navbar = ()=>{
    return (
        <nav>
            <div class="d-flex justify-content-center">
                <img src={Capture} alt="mia foto" class="my-photo my-3" />
            </div>
            <ul>
                <li><NavLink end to="/" className="btn btn-dark">Home</NavLink></li>
                <li><NavLink end to="/cv" className="btn btn-dark">Curriculum vitae</NavLink></li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar