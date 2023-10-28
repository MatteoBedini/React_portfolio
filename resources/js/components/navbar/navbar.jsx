import './style.css';
import Capture from './Capture.png';
const Navbar = ()=>{
    return (
        <nav>
            <div class="d-flex justify-content-center">
                <img src={Capture} alt="mia foto" class="my-photo my-3" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar