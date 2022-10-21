import './style.css';

interface Props {
    text: string,
    handleClick: () => void
}

const Button = ({text, handleClick}: Props) => {
    return(
        <button className="button" onClick={handleClick}>{text}</button>
    )
};

export default Button;