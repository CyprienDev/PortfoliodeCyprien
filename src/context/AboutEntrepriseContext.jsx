import { useState, createContext } from 'react';
import {aboutEntrepriseData} from "../data/aboutEntrepriseData";

const AboutEntrepriseContext = createContext();

export const AboutEntrepriseProvider = ({ children }) => {
    const [aboutEntreprise, setAboutEntreprise] = useState(aboutEntrepriseData);


    return (
        <AboutEntrepriseContext.Provider
            value={{
                aboutEntreprise,
                setAboutEntreprise
            }}
        >
            {children}
        </AboutEntrepriseContext.Provider>
    );
};

export default AboutEntrepriseContext;
