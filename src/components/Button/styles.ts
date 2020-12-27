import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 350px;
  height: 40px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: #242e40;
  background: linear-gradient(45deg, #00c897 55%, #45536c);

  &:hover {
    background: ${shade(0.2, '#45536c')};
    color: #fff;
    font-weight: bold;
  }
`;
