
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';


const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div>
			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{aboutMe.aboutMeInfo.MesdiplomesHeading}
						</p>
						<ul className="leading-loose">
							{aboutMe.aboutMeInfo.diplomesList.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-ternary-dark dark:text-ternary-light"
											key={info.id}
										>
											<p>
												{info.details}
											</p>
										</li>
									);
								}
							)}
						</ul>
					</div>
					{/* Single project technologies */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{aboutMe.aboutMeInfo.Technologies[0].title}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{aboutMe.aboutMeInfo.Technologies[0].techs.join(
								', '
							)}
						</p>
					</div>
					{/* Single project objectives */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{aboutMe.aboutMeInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{aboutMe.aboutMeInfo.ObjectivesDetails}
						</p>
					</div>
					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{aboutMe.aboutMeInfo.SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{aboutMe.aboutMeInfo.SocialSharing.map(
								(social) => {
									return (
										<a
											key={social.id}
											href={social.url}
											target="__blank"
											aria-label="Share Project"
											className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
										>
                                            <span className="text-lg lg:text-2xl">
                                                {social.icon}
                                            </span>
										</a>
									);
								}
							)}
						</div>
					</div>
				</div>
					{/*  A propos de Moi */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutMe.aboutMeInfo.AproposdeMoiHeading}
					</p>
					{aboutMe.aboutMeInfo.AproposdeMoiDetails.map((details) => {
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
						{aboutMe.aboutMeInfo.MesExperiencesHeading}
					</p>
					{aboutMe.aboutMeInfo.ExperienceDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								<div>
									{details.date}
									<div>
										{details.entreprise}
										<div>
											{details.intitule}
											<div>
												<li>
													{details.mission1}
												</li>
												<li>
													{details.mission2}
												</li>
												<li>
													{details.mission3}
												</li>
											</div>
										</div>
									</div>
								</div>

							</p>
						);
					})}
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutMe.aboutMeInfo.MesFormationsHeading}
					</p>
					{aboutMe.aboutMeInfo.FormationsDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								<div>
									{details.date}
									<div>
										{details.ecole}
										<div>
											{details.intitule}
											<div>
												<li>
													{details.presentation}
												</li>
											</div>
										</div>
									</div>
								</div>

							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AboutMeBio;
