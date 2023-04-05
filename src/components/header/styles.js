import styled from 'styled-components';
import { CustomList, CustomListItem } from '../../global-styles.js';

const CustomHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Barlow Condensed';
  width: 100%;
  height: 96px;

  & .line {
    position: absolute;
    left: 14%;
    width: 32.5%;
    height: 1px;
    z-index: 1;
    background: hsla(0, 0%, 59%, 1);
    mix-blend-mode: normal;
    opacity: 0.25;
  }

  @media screen and (width <= 1385px) {
    & .line {
      display: none;
    }
  }
`;

const CustomHeaderList = styled(CustomList)`
  column-gap: 48px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  padding: 0 20px 0 0;
  width: 810px;
`;

const CustomHeaderListItem = styled(CustomListItem)`
  & .link {
    display: flex;
    column-gap: 11px;
    font-weight: 400;
  }

  & .active {
    padding-bottom: 12px;
    border-bottom: 2px solid white;
  }

  & .number {
    font-weight: 700;
  }
`;

export { CustomHeader, CustomHeaderList, CustomHeaderListItem };
