import styled from 'styled-components';

const CustomPrincipalTitle = styled.h1`
  font-family: 'Bellefair';
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
`;

const CustomSecondaryTitle = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #d0d6f9;
`;

const CustomParagraph = styled.p`
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
`;

const CustomMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: 'Barlow Condensed';
  padding: 20px;
  height: 100%;
`;

const CustomList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CustomListItem = styled.li`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  border-bottom: 2px solid transparent;
`;

export { CustomPrincipalTitle, CustomSecondaryTitle, CustomParagraph, CustomMain, CustomList, CustomListItem };
