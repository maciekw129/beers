import './style.css';

interface Props {
    text: string
}

const Button = ({text}: Props) => {
    return(
        <button className="button">{text}</button>
    )
};

export default Button;