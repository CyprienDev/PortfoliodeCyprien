import { useState, createContext } from 'react';
import { aboutMentionsData } from '../data/aboutMentionsData';

const AboutMentionsContext = createContext();

export const AboutMentionsProvider = ({ children }) => {
    const [aboutMentions, setAboutMentions] = useState(aboutMentionsData);

    return (
        <AboutMentionsContext.Provider
            value={{
                aboutMentions,
                setAboutMentions
            }}
        >
            {children}
        </AboutMentionsContext.Provider>
    );
};

export default AboutMentionsContext;
