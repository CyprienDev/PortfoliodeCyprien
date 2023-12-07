import AboutMentionsBio from '../components/mentions_legales/AboutMentionsLegales';
import { AboutMentionsProvider } from '../context/AboutMentionsContext';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <AboutMentionsProvider>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMentionsBio />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >
            </motion.div>
        </AboutMentionsProvider>
    );
};

export default About;
