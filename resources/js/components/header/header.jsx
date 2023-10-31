
import './style.css';
const Header = ({title,classe,id}) => {
    
    return (
        <header className={`App-header mt-4 ${classe}`} id={id}>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;