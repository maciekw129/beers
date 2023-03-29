import './style.css';

interface Props {
    text: string,
    handleClick?: () => void
    isSubmit?: boolean
}

const Button = ({text, handleClick, isSubmit}: Props) => {
    return(
        <button 
            className="button" 
            type={isSubmit ? 'submit' : 'button'} 
            onClick={handleClick}
        >{text}</button>
    )
};

export default Button;