import AboutEcoleBio from '../components/ecole/AboutEcoleBio';
import { AboutEcoleProvider } from '../context/AboutEcoleContext';
import { motion } from 'framer-motion';

const Ecole = () => {
    return (
        <AboutEcoleProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutEcoleBio />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >

            </motion.div>
        </AboutEcoleProvider>
    );
};

export default Ecole;
