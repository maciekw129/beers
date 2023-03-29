import './style.css';
import { RootState } from '../../../app/store';
import { useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import Text from '../../atoms/Text/Text';

const SearchResult = () => {
    const navigate = useNavigate();
    const { beers, errorMessage } = useAppSelector((state: RootState) => state.search);

    return(
        <ul className="search-result">
            {errorMessage 
            ? <li className="search-result__empty">{ errorMessage }</li>
            :beers!.map(beer => {
                return (
                <li 
                    className="search-result__item" 
                    key={beer.id} 
                    onClick={() => navigate(`/beer-list/beer/${beer.id}`)}>
                    <Text
                        textContent={beer.name + ' - ' + beer.tagline}
                        isBold
                    ></Text>
                </li>
                ) 
            })}
        </ul>
    )
};

export default SearchResult;