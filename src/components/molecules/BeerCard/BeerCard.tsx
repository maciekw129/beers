import './style.css';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

interface Props {
    name: string,
    image: string,
    tagline: string,
    id: number
}

const BeerCard = ({name, image, tagline, id}: Props) => {
    const navigate = useNavigate();

    return(
        <div className="beerCard">
            <div className="beerCard__left">
                <div>
                    <Text 
                        textContent={name}
                        isHeader
                    />
                    <Text 
                        textContent={tagline}
                    />
                </div>
                <Button 
                    text="details"
                    handleClick={() => navigate(`/beer-list/beer/${id}`)}
                />
            </div>
            <Image
                image={image}
                alt="Beer image"
            />
        </div>
    )
};

export default BeerCard;