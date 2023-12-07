import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutCompetencesData';

const AboutCompetencesContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutCompetences, setAboutMe] = useState(aboutMeData);

	return (
		<AboutCompetencesContext.Provider
			value={{
				aboutCompetences,
				setAboutMe
			}}
		>
			{children}
		</AboutCompetencesContext.Provider>
	);
};

export default AboutCompetencesContext;
