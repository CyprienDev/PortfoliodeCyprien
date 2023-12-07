import { useState, createContext } from 'react';
import {aboutMeInEntrepriseData} from "../data/aboutMeInEntrepriseData";

const AboutMeInEntrepriseContext = createContext();

export const AboutMeInEntrepriseProvider = ({ children }) => {
    const [aboutMeInEntreprise, setAboutMeInEntreprise] = useState(aboutMeInEntrepriseData);
    return (
        <AboutMeInEntrepriseContext.Provider
            value={{
                aboutMeInEntreprise,
                setAboutMeInEntreprise
            }}
        >
            {children}
        </AboutMeInEntrepriseContext.Provider>
    );
};

export default AboutMeInEntrepriseContext;
