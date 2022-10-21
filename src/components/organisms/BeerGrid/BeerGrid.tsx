import './style.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import type { RootState } from '../../../app/store';
import { changePage } from '../../../app/slices/beers';
import { useParams } from 'react-router-dom';
// COMPONENTS
import BeerCard from '../../molecules/BeerCard/BeerCard';
import Text from '../../atoms/Text/Text';

const BeerGrid = () => {
    const dispatch = useAppDispatch();
    const beers = useAppSelector((state: RootState) => state.beers.beers);
    const params = useParams();

    useEffect(() => {
        if(params.page) {
            dispatch(changePage(parseInt(params.page)));
        }
    }, [params.page])

    if(beers.length) {
        return(
            <div className="beerGrid__grid">
                {beers.map(beer => {
                    return <BeerCard
                                key={beer.id}
                                name={beer.name}
                                image={beer.image_url}
                                tagline={beer.tagline}
                                id={beer.id}
                            />
                })}
            </div>
        )
    } else {
        return(
            <div className="beerGrid__empty">
                <Text
                    textContent="Sorry, this page doesn't exsist."
                    isBold
                ></Text>
            </div>
        )
    }
};

export default BeerGrid;