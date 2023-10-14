import Competences from '../components/competences/Competences';
import AboutCounter from '../components/competences/AboutCounter';
import CompetencesLogo from '../components/competences/CompetencesLogo';
import { AboutMeProvider } from '../context/CompetencesContext';
import { motion } from 'framer-motion';

const aboutCompetences = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<Competences />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
				<AboutCounter />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<CompetencesLogo />
			</motion.div>
		</AboutMeProvider>
	);
};

export default aboutCompetences;
