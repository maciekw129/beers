import './style.css';

interface Props {
    linkText: string,
    link: string
}

const Link = ({linkText, link}: Props) => {
    return(
        <a className="link" href={link}>{linkText}</a>
    )
}

export default Link;