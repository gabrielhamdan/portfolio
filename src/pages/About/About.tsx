import { useLanguage } from "../../contexts/LanguageContext";
import "./About.css";
import github from "../../services/github";
import { useEffect, useState } from "react";
import { Localization } from "../../assets/localization";

export default function About() {
    const { language } = useLanguage();

    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await github.get("/users/gabrielhamdan");

                setImage(response.data.avatar_url);
            } catch (e) {
                console.error(e);
            }
        }

        fetchImage();
    }, []);

    return (
        <div className="about-container">
            <div className="container portrait-container">
                <img className='portrait' src={image} alt='Gabriel Hamdan' />
            </div>

            {
                Localization[language].bio.map((p, index) => (
                    <p key={index}>{p}</p>
                ))
            }
        </div>
    );
}