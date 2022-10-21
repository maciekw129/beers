import './style.css';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { fetchBeers } from '../../../app/slices/search';
import { setText } from '../../../app/slices/search';
// COMPONENTS
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';

const SearchInput = () => {
    const dispatch = useAppDispatch();
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

    useEffect(() => {
        return(() => {
            clearTimeout(timeoutId);
        })
    }, [])

    const handleChange = (text: string): void => {
        dispatch(setText(text));
        const timeout = setTimeout(() => {
            dispatch(fetchBeers(text));
        }, 1000);
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutId(timeout);
    }

    return(
        <div className="search-input">
            <Text
                textContent="Search for any beer!"
                isHeader
            />
            <div className="search-input__input">
                <Input 
                    placeholder="Beer"
                    type="text"
                    change={handleChange}
                />
                <Button 
                    text="Search"
                    handleClick={() => console.log('clicked')}
                />
            </div>
        </div>
    )
};

export default SearchInput;