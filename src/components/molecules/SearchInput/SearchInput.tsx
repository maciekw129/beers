import './style.css';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchBeers, setText, clearState } from '../../../app/slices/search';
import { RootState } from '../../../app/store';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import LoadingWheel from '../../atoms/LoadingWheel/LoadingWheel';

const SearchInput = () => {
    const dispatch = useAppDispatch();
    const { isLoading, text } = useAppSelector((state: RootState) => state.search);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    const navigate = useNavigate();

    useEffect(() => {
        return(() => {
            clearTimeout(timeoutId);
        })
    }, [])

    const handleChange = (text: string) => {
        if(timeoutId) clearTimeout(timeoutId); 
        dispatch(setText(text));
        if(text) {
            const timeout = setTimeout(() => {
                dispatch(fetchBeers(text));
            }, 500);
            setTimeoutId(timeout);
        } else {
            dispatch(clearState());
        }
    }

    const handleSearch = () => {
        navigate(`/beer-list/1/${text}`);
    }

    return(
        <form className="search-input" onSubmit={handleSearch}>
            <Text
                textContent="Search for any beer!"
                isHeader
            />
            <div className="search-input__input">
                <Input
                    isRequired 
                    placeholder="Beer"
                    type="text"
                    change={handleChange}
                />
                <Button 
                    isSubmit
                    text="Search"
                />
                {isLoading && <div className="search-input__loading-wrapper"><LoadingWheel /></div>}
            </div>
        </form>
    )
};

export default SearchInput;