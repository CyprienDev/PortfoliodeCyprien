import { useState, createContext } from 'react';

import {aboutEcoleData} from "../data/aboutEcoleData";

const AboutEcoleContext = createContext();

export const AboutEcoleProvider = ({ children }) => {
    const [aboutEcole, setAboutEcole] = useState(aboutEcoleData);



    return (
        <AboutEcoleContext.Provider
            value={{
                aboutEcole,
                setAboutEcole,
            }}
        >
            {children}
        </AboutEcoleContext.Provider>
    );
};

export default AboutEcoleContext;
