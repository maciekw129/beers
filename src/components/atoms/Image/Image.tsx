import './style.css';

interface Props {
    image: string,
    alt: string
}

const Image = ({image, alt}: Props) => {
    return(
        <div className="image__container">
            <img className="image" src={image} alt={alt} />
        </div>
    )
};

export default Image;