import AboutEntrepriseBio from '../components/entreprise/AboutEntrepriseBio';
import { AboutEntrepriseProvider } from '../context/AboutEntrepriseContext';
import { motion } from 'framer-motion';

const Entreprise = () => {
    return (
        <AboutEntrepriseProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutEntrepriseBio />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >

            </motion.div>
        </AboutEntrepriseProvider>
    );
};

export default Entreprise;
