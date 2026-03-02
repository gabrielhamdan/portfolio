import { useLanguage } from "../../contexts/LanguageContext";
import StackTag from "../StackTag/StackTag";
import "./ProjectCard.css"

interface Props {
    link: string,
    title: string,
    description?: string,
    stack: string[]
}

export default function ProjectCard({ link, title, description, stack }: Props) {
    const { language } = useLanguage();

    return (
        <a href={link} target="_blank">
            <div className="project-card-container">
                <div className="project-card-text-container">
                    <h3>{title}</h3>
                    {language === "en" && <p>{description}</p>}
                </div>

                <div className="tag-container">
                    {
                        stack?.map((tag, key) => 
                            <StackTag key={key} title={tag} />
                        )
                    }
                </div>
            </div>
        </a>
    );
}