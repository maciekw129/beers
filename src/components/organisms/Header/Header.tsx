import './style.css';
import logoIcon from '../../../images/logo-icon.png';
// COMPONENTS
import Navigation from '../../molecules/Navigation/Navigation';
import { Link } from 'react-router-dom';
import Image from '../../atoms/Image/Image';

const Header = () => {
    return(
        <header className="header">
            <Image 
                image={logoIcon}
                alt="Logo"
            />
            <Navigation>
                <Link 
                    to="/"
                >Home</Link>
                <Link 
                    to="/beer-list"
                >Beer list</Link>
            </Navigation>
        </header>
    )
}

export default Header;