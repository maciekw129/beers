import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import type { RootState } from '../../../app/store';
import { changePage } from '../../../app/slices/beers';
// COMPONENTS
import BeerCard from '../../molecules/BeerCard/BeerCard';

const BeerGrid = () => {
    const dispatch = useAppDispatch();
    const beers = useAppSelector((state: RootState) => state.beers.beers);

    useEffect(() => {
        dispatch(changePage(1));
    }, [])

    return(
        <div className="beerGrid">
            {beers.map(beer => {
                return <BeerCard
                            key={beer.id}
                            name={beer.name}
                            image={beer.image_url}
                            tagline={beer.tagline}
                        />
            })}
        </div>
    )
};

export default BeerGrid;