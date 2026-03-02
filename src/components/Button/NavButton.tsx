import { NavLink } from "react-router";
import "./Button.css"

interface Props {
    text: string,
    to: string
}

export default function NavButton({ text, to }: Props) {

    return (
        <NavLink to={to}
            className={({ isActive }) =>
                `btn ${isActive ? "selected" : ""}`
            }
        >
            {text}
        </NavLink>
    );
}