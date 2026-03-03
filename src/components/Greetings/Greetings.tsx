import { useLanguage } from "../../contexts/LanguageContext";
import "./Grettings.css";

export default function Greetings() {
    const { language } = useLanguage();

    return (
        <>
            <div className="greetings-container">
                {
                    language === "pt" ?
                        <>
                            <h3>olá,</h3>
                            <h1>sou <span className="bold">Gabriel Hamdan</span></h1>
                            <h2>desenvolvedor</h2>
                        </>

                        : language === "en" ?
                            <>
                                <h3>hello,</h3>
                                <h1>I'm <span className="bold">Gabriel Hamdan</span></h1>
                                <h2>developer</h2>
                            </>

                            :
                            <>
                                <h3>salut,</h3>
                                <h1>je suis <span className="bold">Gabriel Hamdan</span></h1>
                                <h2>développeur</h2>
                            </>
                }
            </div>
        </>
    );
}