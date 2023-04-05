import styled from 'styled-components';
import { CustomMain, CustomPrincipalTitle } from '../../global-styles.js';

const CustomHomeMain = styled(CustomMain)`
  grid-template-columns: auto auto;
  margin-top: 231px;
  padding-bottom: 131px;
  height: 100%;

  & .home__content {
    margin-left: 160px;
  }

  & .home__btn {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-right: 20px;
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: #0b0d17;
    padding-bottom: 18px;
  }

  & .home__btn a:hover {
    transition: 1s all ease;
    outline: 88px solid rgba(255, 255, 255, 0.1);
  }

  & .btn__explore {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 274px;
    border-radius: 50%;
    background: #ffff;
    color: #000;
  }
`;

const CustomeHomePricipalTitle = styled(CustomPrincipalTitle)`
  margin: 24px 0;
`;

export { CustomHomeMain, CustomeHomePricipalTitle };
