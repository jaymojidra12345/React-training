import { createContext, useState, useContext } from "react";

// Create the context
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const LanguageTask = () => {
    const [language, setLanguage] = useState("en");
    const translations = {
        en: { welcome: "Welcome", about: "About Us" },
        es: { welcome: "Bienvenido", about: "Sobre Nosotros" },
    };

    const switchLanguage = (lang) => setLanguage(lang);
    return (
        <LanguageContext.Provider value={{ language, translations, switchLanguage }}>
            <LanguageApp />
        </LanguageContext.Provider>
    );
};

const LanguageApp = () => {
    const { language, translations, switchLanguage } = useLanguage();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <header>
                <button onClick={() => switchLanguage("en")}>English</button>
                <button onClick={() => switchLanguage("es")}>Español</button>
            </header>
            <main>
                <h1>{translations[language].welcome}</h1>
                <p>{translations[language].about}</p>
            </main>
        </div>
    );
};

export default LanguageTask