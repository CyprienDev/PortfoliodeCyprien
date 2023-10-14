import AboutMeInEntrepriseBio from '../components/entreprise/AboutMeInEntreprise';
import { AboutMeInEntrepriseProvider } from '../context/AboutMeInEntrepriseContext';
import { motion } from 'framer-motion';

const MeInEntreprise = () => {
    return (
        <AboutMeInEntrepriseProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeInEntrepriseBio />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >

            </motion.div>
        </AboutMeInEntrepriseProvider>
    );
};

export default MeInEntreprise;
