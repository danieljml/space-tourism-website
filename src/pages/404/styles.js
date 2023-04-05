import styled from 'styled-components';
import { CustomMain } from '../../global-styles';

const CustomNotFoundMain = styled(CustomMain)`
  margin-top: 100px;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 0px;
  width: 100%;
  height: 500px;

  & a {
    transition: all 1s ease;
    padding: 10px 15px;
  }
`;
export { CustomNotFoundMain };
