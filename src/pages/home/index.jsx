import { memo } from 'react';
import { Link } from 'react-router-dom';
import useBackgroundImage from '../../hooks/bg_image/index';
import { CustomSecondaryTitle, CustomParagraph } from '../../global-styles';
import { CustomHomeMain, CustomeHomePricipalTitle } from './styles';
import home from '../../assets/home/background-home-desktop.jpg';

const Home = () => {
  useBackgroundImage(home);
  return (
    <CustomHomeMain>
      <div className="home__content">
        <CustomSecondaryTitle>SO, YOU WANT TO TRAVEL TO</CustomSecondaryTitle>
        <CustomeHomePricipalTitle>SPACE</CustomeHomePricipalTitle>
        <CustomParagraph>
          Let’s face it; if you want to go to space, you might as well <br /> genuinely go to outer space and not hover kind of on the <br /> edge of it. Well
          sit back, and relax because we’ll give you a <br /> truly out of this world experience!
        </CustomParagraph>
      </div>
      <div className="home__btn">
        <Link to="/destination" className="btn__explore">
          EXPLORE
        </Link>
      </div>
    </CustomHomeMain>
  );
};

export default memo(Home);
