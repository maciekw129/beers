import './style.css';
import logoIcon from '../../../images/logo-icon.png';
// COMPONENTS
import Navigation from '../../molecules/Navigation/Navigation';
import Link from '../../atoms/Link/Link';
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
                    linkText="Home"
                    link="a"
                />
                <Link 
                    linkText="Beer list"
                    link="a"
                />
            </Navigation>
        </header>
    )
}

export default Header;