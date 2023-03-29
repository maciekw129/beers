import './style.css';
import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
    placeholder: string,
    type: 'text' | 'password',
    change: (text: string) => void,
    isRequired: boolean
}

const Input = ({placeholder, type, change, isRequired}: Props) => {
    const [style, setStyle] = useState<'input__placeholder--desactive' | 'input__placeholder--active'>('input__placeholder');
    const [value, setValue] = useState('');
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        if(!initial) {
            !!value ? setStyle('input__placeholder--active')
            : setStyle('input__placeholder--desactive');
            change(value);
        } else {
            setInitial(false);
        }
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value)
    }

    return(
        <div className="input__container">
            <input 
                className="input"
                type={type}
                value={value}
                onChange={handleChange}
                required={isRequired}
            />
            <span className={'input__placeholder ' + style}>{placeholder}</span>
        </div>
    )
};

export default Input;