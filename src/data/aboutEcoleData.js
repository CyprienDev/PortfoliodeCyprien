import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube} from "react-icons/fi";
import Image1 from "../images/utec_logo.jpg";
import Image2 from "../images/utec_exterieur.jpg";
import Image3 from "../images/utec_exterieur_cantine.jpg";
import Image4 from "../images/nombre_app_entre_part_utec.png";
import Image5 from "../images/formation_utec.png";
import Image6 from "../images/utec_chiffres_cles.png";

export const aboutEcoleData = {
    EcoleHeader: {
        title: "L'UTEC"
    },
    EcoleImages: [
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
    EcoleInfo: {
        ClientHeading: 'Les Formations',
        CompanyInfo: [
            {
                id: 2,
                title: 'Formations',
                details: 'Formation Avant Bac et Bac, BTS et Bac+2, Bachelor, Licence Pro, DCG, Bac+3, MBA, Bac+5 ',
            },
            {
                id: 3,
                title: 'Site',
                details: 'https://www.utec77.fr',
            },
        ],
        ProjectDetailsHeading: 'À propos de L\'UTEC :',
        ProjectDetails: [
            {
                id: 1,
                details:
                    'L\'UTEC est une école de la CCI Seine-et-Marne, pluridisciplinaire, multi-niveaux, au service des jeunes, des familles et des entreprises, qui forme chaque année prés de 2000 jeunes en apprentissage.',
                img: Image4,
            },
            {
                id: 2,
                details:
                    'L\'UTEC propose des Formation en Apprentissage pour les jeunes de 16 à 29 ans, des Formations continue pour des salariés, des créateurs d\'entreprise, ainsi que des demandeurs d\'emploi.',
                img: Image5
            },
            {
                id: 3,
                img: Image6
            },
        ],
        SocialSharingHeading: 'Les Réseaux Sociaux',
        SocialSharing: [
            {
                id: 1,
                name: 'Twitter',
                icon: <FiTwitter />,
                url: 'https://twitter.com/Utec_77',
            },
            {
                id: 2,
                name: 'Instagram',
                icon: <FiInstagram />,
                url: 'https://www.instagram.com/utec77/?hl=fr',
            },
            {
                id: 3,
                name: 'Facebook',
                icon: <FiFacebook />,
                url: 'https://www.facebook.com/utec77.formations/',
            },
            {
                id: 4,
                name: 'LinkedIn',
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/school/utec77-cfa-utec/',
            },
            {
                id: 5,
                name: 'Youtube',
                icon: <FiYoutube />,
                url: 'https://www.youtube.com/channel/UCZQw_vJQhs7Z2GXjOPOH2Jw',
            },
        ],
    },
};
