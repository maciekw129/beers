
interface Props {
    isHeader?: boolean,
    textContent: string,
    isBold?: boolean,
}

const Text = ({textContent, isBold, isHeader}: Props) => {
    const getStyle = (): string => {
        return `text ${isBold ? 'text--bold' : ''}`;
    }

    return(
        <>
        {isHeader 
        ? <h1 className={getStyle()}>{textContent}</h1>
        : <p className={getStyle()}>{textContent}</p>}
        </>
    )
}

export default Text;