import styled from 'styled-components';
import { COLOR } from '@constant/style';

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 35px 0 25px 0;
  color: ${COLOR.titleActive};
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & span {
    color: ${COLOR.point};
  }
`;

export const Button = styled.button`
  background-color: none;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    & > svg {
      padding: 2px;
    }
  }
  & > svg {
    pointer-events: none;
  }
`;

export const CloseBox = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
