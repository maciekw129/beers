import './style.css';
import logoIcon from '../../../images/logo-icon.png';
// COMPONENTS
import Navigation from '../../molecules/Navigation/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../atoms/Image/Image';

const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="header">
            <Image 
                image={logoIcon}
                alt="Logo"
                click={() => navigate('/')}
            />
            <Navigation>
                <Link 
                    to="/"
                >Home</Link>
                <Link 
                    to="/beer-list/1"
                >Beer list</Link>
            </Navigation>
        </header>
    )
}

export default Header;