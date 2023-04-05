import styled from 'styled-components';
import { CustomMain, CustomPrincipalTitle, CustomSecondaryTitle, CustomParagraph, CustomList } from '../../global-styles';

const CustomDestinationMain = styled(CustomMain)`
  justify-items: center;
  column-gap: 38px;
  width: 100%;
  margin-top: 76px;
  padding-bottom: 112px;

  & .planet_image {
    display: grid;
    justify-items: center;
    row-gap: 97px;
  }

  & .planet_image img {
    width: 445px;
    height: 445px;
    margin-left: 215px;
  }

  & .planet_content ul {
    display: flex;
    align-items: flex-end;
    column-gap: 35px;
    padding: 10px;
    margin-top: 54px;
  }

  & .link {
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    color: #d0d6f9;
  }

  & .link.active {
    color: #ffffff;
    padding-bottom: 12px;
    border-bottom: 2px solid white;
  }

  & .line {
    display: block;
    width: 100%;
    height: 1px;
    margin: 54px 0 28px 0;
    background: #383b4b;
  }

  & .destination__details {
    display: flex;
    column-gap: 79px;

    & p {
      font-size: 28px;
      font-family: 'Bellefair';
      text-transform: uppercase;
      color: #ffffff;
    }

    & span {
      font-family: 'Barlow Condensed';
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
      color: #d0d6f9;
    }
  }
`;

const CustomDestinationPrincipalTitle = styled(CustomPrincipalTitle)`
  text-transform: uppercase;
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
  margin: 37px 0 14px 0;
`;

const CustomDestinationSecondaryTitle = styled(CustomSecondaryTitle)`
  display: flex;
  column-gap: 28px;
  padding-left: 25px;
  & span {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const CustomDestinationParagraph = styled(CustomParagraph)`
  max-width: 430px;
`;

const CustomListDestination = styled(CustomList)`
  display: unset;
  margin: 0;
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
`;

export { CustomDestinationMain, CustomDestinationPrincipalTitle, CustomDestinationSecondaryTitle, CustomDestinationParagraph, CustomListDestination };
