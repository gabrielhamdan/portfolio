import "./Button.css"

interface Props {
    text: string,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    selected?: boolean | false
}

export default function Button({ text, onClick, selected }: Props) {
    return (
        <div onClick={onClick} className={`btn ${selected ? "selected" : ""}`} >
            {text}
        </div>
    );
}