import ProjectGalleryFiline from '../components/projects/ProjectGalleryFiline';
import ProjectHeaderFiline from '../components/projects/ProjectHeaderFiline';
import ProjectInfoFiline from '../components/projects/ProjectInfoFiline';
import ProjectRelatedProjectsFiline from '../components/projects/ProjectReleatedFiline';
import { FilineProjectProvider } from '../context/FilineProjectContext';
import { motion } from 'framer-motion';

const ProjectFiline = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <FilineProjectProvider>
                <ProjectHeaderFiline />
                <ProjectGalleryFiline />
                <ProjectInfoFiline />
                <ProjectRelatedProjectsFiline />
            </FilineProjectProvider>
        </motion.div>
    );
};

export default ProjectFiline;
