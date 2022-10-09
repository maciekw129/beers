import './style.css';
interface Props {
    children: React.ReactNode
}

const Navigation = ({children}: Props) => {
    return(
        <nav className="navigation">
            {children}
        </nav>
    )
}

export default Navigation;