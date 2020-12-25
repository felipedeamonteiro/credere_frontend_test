import React from 'react';
import { GiMarsPathfinder } from 'react-icons/gi';
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowUp,
  FiArrowRight,
} from 'react-icons/fi';

import { Container } from './styles';

const MarsField: React.FC = () => {
  return (
    <Container>
      <div className="panel-controller">
        <h3>Coordenadas da Sonda Marciana</h3>
        <div className="car-coordinates">
          <div>
            <p>Coordenada X:</p>
            <p>2</p>
          </div>
          <div>
            <p>Coordenada Y:</p>
            <p>2</p>
          </div>
          <div>
            <p>Direção da Sonda:</p>
            <p>Cima</p>
          </div>
        </div>
      </div>
      <div className="field-table">
        <table>
          <tbody>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>
                <GiMarsPathfinder size={50} />
                <FiArrowRight size={50} />
              </td>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MarsField;
