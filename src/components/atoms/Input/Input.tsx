import './style.css';

interface Props {
    placeholder: string,
    type: 'text' | 'password'
}

const Input = ({placeholder, type}: Props) => {
    return(
        <input 
            className="input"
            placeholder={placeholder}
            type={type}
        />
    )
};

export default Input;