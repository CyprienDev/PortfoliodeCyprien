// Import images
import Image1 from '../images/service-filine.png';
import Image2 from '../images/panel-filine.png';
import Image3 from '../images/virements-filine.png';
import ImageCyber from '../images/cyberlib_accueil.png';

export const filineProjectData = {
    ProjectHeaderFiline: {
        title: 'Projet Site Web / Web App Filine',
        publishDate: 'Novembre, 2023',
        tags: 'React / Spring Boot',
    },
    ProjectImagesFiline: [
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
    ProjectInfoFiline: {
        ClientHeading: 'Client :',
        CompanyInfo: [
            {
                id: 1,
                title: 'Nom',
                details: 'Filine',
            },
            {
                id: 2,
                title: 'Services',
                details: 'Banque en ligne',
            }
        ],
        Technologies: [
            {
                title: 'Technologies Utilisées :',
                techs: [
                    'React',
                    'Tailwind-CSS',
                    'Spring-Boot',
                    'Axios',
                    'SQlite'
                ],
            },
        ],
        ProjectDetailsHeading: 'Objectifs du Projet :',
        ProjectDetails: [
            {
                id: 1,
                details:
                    'Le projet de la Banque Filine pour le BTS visait à développer une application bancaire complète, démontrant une maîtrise des concepts de développement web, des bases de données et de la sécurité des données. L\'objectif était de créer une interface utilisateur conviviale, permettant la création de comptes, la sélection d\'agences et de gestionnaires, ainsi que l\'émission de différentes cartes bancaires. En résumé, le projet combinait des compétences techniques et créatives pour réaliser une application fonctionnelle et sécurisée.',
            },
        ],
        ProjectDifficultyHeading: 'Difficultés lors du Projet :',
        ProjectDifficulty: [
            {
                id: 1,
                detailsdifficulty:
                    'La Banque Filine, projet de BTS, s\'est confrontée à des défis tels que l\'intégration complexe d\'API, la gestion de la conformité réglementaire et l\'assurance d\'une expérience utilisateur optimale. Ces obstacles ont mis en lumière l\'importance de la sécurité des données et ont nécessité une approche innovante pour résoudre des problèmes spécifiques du secteur financier.',
            },
        ]
    },
    RelatedProject: {
        title: 'Projets Réalisés',
        Projects: [
            {
                id: 1,
                title: 'Projet Site Web CyberLibrary',
                img: ImageCyber,
            },
        ],
    },
};
