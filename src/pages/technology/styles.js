import styled from 'styled-components';
import { CustomMain, CustomSecondaryTitle } from '../../global-styles';

const CustomTechnologyMain = styled(CustomMain)`
  grid-template-columns: 1fr 517px;
  padding-bottom: 100px;
  padding-right: 0;
  justify-items: center;
  column-gap: 15px;
  width: 100%;
  margin-top: 86px;

  & .technology__content {
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    max-width: 645px;
  }

  & .technology__content p,
  .technology__content ul {
    padding-left: 0;
  }

  & .technology__content ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .technology__content .link {
    display: grid;
    place-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid hsla(0, 0%, 100%, 0.25);
    margin-top: 0;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: white;
  }

  & .technology__content .link.active {
    background: white;
    color: black;
  }

  & .technology__content .role {
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

  & .technology__content .name {
    margin-top: 11px;
    text-transform: uppercase;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 54px;
    line-height: 64px;
    color: #ffffff;
    margin-bottom: 27px;
  }

  & .technology__image {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  & .technology__image img {
    width: 100%;
    height: 100%;
  }

  & .content__description {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 50px;
  }
`;

const CustomTechnologySecondaryTitle = styled(CustomSecondaryTitle)`
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

export { CustomTechnologyMain, CustomTechnologySecondaryTitle };
