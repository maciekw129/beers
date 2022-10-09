import './style.css';
// COMPONENTS
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';

const Search = () => {
    return(
        <div className="search">
            <Text
                textContent="Search for any beer!"
                isHeader
            />
            <div className="search__input">
                <Input 
                    placeholder="Beer"
                    type="text"
                />
                <Button 
                    text="Search"
                />
            </div>
        </div>
    )
};

export default Search;