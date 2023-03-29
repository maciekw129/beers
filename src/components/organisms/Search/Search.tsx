import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearState } from '../../../app/slices/search';
// COMPONENTS
import SearchInput from '../../molecules/SearchInput/SearchInput';
import SearchResult from '../../molecules/SearchResult/SearchResult';
import { RootState } from '../../../app/store';

const Search = () => {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state: RootState) => state.search.text);

    useEffect(() => {
       return () => {
        dispatch(clearState());
       }
    }, [])

    return(
        <div className="search">
            <SearchInput/>
            {text && <SearchResult />}
        </div>
    )
};

export default Search;