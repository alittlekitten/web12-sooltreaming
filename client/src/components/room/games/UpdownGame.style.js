import styled from 'styled-components';
import { COLOR, BTN_STYLE } from '@constant/style';

export const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const GameTitleDiv = styled.div`
  width: 100%;
  font-weight: bold;
  color: ${COLOR.titleActive};
`;

export const GameStopButton = styled.button`
  ${BTN_STYLE};
  padding: 5px 10px;
`;
