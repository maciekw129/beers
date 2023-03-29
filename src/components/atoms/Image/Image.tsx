import './style.css';

interface Props {
    image: string,
    alt: string,
    click?: () => void
}

const Image = ({image, alt, click}: Props) => {

    const getStyle = () => {
        return `image ${click ? 'image--clickable' : ''}`
    }

    return(
        <div className="image__container">
            <img className={getStyle()} src={image} alt={alt} onClick={click} />
        </div>
    )
};

export default Image;