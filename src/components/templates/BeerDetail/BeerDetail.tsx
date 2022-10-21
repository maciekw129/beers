import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../../../helpers/requests';
import Beer from '../../../types/Beer';
// COMPONENTS
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';

const BeerDetail = () => {
    const [beer, setBeer] = useState<Beer>();
    const params = useParams();

    useEffect(() => {
        if(params.id) {
            requests.getBeerById(parseInt(params.id))
            .then(response => {
                setBeer(response.data[0]);
            })}
    }, [])

    if(beer) {
        return(
            <div className="beerDetail fixed-full-height">
                <div className="beerDetail__content">
                    <Image
                        image={beer.image_url}
                        alt="Beer image"
                    />
                    <div>
                        <Text 
                            textContent={beer.name}
                            isHeader
                        />
                        <Text
                            textContent={beer.tagline}
                        /><br/>
                        <Text 
                            textContent={beer.description}
                        /><br/>
                        <Text
                            label="Yeast: " 
                            textContent={beer.ingredients.yeast}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
};

export default BeerDetail;