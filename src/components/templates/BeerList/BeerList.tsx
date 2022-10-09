import './style.css';
// COMPONENTS
import BeerGrid from '../../organisms/BeerGrid/BeerGrid';

const BeerList = () => {
    return(
        <div className="beerList fixed-full-height">
            <BeerGrid />
        </div>
    )
}

export default BeerList;