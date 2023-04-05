import { NavLink, useParams } from 'react-router-dom';
import useBackgroundImage from '../../hooks/bg_image/index';
import data from '../../data.json';
import { getNavLinkClassName } from '../../functions/className';
import { CustomTechnologyMain, CustomTechnologySecondaryTitle } from './styles';
import { CustomParagraph } from '../../global-styles';
import technologyBgImage from '../../assets/technology/background-technology-desktop.jpg';

const Technology = () => {
  const className = getNavLinkClassName;
  useBackgroundImage(technologyBgImage);
  const { id } = useParams();
  const { technology } = data;

  if (!id) {
    return <Navigate to="/technology/launch-vehicle" />;
  }

  const { name, description, images } = technology.find(person => person.name.toLowerCase().replaceAll(' ', '-') === id);

  return (
    <CustomTechnologyMain>
      <div className="technology__content">
        <CustomTechnologySecondaryTitle>
          <span>03</span> SPACE LAUNCH 101
        </CustomTechnologySecondaryTitle>
        <div className="content__description">
          <div>
            <CustomParagraph>THE TERMINOLOGY…</CustomParagraph>
            <CustomParagraph className="name">{name}</CustomParagraph>
            <CustomParagraph className="description">{description}</CustomParagraph>
          </div>
          <ul>
            {technology.map((person, i) => {
              return (
                <li key={person.name}>
                  <NavLink className={className} to={`/technology/${person.name.toLowerCase().replaceAll(' ', '-')}`}>
                    {i + 1}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="technology__image">
        <img src={images.portrait} alt="technology" />
      </div>
    </CustomTechnologyMain>
  );
};

export default Technology;
