import './style.css';
import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
    placeholder: string,
    type: 'text' | 'password'
}

const Input = ({placeholder, type}: Props) => {
    const [style, setStyle] = useState<'input__placeholder--desactive' | 'input__placeholder--active'>('input__placeholder');
    const [value, setValue] = useState('');
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        if(!initial) {
            !!value ? setStyle('input__placeholder--active')
            : setStyle('input__placeholder--desactive');
        } else {
            setInitial(false);
        }
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    }

    return(
        <div className="input__container">
            <input 
                className="input"
                type={type}
                value={value}
                onChange={handleChange}
            />
            <span className={'input__placeholder ' + style}>{placeholder}</span>
        </div>
    )
};

export default Input;