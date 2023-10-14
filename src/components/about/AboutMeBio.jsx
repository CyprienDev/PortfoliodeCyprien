
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../css/main.css';
import safran  from "../../images/plane.png";
import chanel  from "../../images/perfume.png";
import labo  from "../../images/microscope.png";
import coop  from "../../images/cooperation.png";



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
					<VerticalTimeline

						className={"text-primary-dark dark:text-primary-light"}>

						<VerticalTimelineElement
							className="vertical-timeline-element--work text-primary-dark dark:text-primary-light"
							contentStyle={{ background: 'rgb(196, 230, 255)', color: '#000000' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246 / 0.5)' }}
							date="Septembre 2022 - Août 2024"
							icon={<img src={safran} alt="Safran" />}
						>


							<h3 className="vertical-timeline-element-title ">
								{'Safran Aircraft Engines'}
								<h4 className="vertical-timeline-element-subtitle">
									{'Apprentissage en tant que Développeur'}
									<p>
										<li>
											{'Réalisation d\'une WebApp afin de lire des fichiers et intérpreter des fichiers avec des formats spécifique. Réalisation en python en utilisant la librairie de Dash Plotly et DashBootstrap Components '}
										</li>
									</p>
								</h4>
							</h3>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(196, 230, 255)', color: '#000000' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246 / 0.5)' }}
							date="Novembre 2021 – Fevrier 2022"
							icon={<img src={chanel} alt="CHANEL" />}
						>


							<h3 className="vertical-timeline-element-title">
								{'CHANEL'}
								<h4 className="vertical-timeline-element-subtitle">
									{'PFMP Service IT Division Mode'}
									<p>
										<li>
											{'Chargé d\'un projet de création d\'une WebApp'}
										</li>
										<li>
											{'Création de UserStory'}
										</li>
										<li>
											{'Initiation à la RFID'}
										</li>
									</p>
								</h4>
							</h3>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(196, 230, 255)', color: '#000000' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246 / 0.5)' }}
							date="Mars 2021"
							icon={<img src={labo} alt="PILEJE" />}
						>


							<h3 className="vertical-timeline-element-title">
								{'Laboratoire PILEJE'}
								<h4 className="vertical-timeline-element-subtitle">
									{'PFMP Service Informatique'}
									<p>
										<li>
											{'Création d\'une ISO windows 10 descendue pour une configuration optimisée des postes'}
										</li>
										<li>
											{'Maintenance de postes pour diverses manipulations telles que la récupération de donnés et la créations de sauvegardes'}
										</li>
										<li>
											{'Modifications de droits et créations de droits dans l\'Active Directory'}
										</li>
									</p>
								</h4>
							</h3>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(196, 230, 255)', color: '#000000' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(59 130 246 / 0.5)' }}
							date="Janvier 2020"
								icon={<img src={coop} alt="Ligartis" />}
						>


							<h3 className="vertical-timeline-element-title">
								{'Ligartis'}
								<h4 className="vertical-timeline-element-subtitle">
									{'PFMP Service Informatique'}
									<p>
										<li>
											{'Présentation du fonctionnement des serveurs'}
										</li>
										<li>
											{'Initiation à l\'utilisation d\'un PC sous Windows Server'}
										</li>
										<li>
											{'Configuration de matériels pour préparation de commande (étiqueteuse, scanner industriel, logiciel de préparation de commande, lecteur code barre industriel)'}
										</li>
									</p>
								</h4>
							</h3>
						</VerticalTimelineElement>
					</VerticalTimeline>

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
