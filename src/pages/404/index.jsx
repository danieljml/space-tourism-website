import { Link, useLocation } from 'react-router-dom';

import { CustomSecondaryTitle, CustomParagraph } from '../../global-styles';
import { CustomNotFoundMain } from './styles';
const NotFound = () => {
  const location = useLocation();

  return (
    <CustomNotFoundMain>
      <CustomSecondaryTitle>404 - Page Not Found</CustomSecondaryTitle>
      <CustomParagraph>
        The page you are looking for could not be found: <code>{location.pathname}</code>
      </CustomParagraph>
      <Link to="/">Go back to the homepage</Link>
    </CustomNotFoundMain>
  );
};

export default NotFound;
