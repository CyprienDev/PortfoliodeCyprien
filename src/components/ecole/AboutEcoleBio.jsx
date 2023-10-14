import { useContext } from 'react';
import AboutEcoleContext from "../../context/AboutEcoleContext";

const AboutEcoleBio = () => {
	const { aboutEcole } = useContext(AboutEcoleContext);

	return (
		<div>
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{aboutEcole.EcoleHeader.title}
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{aboutEcole.EcoleImages.map((project) => {
					return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<img
								src={project.img}
								className="rounded-xl shadow-lg sm:shadow-none"
								alt={project.title}
								key={project.id}
							/>
						</div>
					);
				})}
			</div>

			<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
					{/* Single project client details */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{aboutEcole.EcoleInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{aboutEcole.EcoleInfo.CompanyInfo.map(
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
					{/* Single project social sharing */}
					<div>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{aboutEcole.EcoleInfo.SocialSharingHeading}
						</p>
						<div className="flex items-center gap-3 mt-5">
							{aboutEcole.EcoleInfo.SocialSharing.map(
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
				{/*  Single project right section */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutEcole.EcoleInfo.ProjectDetailsHeading}
					</p>
					{aboutEcole.EcoleInfo.ProjectDetails.map((details) => {
						return (
							<p
								key={details.id}
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{details.details}
								<img src={details.img} alt={details.details}/>
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AboutEcoleBio;
