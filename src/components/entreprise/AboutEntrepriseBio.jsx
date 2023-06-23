import { useContext } from 'react';
import AboutEntrepriseContext from "../../context/AboutEntrepriseContext";

const AboutEntrepriseBio = () => {
    const { aboutEntreprise } = useContext(AboutEntrepriseContext);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">

            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutEntreprise.map((bio) => (
                    <p
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                        key={bio.id}
                    >
                        {bio.bio}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default AboutEntrepriseBio;
