
interface Props {
    textContent: string,
    isBold?: boolean,
}

const Text = ({textContent, isBold}: Props) => {
    const getStyle = (): string => {
        return `text ${isBold ? 'text--bold' : ''}`;
    }

    return(
        <p className={getStyle()}>{textContent}</p>
    )
}

export default Text;