import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube} from "react-icons/fi";
import Image1 from "../images/safran_logo.jpg";
import Image2 from "../images/safran_chaine_assemblage.jpg";
import Image3 from "../images/safran_villaroche.jpg";

export const aboutEntrepriseData = {
    EntrepriseHeader: {
        title: 'Safran'
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
                details: "Moteurs d\n'Avions, Equipements aéronautiques, Avionique, Defense et sécurité, Service et support, Spatial, R&D",
            },
            {
                id: 3,
                title: 'Site',
                details: 'https://www.safran-group.com/fr',
            },
        ],
        ObjectivesHeading: 'Objectifs',
        ObjectivesDetails:
            '\n' +
            'Les objectifs de Safran incluent l\'innovation technologique, l\'excellence opérationnelle, la durabilité environnementale, la croissance rentable, la sécurité des produits et des opérations, ainsi que le développement des talents.',

        ProjectDetailsHeading: 'Challenge',
        ProjectDetails: [
            {
                id: 1,
                details:
                    '\n' +
                    'Safran est une entreprise française de renommée mondiale dans le secteur de l\'aérospatiale, de la défense et de la sécurité. L\'histoire de Safran remonte à ses racines historiques, avec la création de Snecma en 1945, spécialisée dans les moteurs d\'avions et les propulseurs. Au fil des décennies, Snecma a été impliquée dans des projets emblématiques, tels que le développement du moteur à réaction Snecma Atar pour l\'avion de combat Mirage.\n' +
                    '\n',
            },
            {
                id: 2,
                details:
                    'En 2005, Snecma a fusionné avec Sagem, une société française spécialisée dans l\'électronique de défense, pour former Safran. Cette fusion stratégique a permis à Safran de renforcer son expertise et d\'élargir sa gamme de produits et services. Elle a également marqué un tournant dans l\'histoire de l\'entreprise, lui permettant de devenir un acteur mondial majeur.\n' +
                    '\n',
            },
            {
                id: 3,
                details:
                    'Depuis sa création, Safran a continué d\'innover et de marquer des moments clés. En 2008, Safran a conclu un partenariat historique avec General Electric pour former CFM International, une coentreprise qui produit des moteurs d\'avions renommés tels que le CFM56 et le LEAP. Ce partenariat a renforcé la position de Safran sur le marché mondial des moteurs d\'avions.\n' +
                    '\n',
            },
            {
                id: 4,
                details:
                    'En 2011, Safran a acquis Morpho, leader mondial dans les solutions d\'identification biométrique et de sécurité. Cette acquisition a permis à Safran de développer son expertise dans le domaine de la sécurité et de renforcer sa présence sur le marché mondial de la sécurité.\n' +
                    '\n' +
                    '\n',
            },
            {
                id: 5,
                details:
                'En 2018, Safran a réalisé une autre acquisition importante en fusionnant avec Zodiac Aerospace, un fournisseur majeur d\'équipements aéronautiques. Cette fusion a permis à Safran d\'élargir sa gamme de produits et de renforcer sa présence dans le domaine de l\'aménagement des cabines d\'avions.\n' +
                    '\n'

            },
            {
                id: 6,
                details:
                    'Aujourd\'hui, Safran est un leader mondial reconnu dans son domaine, avec des technologies de pointe, des collaborations stratégiques et une présence mondiale. L\'entreprise continue de repousser les limites de l\'innovation, de développer des solutions durables et de contribuer à façonner l\'avenir de l\'aérospatiale et de la sécurité.'

            },
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
