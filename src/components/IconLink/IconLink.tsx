import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import "./IconLink.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    link: string,
    icon: IconProp,
    title?: string | ""
}

export default function IconLink({ link, icon, title }: Props) {
    return (
        <div className="icon-link-container">
            <a className="icon-link" href={link} target="_blank" title={title}>
                <FontAwesomeIcon icon={icon} />
            </a>
        </div>
    )
}