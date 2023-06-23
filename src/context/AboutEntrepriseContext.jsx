import { useState, createContext } from 'react';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import {aboutEntrepriseData} from "../data/aboutEntrepriseData";

const AboutEntrepriseContext = createContext();

export const AboutEntrepriseProvider = ({ children }) => {
    const [aboutEntreprise, setAboutEntreprise] = useState(aboutEntrepriseData);

    const clientsHeading = clientsPageHeading;

    const [clientsData, setClientsData] = useState(clientsDataJson);

    return (
        <AboutEntrepriseContext.Provider
            value={{
                aboutEntreprise,
                setAboutEntreprise,
                clientsHeading,
                clientsData,
                setClientsData,
            }}
        >
            {children}
        </AboutEntrepriseContext.Provider>
    );
};

export default AboutEntrepriseContext;
