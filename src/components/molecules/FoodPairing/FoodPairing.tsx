import './style.css';
import Text from '../../atoms/Text/Text';

interface Props {
    food: string[]
}

const FoodPairing = ({ food }: Props) => {
    return(
        <div className="food-pairing">
            <h2 className="food-pairing__title">Well pairing with:</h2>
            {food.map((dish, index) => {
                return <Text textContent={dish} key={index} />
            })}
        </div>
    )
};

export default FoodPairing;