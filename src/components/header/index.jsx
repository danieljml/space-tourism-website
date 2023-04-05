import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { CustomHeader, CustomHeaderList, CustomHeaderListItem } from './styles';
import { getNavLinkClassName } from '../../functions/className';
import Logo from '../../assets/shared/logo.svg';

const Header = () => {
  const className = getNavLinkClassName;
  const NAVLINKS = [
    { title: 'Home', link: '/' },
    { title: 'Destination', link: '/destination' },
    { title: 'Crew', link: '/crew' },
    { title: 'Technology', link: '/technology' },
  ];

  return (
    <CustomHeader>
      <img src={Logo} alt="logo" />
      <span className="line"></span>
      <CustomHeaderList>
        {NAVLINKS.map((navLink, i) => {
          return (
            <CustomHeaderListItem key={navLink.title}>
              <NavLink to={navLink.link} className={className}>
                <span className="number">0{i}</span>
                {navLink.title}
              </NavLink>
            </CustomHeaderListItem>
          );
        })}
      </CustomHeaderList>
    </CustomHeader>
  );
};

export default memo(Header);
