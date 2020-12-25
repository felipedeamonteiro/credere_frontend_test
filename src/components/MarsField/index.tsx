import React, { useCallback, useRef } from 'react';
import { GiMarsPathfinder } from 'react-icons/gi';
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowUp,
  FiArrowRight,
} from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

const MarsField: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const ResetCoordinates = useCallback(() => {
    console.log('Resetando Coordenadas');
  }, []);

  const MoveProbe = useCallback(() => {
    console.log('Movendo sonda');
  }, []);

  return (
    <Container>
      <div className="panel-controller">
        <h2>Coordenadas da Sonda Marciana</h2>
        <div className="car-coordinates">
          <div>
            <p>Coordenada X:</p>
            <p>0</p>
          </div>
          <div>
            <p>Coordenada Y:</p>
            <p>0</p>
          </div>
          <div>
            <p>Direção da Sonda:</p>
            <p>Direita</p>
          </div>
        </div>
        <Button onClick={ResetCoordinates}>Resetar Coordenadas</Button>
        <Form ref={formRef} onSubmit={MoveProbe} id="move-probe">
          <Input
            placeholder="Digite apenas os comandos GD, GE ou M"
            name="move-probe"
          />
          <Button type="submit">Mover Sonda</Button>
        </Form>
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
                <GiMarsPathfinder size={50} color="#116bd9" />
                <FiArrowRight size={50} color="#00c897" />
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
