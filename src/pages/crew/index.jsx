import { NavLink, useParams, Navigate } from 'react-router-dom';
import useBackgroundImage from '../../hooks/bg_image/index';
import data from '../../data.json';
import { CustomParagraph } from '../../global-styles';
import { CustomCrewMain, CustomCrewSecondaryTitle } from './styles';
import { getNavLinkClassName } from '../../functions/className';
import crewBgImage from '../../assets/crew/background-crew-desktop.jpg';

const Crew = () => {
  const className = getNavLinkClassName;
  useBackgroundImage(crewBgImage);
  const { id } = useParams();
  const { crew } = data;

  if (!id) {
    return <Navigate to="/crew/douglas-hurley" />;
  }

  const { name, bio, images, role } = crew.find(person => person.name.toLowerCase().replaceAll(' ', '-') === id);

  return (
    <CustomCrewMain>
      <div className="crew__content">
        <CustomCrewSecondaryTitle>
          <span>02</span> MEET YOUR CREW
        </CustomCrewSecondaryTitle>
        <CustomParagraph className="role">{role}</CustomParagraph>
        <CustomParagraph className="name">{name}</CustomParagraph>
        <CustomParagraph className="bio">{bio}</CustomParagraph>
        <ul>
          {crew.map(person => {
            return (
              <li key={person.name}>
                <NavLink className={className} to={`/crew/${person.name.toLowerCase().replaceAll(' ', '-')}`}></NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="crew__image">
        <img src={images.png} alt="crew" />
      </div>
    </CustomCrewMain>
  );
};

export default Crew;
