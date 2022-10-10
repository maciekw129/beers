import './style.css';
import { useAppSelector } from '../../../app/hooks';
import type { RootState } from '../../../app/store';
import { Link } from 'react-router-dom';
//COMPONENTS
import Text from '../../atoms/Text/Text';

const PaginationBar = () => {
    const { page, isNextPage } = useAppSelector((state: RootState) => state.beers);

    const nextPage = (): string => {
        window.scroll(0, 0);
        return `/beer-list/${page + 1}`;
    }

    const previousPage = (): string => {
        window.scroll(0, 0);
        return `/beer-list/${page - 1}`;
    }

    return(
        <div className="paginationBar">
            {page > 1 
            ? <Link 
                className="styled-link"
                to={previousPage()}
            >Previous</Link>
            : <p> </p>
            }
            
            <Text 
                textContent={page.toString()}
            />
            {isNextPage
            ? <Link 
                className="styled-link"
                to={nextPage()}
            >Next</Link>
            : <p> </p>
            }
            
        </div>
    )
};

export default PaginationBar;