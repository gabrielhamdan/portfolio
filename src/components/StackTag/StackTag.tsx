import "./StackTag.css";

interface Props {
    title: string
}

export default function StackTag({ title }: Props) {
    return (
        <div className="tag">{title}</div>
    );
}