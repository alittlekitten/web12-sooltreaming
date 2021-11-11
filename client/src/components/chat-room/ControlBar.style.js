import styled from 'styled-components';
import { COLOR } from '@constant/style';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  background-color: ${COLOR.primary2};
  align-items: center;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  svg {
    cursor: pointer;
    margin: 0 5px;

    &: hover {
      padding: 2px;
    }
  }
`;
