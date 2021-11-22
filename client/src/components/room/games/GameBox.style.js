import styled from 'styled-components';
import { COLOR } from '@constant/style';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${COLOR.white};
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
  box-shadow: 1px 1px 1px 1px #ccc;
  cursor: pointer;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin: auto 0;
  svg {
    margin-right: 10px;
  }
`;
