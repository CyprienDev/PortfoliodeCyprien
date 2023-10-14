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
