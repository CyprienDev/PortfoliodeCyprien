import { useContext } from 'react';
import CompetencesContext from '../../context/CompetencesContext';
import AboutClientSingle from './AboutClientSingle';

const CompetencesLogo = () => {
	const { clientsData, clientsHeading } = useContext(CompetencesContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default CompetencesLogo;
