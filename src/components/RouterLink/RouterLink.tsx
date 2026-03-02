import type { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
    to: string;
    children: ReactNode;
}

export default function RouterLink ({to, children}: Props) {
    return (
        <Link to={to} replace>
            {children}
        </Link>
    )
}