import './style.css';
import Capture from './Capture.png';
import { Outlet, NavLink } from 'react-router-dom'

/* button=getElementByClassName('btn-cus') */

/* button.addEventListener('click', ()=>{
    button.classList.toggle('active')
}) */

const Navbar = ()=>{
    return (
        <nav>
            <div class="d-flex justify-content-center">
                <img src={Capture} alt="mia foto" class="my-photo my-3" />
            </div>
            <ul className="d-flex flex-column align-items-center">
                <NavLink end to="/" className="text-decoration-none navlink-cus btn-cus " ><li className="text-center">Home</li></NavLink>
                <NavLink end to="/cv" className="text-decoration-none navlink-cus btn-cus "><li className="text-center ">Chi sono</li></NavLink>
               <NavLink end to="/contact" className="text-decoration-none navlink-cus btn-cus"> <li className=" text-center">Contatti</li></NavLink>
            </ul>
        </nav>
    );
}
export default Navbar

