import './style.css';
// COMPONENTS
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';

interface Props {
    name: string,
    image: string,
    tagline: string
}

const BeerCard = ({name, image, tagline}: Props) => {
    return(
        <div className="beerCard">
            <div>
                <Text 
                    textContent={name}
                    isHeader
                />
                <Text 
                    textContent={tagline}
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