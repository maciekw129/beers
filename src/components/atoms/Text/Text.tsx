import './style.css';
interface Props {
    isHeader?: boolean,
    textContent: string,
    isBold?: boolean,
    label?: string
}

const Text = ({textContent, isBold, isHeader, label}: Props) => {
    const getStyle = (): string => {
        return `text ${isBold ? 'text--bold' : ''}`;
    }

    return(
        <div className="text">
            {
            label && <p className="text__label">{label}</p>
            }
            {
            isHeader 
            ? <h1 className={getStyle()}>{textContent}</h1>
            : <p className={getStyle()}>{textContent}</p>
            }
        </div>
    )
}

export default Text;