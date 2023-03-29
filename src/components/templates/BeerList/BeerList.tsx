import './style.css';
// COMPONENTS
import BeerGrid from '../../organisms/BeerGrid/BeerGrid';
import PaginationBar from '../../molecules/PaginationBar/PaginationBar';
import Filters from '../../molecules/Filters/Filters';

const BeerList = () => {
    return(
        <div className="beerList fixed-full-height">
            <Filters />
            <BeerGrid />
            <PaginationBar />
        </div>
    )
}

export default BeerList;