// Import images
import Image1 from '../images/livres_cyberlib.png';
import Image2 from '../images/cyberlib_accueil.png';
import Image3 from '../images/recherche_cyberlib.png';
import ImageFiline from '../images/filine-accueil.png';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Projet Site Web CyberLibrary',
		publishDate: '21 Juin, 2023',
		tags: 'Bootstrap / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Client :',
		CompanyInfo: [
			{
				id: 1,
				title: 'Nom',
				details: 'CyberLibrary',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Bibliothéque en ligne',
			}
		],
		Technologies: [
			{
				title: 'Technologies Utilisées :',
				techs: [
					'CSS',
					'SCSS',
					'HTML',
					'EJS',
					'JavaScript'
				],
			},
		],
		ProjectDetailsHeading: 'Objectifs du Projet :',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Le but de ce projet a été de créer un site web de bibliothéque en ligne ou l\'on peut réserver des livres a distance disponible sur plusieurs sites dont Fontainbleau, Versailles, Paris.',
			},
		],
		ProjectDifficultyHeading: 'Difficultés lors du Projet :',
		ProjectDifficulty: [
			{
				id: 1,
				detailsdifficulty:
					'Les différentes diffucltés rencontré lors de ce projet on été notamment les delais laissé ainsi que notre niveau de connaisance.',
			},
		]
	},
	RelatedProject: {
		title: 'Projets Réalisés',
		Projects: [
			{
				id: 2,
				title: 'Projet Site Web / Web App Filine',
				img: ImageFiline,
			},
		],
	},
};
