import { useState, createContext } from 'react';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import {aboutEcoleData} from "../data/aboutEcoleData";

const AboutEcoleContext = createContext();

export const AboutEcoleProvider = ({ children }) => {
    const [aboutEcole, setAboutEcole] = useState(aboutEcoleData);

    const clientsHeading = clientsPageHeading;

    const [clientsData, setClientsData] = useState(clientsDataJson);

    return (
        <AboutEcoleContext.Provider
            value={{
                aboutEcole,
                setAboutEcole,
                clientsHeading,
                clientsData,
                setClientsData,
            }}
        >
            {children}
        </AboutEcoleContext.Provider>
    );
};

export default AboutEcoleContext;
