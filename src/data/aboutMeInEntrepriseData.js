import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube} from "react-icons/fi";
import Image1 from "../images/m88_safran.jpg";
import Image2 from "../images/materiaux_safran.jpeg";
import Image3 from "../images/dev_safran.jpg";



export const aboutMeInEntrepriseData = {
    EntrepriseHeader: {
        title: 'Mon rôle et service chez Safran'
    },
    EntrepriseImages: [
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
    EntrepriseInfo: {
        ClientHeading: 'Safran',
        CompanyInfo: [
            {
                id: 2,
                title: 'Activités',
                details: "Moteurs d'Avions, Equipements aéronautiques, Avionique, Defense et sécurité, Service et support, Spatial, R&D",
            },
            {
                id: 3,
                title: 'Site',
                details: 'https://www.safran-group.com/fr',
            },
        ],
        ProjectDetailsHeading: 'Mon Travail au Sein de Safran :',
        ProjectDetails: [
            {
                id: 1,
                details:
                    '\n' +
                    'Je suis Cyprien Apprenti développeur chez Safran Aircraft Engines à Villaroche au sein du service de la division Matérieaux et Procédés, mon service est de réaliser différents scripts ou applications en fonction des différentes demande, cela peut aller d\'un simple script par exemple:(pour effectuer un tri de fichier), jusqu\'a l\'application qui permettra a més collegues de simplifier une tache\n' +
                    '\n',
            }
        ],
        ProjectDetailsHeadingService: 'Mon Service:',
        ProjectDetailsService: [
            {
                id: 1,
                detailsservice:
                    '\n' +
                    'Le Service dans lequel je suis s\'appele YQS3 est se trouve au sein de la division Matérieaux et Procédés. Au sein du service il y\'a trois pôles différents dont le pôle informatique auquel j\'appartien, le pôle statistiques, le pôle courbes. Le Service est composée  d\'une vigtaine de persones.'+
                    '\n',
            }
        ],
        SocialSharingHeading: 'Les Réseaux Sociaux',
        SocialSharing: [
            {
                id: 1,
                name: 'Twitter',
                icon: <FiTwitter />,
                url: 'https://twitter.com/SAFRAN?s=20 ',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/safran_group/?hl=en',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: <FiFacebook />,
                url: 'https://www.facebook.com/GroupeSafran/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: <FiLinkedin />,
                url: 'https://fr.linkedin.com/company/safran',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: <FiYoutube />,
                url: 'https://www.youtube.com/user/groupesafran',
            },
        ],
    },
};
