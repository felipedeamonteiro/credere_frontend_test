import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 350px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: 500;
  border-radius: 5px;
  color: #fff;
  background: linear-gradient(to bottom, #de0039, #70008c);

  &:hover {
    background: ${shade(0.2, '#de0039')};
  }
`;
