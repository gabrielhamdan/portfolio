import { Languages } from "../../assets/localization";
import { useLanguage } from "../../contexts/LanguageContext";
import Button from "../Button/Button";
import "./LanguageSelector.css"

export default function LanguageSelector() {
    const { toggleLanguage, language } = useLanguage();
    
    return (
        <div className="container language-container">
            {
                Languages.map((lang, index) => (
                    <Button key={index} selected={language === lang} onClick={() => toggleLanguage(lang)} text={lang} />
                ))
            }
        </div>
    );
}