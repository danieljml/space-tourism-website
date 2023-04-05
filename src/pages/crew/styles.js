import styled from 'styled-components';
import { CustomMain, CustomSecondaryTitle } from '../../global-styles';

const CustomCrewMain = styled(CustomMain)`
  justify-items: center;
  column-gap: 21px;
  width: 100%;
  margin-top: 76px;

  & .crew__content {
    display: flex;
    flex-direction: column;
    padding-left: 150px;
    max-width: 645px;
  }

  & .crew__content p,
  .crew__content ul {
    padding-left: 25px;
  }

  & .crew__content ul {
    display: flex;
    column-gap: 24px;
  }

  & .crew__content .link {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    opacity: 0.17;
    margin-top: 127px;
  }

  & .crew__content .link.active {
    opacity: 1;
  }

  & .crew__content .role {
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 15px 0 27px 0;
  }

  & .crew__content .name {
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 64px;
    color: #ffffff;
    margin-bottom: 27px;
  }

  & .crew__image img {
    height: 700px;
  }
`;

const CustomCrewSecondaryTitle = styled(CustomSecondaryTitle)`
  display: flex;
  column-gap: 28px;
  padding-left: 25px;
  margin-bottom: 154px;
  & span {
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

export { CustomCrewMain, CustomCrewSecondaryTitle };
