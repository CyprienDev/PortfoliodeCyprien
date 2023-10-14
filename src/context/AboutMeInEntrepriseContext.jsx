import { useState, createContext } from 'react';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import {aboutMeInEntrepriseData} from "../data/aboutMeInEntrepriseData";

const AboutMeInEntrepriseContext = createContext();

export const AboutMeInEntrepriseProvider = ({ children }) => {
    const [aboutMeInEntreprise, setAboutMeInEntreprise] = useState(aboutMeInEntrepriseData);

    const clientsHeading = clientsPageHeading;

    const [clientsData, setClientsData] = useState(clientsDataJson);

    return (
        <AboutMeInEntrepriseContext.Provider
            value={{
                aboutMeInEntreprise,
                setAboutMeInEntreprise,
                clientsHeading,
                clientsData,
                setClientsData,
            }}
        >
            {children}
        </AboutMeInEntrepriseContext.Provider>
    );
};

export default AboutMeInEntrepriseContext;
