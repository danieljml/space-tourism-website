import { NavLink, useParams, Navigate } from 'react-router-dom';
import useBackgroundImage from '../../hooks/bg_image/index';
import data from '../../data.json';
import { CustomParagraph } from '../../global-styles';
import { CustomDestinationMain, CustomDestinationPrincipalTitle, CustomDestinationSecondaryTitle, CustomDestinationParagraph } from './styles';
import { getNavLinkClassName } from '../../functions/className';
import destinationBgImage from '../../assets/destination/background-destination-desktop.jpg';

const Destination = () => {
  const className = getNavLinkClassName;
  useBackgroundImage(destinationBgImage);
  const { id } = useParams();
  const { destinations } = data;

  if (!id) {
    return <Navigate to="/destination/moon" />;
  }

  const { name, description, images, distance, travel } = destinations.find(planet => planet.name.toLowerCase() === id);
  return (
    <>
      <CustomDestinationMain>
        <div className="planet_image">
          <CustomDestinationSecondaryTitle>
            <span>01</span> Pick your destination
          </CustomDestinationSecondaryTitle>
          <img src={images.png} alt="planet" />
        </div>
        <div className="planet_content">
          <ul>
            {destinations.map(planet => {
              return (
                <li key={planet.name}>
                  <NavLink className={className} to={`/destination/${planet.name.toLowerCase()}`}>
                    {planet.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <CustomDestinationPrincipalTitle>{name}</CustomDestinationPrincipalTitle>
          <CustomDestinationParagraph>{description}</CustomDestinationParagraph>
          <span className="line"></span>
          <div className="destination__details">
            <CustomParagraph>
              <span className="subtitle">AVG. DISTANCE</span>
              <br />
              {distance}
            </CustomParagraph>
            <CustomParagraph>
              <span className="subtitle">Est. travel time</span>
              <br />
              {travel}
            </CustomParagraph>
          </div>
        </div>
      </CustomDestinationMain>
    </>
  );
};

export default Destination;
