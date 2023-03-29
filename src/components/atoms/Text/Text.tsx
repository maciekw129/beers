import './style.css';
interface Props {
    isHeader?: boolean,
    textContent: string,
    isBold?: boolean,
    label?: string,
    isError?: boolean
}

const Text = ({textContent, isBold, isHeader, label, isError}: Props) => {
    const getStyle = (): string => {
        return `text ${isBold ? 'text--bold' : ''} ${isError && 'text--error'}`;
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