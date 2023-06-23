import { useContext } from 'react';
import AboutEcoleContext from "../../context/AboutEcoleContext";

const AboutEcoleBio = () => {
	const { aboutEcole } = useContext(AboutEcoleContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">

			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutEcole.map((bio) => (
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

export default AboutEcoleBio;
