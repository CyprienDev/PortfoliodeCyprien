
import { useContext } from 'react';
import AboutMentionsContext from '../../context/AboutMentionsContext';


const AboutMeBio = () => {
    const { aboutMentions } = useContext(AboutMentionsContext);

    return (
        <div>
            <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
                <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {aboutMentions.aboutMentionsInfo.TitreMentions}
                    </p>
                    {aboutMentions.aboutMentionsInfo.LoiMentions.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {aboutMentions.aboutMentionsInfo.EditionsMentions}
                    </p>
                    {aboutMentions.aboutMentionsInfo.EditionstexteMentions.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {aboutMentions.aboutMentionsInfo.HébergementMentions}
                    </p>
                    {aboutMentions.aboutMentionsInfo.HébergementtexteMentions.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {aboutMentions.aboutMentionsInfo.DirecteurMentions}
                    </p>
                    {aboutMentions.aboutMentionsInfo.DirecteurtexteMentions.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                    <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {aboutMentions.aboutMentionsInfo.ContacterMentions}
                    </p>
                    {aboutMentions.aboutMentionsInfo.ContactertexteMentions.map((details) => {
                        return (
                            <p
                                key={details.id}
                                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                            >
                                {details.details}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutMeBio;
