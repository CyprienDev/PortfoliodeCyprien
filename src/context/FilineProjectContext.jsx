import { useState, createContext } from 'react';
import {filineProjectData as filineProjectDataJson} from '../data/filineProjectData';

const FilineProjectContext = createContext();

export const FilineProjectProvider = ({ children }) => {
    const [filineProjectData, setFilineProjectData] = useState(
        filineProjectDataJson
    );

    return (
        <FilineProjectContext.Provider
            value={{ filineProjectData, setFilineProjectData }}
        >
            {children}
        </FilineProjectContext.Provider>
    );
};

export default FilineProjectContext;
