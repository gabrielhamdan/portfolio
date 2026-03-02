import { Outlet } from "react-router";
import "./Home.css"
import NavButton from "../../components/Button/NavButton";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import IconLink from "../../components/IconLink/IconLink";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import Greetings from "../../components/Greetings/Greetings";
import { useLanguage } from "../../contexts/LanguageContext";
import { Localization } from "../../assets/localization";

export default function Home() {
    const { language } = useLanguage();

    return (
        <>
            <main className="main-home">
                <aside className="left">
                    <LanguageSelector />

                    <Greetings />

                    <div className="container contact-container">
                        <IconLink link="https://github.com/gabrielhamdan" icon={faGithub} title="GitHub" />
                        <IconLink link="https://www.linkedin.com/in/gabriel-hamdan" icon={faLinkedinIn} title="LinkedIn" />
                        <IconLink link="mailto:gabriel_hamdan@hotmail.com" icon={faEnvelope} title="email" />
                    </div>
                </aside>

                <div className="divider" />

                <aside className="right">
                    <nav className="container navbar">
                        <NavButton to="about" text={Localization[language].about} />
                        <NavButton to="projects" text={Localization[language].projects} />
                    </nav>

                    <div className="content">
                        <Outlet />
                    </div>
                </aside>
            </main>
        </>
    );
}