import htmllogo from '../../images/html_logo.png';
import csslogo from '../../images/logo_css.png';
import pythonlogo from '../../images/logo_python.png';
import reactlogo from '../../images/logo_react.png';
import flasklogo from '../../images/logo_flask.png';
import jslogo from '../../images/logo_js.png';
import StarRatings from 'react-star-ratings';
import {useContext} from "react";
import AboutCompetencesContext from "../../context/CompetencesContext";

const Competences = () => {
	const { aboutCompetences } = useContext(AboutCompetencesContext);

	return (
		<div>
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{aboutCompetences.CompetencesHeader.title}
				</p>
			</div>
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<div>
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutCompetences.CompetencesInfo.CompetencesBallisage}
					</p>
					<div className="sm:flex sm:gap-10 mb-10">

						<img src={htmllogo} className="photo" alt="" />

						<StarRatings
							rating={2.500}
							starDimension="40px"
							starSpacing="15px"
							starRatedColor={'rgb(59,130,246)'}
						/>

					</div>
				</div>
				<div>
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutCompetences.CompetencesInfo.CompetencesStyle}
					</p>
					<div className="sm:flex sm:gap-10 mb-10">
							<img src={csslogo} className="photo" alt="" />

							<StarRatings
								rating={2.603}
								starDimension="40px"
								starSpacing="15px"
								starRatedColor={'rgb(59,130,246)'}
							/>
					</div>
				</div>
				<div>
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutCompetences.CompetencesInfo.CompetencesProg}
					</p>
					<div className="sm:flex sm:gap-10 mb-10">
							<img src={pythonlogo} className="photo"  alt="" />

							<StarRatings
								rating={3.403}
								starDimension="40px"
								starSpacing="15px"
								starRatedColor={'rgb(59,130,246)'}
							/>
					</div>
					<div className="sm:flex sm:gap-10 mb-10">
							<img src={jslogo} className="photo"  alt="" />

							<StarRatings
								rating={3.403}
								starDimension="40px"
								starSpacing="15px"
								starRatedColor={'rgb(59,130,246)'}
							/>
					</div>
				</div>
				<div>
					<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{aboutCompetences.CompetencesInfo.CompetencesFrame}
					</p>
					<div className="sm:flex sm:gap-10 mb-10">
							<img src={reactlogo} className="photo" alt="" />

							<StarRatings
								rating={2.703}
								starDimension="40px"
								starSpacing="15px"
								starRatedColor={'rgb(59,130,246)'}
							/>
					</div>
					<div className="sm:flex sm:gap-10 mb-10">
							<img src={flasklogo} className="photo" alt="" />

							<StarRatings
								rating={2.103}
								starDimension="40px"
								starSpacing="15px"
								starRatedColor={'rgb(59,130,246)'}
							/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Competences;
