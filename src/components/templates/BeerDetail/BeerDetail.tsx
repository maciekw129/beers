import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import requests from '../../../helpers/requests';
import Beer from '../../../types/Beer';
// COMPONENTS
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import FoodPairing from '../../molecules/FoodPairing/FoodPairing';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';

const BeerDetail = () => {
    const [beer, setBeer] = useState<Beer>();
    const params = useParams();

    useEffect(() => {
        if(params.id) {
            requests.getBeerById(parseInt(params.id))
            .then(response => {
                console.log(response)
                setBeer(response.data[0]);
            })}
    }, [])

    if(beer) {
        return(
            <div className="beerDetail fixed-full-height">
                <Breadcrumb />
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
                        {beer.ibu && <Text
                            label="IBU: "
                            textContent={beer.ibu.toString()}
                        />}
                        {beer.abv && <Text
                            label="ABV: "
                            textContent={beer.abv.toString() + '%'}
                        />}
                        {beer.ebc && <Text
                            label="EBC: "
                            textContent={beer.ebc.toString()}
                        />}<br/>
                        <FoodPairing 
                            food={beer.food_pairing}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
};

export default BeerDetail;