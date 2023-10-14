import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutCompetencesData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutCompetencesContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutCompetences, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutCompetencesContext.Provider
			value={{
				aboutCompetences,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutCompetencesContext.Provider>
	);
};

export default AboutCompetencesContext;
