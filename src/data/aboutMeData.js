import {FiGithub, FiLinkedin} from "react-icons/fi";

export const aboutMeData = {
	aboutMeInfo: {
		MesdiplomesHeading: 'Mes Diplômes',
		diplomesList: [
			{
				id: 1,
				details: '- Bac Professionnel SN option (RISC) mention européenne',
			},
		],
		AproposdeMoiHeading: 'À propos de Moi :',
		AproposdeMoiDetails: [
			{
				id: 1,
				details:
					'\n' +
					'Je m\'appelle Bourré Cyprien et j\'ai actuellement 19 ans. Étant passionné d\'informatique et plus précisément du développement logiciel, c\'est donc en toute logique que j\'ai décidé d\'effectuer un BTS SIO (SLAM) au sein de L\'UTEC en contrat d\'apprentissage pour le groupe Safran.'
			},
		],
		Technologies: [
			{
				title: 'Mes Compétences',
				techs: [
					'HTML',
					'CSS',
					'Python',
					'React',
					'Flask',
					'SQL',
				],
			},
		],
		MesExperiencesHeading: 'Mes Expériences :',
		ExperienceDetails: [
			{
				id: 1,
				date :
					'Septembre 2022',
				entreprise:
					'Safran Aircraft Engines',

				intitule:
					'Apprentissage en tant que Développeur',
				mission1:
					'',
				mission2:
					'',
				mission3:
					'',

			},
			{
				id: 2,
				date :
					'Novembre 2021 – Fevrier 2022',
				entreprise:
					'CHANEL',

				intitule:
					'PFMP Service IT Division Mode',
				mission1:
					'Chargé d\'un projet de création d\'une WebApp',
				mission2:
					'Création de UserStory',
				mission3:
					'Initiation à la RFID',

			},
			{
				id: 3,
				date :
					'Mars 2021',
				entreprise:
					'Laboratoire PILEJE',

				intitule:
					'PFMP Service Informatique',
				mission1:
					'Création d\'une ISO windows 10 descendue pour une configuration optimisée des postes',
				mission2:
					'Maintenance de postes pour diverses manipulations telles que la récupération de donnés et la créations de sauvegardes',
				mission3:
					'Modifications de droits et créations de droits dans l\'Active Directory',

			},
			{
				id: 4,
				date :
					'Janvier 2020',
				entreprise:
					'Ligartis',

				intitule:
					'PFMP Service Informatique',
				mission1:
					'Présentation du fonctionnement des serveurs',
				mission2:
					'Initiation à l\'utilisation d\'un PC sous Windows Server',
				mission3:
					'Configuration de matériels pour préparation de commande (étiqueteuse, scanner industriel, logiciel de préparation de commande, lecteur code barre industriel)',

			},
		],
		MesFormationsHeading: 'Mes Formations :',
		FormationsDetails: [
			{
				id: 1,
				date :
					'Septembre 2022 - Juin 2024',
				ecole:
					'CFA UTEC Avon - Fontainebleau',

				intitule:
					'BTS SIO option SLAM',
				presentation:
					'Formation en tant que Développeur informatique en apprentissage.',

			},
			{
				id: 2,
				date :
					'Septembre 2019 – Juin 2022',
				ecole:
					'Lycée Privé Saint-Aspais',

				intitule:
					'Bac Proffessionel SN option (RISC)',
				presentation:
					'Formation de trois ans afin d\'obtenir un Bac professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants.',

			},
		],
		SocialSharingHeading: 'Les Réseaux Sociaux',
		SocialSharing: [
			{
				id: 1,
				name: "Github",
				icon: <FiGithub />,
				url: 'https://github.com/CyprienDev',
			},
			{
				id: 2,
				name: "Linkedin",
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/cyprien-bourré-6512b3213/',
			},
		],
	},
};
