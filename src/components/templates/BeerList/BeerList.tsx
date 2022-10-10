import './style.css';
// COMPONENTS
import BeerGrid from '../../organisms/BeerGrid/BeerGrid';
import PaginationBar from '../../molecules/PaginationBar/PaginationBar';

const BeerList = () => {
    return(
        <div className="beerList fixed-full-height">
            <BeerGrid />
            <PaginationBar />
        </div>
    )
}

export default BeerList;