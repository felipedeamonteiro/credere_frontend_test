import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

interface IFormRawData {
  movement: string;
}

interface IMarsProbeCoordinatesData {
  pilot_name: string;
  xCoordinate: number;
  yCoordinate: number;
  carDirection: 'Direita' | 'Cima' | 'Esquerda' | 'Baixo';
}

const MarsField: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const userName = localStorage.getItem('@CredereTest:name')
    ? localStorage.getItem('@CredereTest:name')
    : null;

  const [probeData, setProbeData] = useState<IMarsProbeCoordinatesData>(
    {} as IMarsProbeCoordinatesData,
  );
  const [inputMovement, setInputMovement] = useState<string>('');
  const [arrowDirectionIcon, setArrowDirectionIcon] = useState<JSX.Element>(
    <FiArrowRight size={50} color="#00c897" />,
  );

  useEffect(() => {
    const giveProbeData = async () => {
      const pilotData = await api.get(`/coordinates/${userName}`);

      if (pilotData === undefined) {
        if (userName !== null) {
          setProbeData({
            pilot_name: userName,
            xCoordinate: 0,
            yCoordinate: 0,
            carDirection: 'Direita',
          });
        }
      } else {
        setProbeData({
          pilot_name: pilotData.data.pilot_name,
          xCoordinate: pilotData.data.xCoordinate,
          yCoordinate: pilotData.data.yCoordinate,
          carDirection: pilotData.data.carDirection,
        });
      }
    };

    giveProbeData();
  }, [userName]);

  useEffect(() => {
    if (probeData.carDirection === 'Direita') {
      setArrowDirectionIcon(<FiArrowRight size={50} color="#00c897" />);
    }
    if (probeData.carDirection === 'Cima') {
      setArrowDirectionIcon(<FiArrowUp size={50} color="#00c897" />);
    }
    if (probeData.carDirection === 'Esquerda') {
      setArrowDirectionIcon(<FiArrowLeft size={50} color="#00c897" />);
    }
    if (probeData.carDirection === 'Baixo') {
      setArrowDirectionIcon(<FiArrowDown size={50} color="#00c897" />);
    }
  }, [probeData.carDirection]);

  const ResetCoordinates = useCallback(async () => {
    if (userName) {
      await api.post(`/coordinates/reset/${userName}`);
      setProbeData({
        pilot_name: userName,
        xCoordinate: 0,
        yCoordinate: 0,
        carDirection: 'Direita',
      });
    }
    formRef.current?.setErrors({});
    setInputMovement('');
  }, [userName]);

  const MoveProbe = useCallback(
    async (data: IFormRawData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          movement: Yup.string()
            .matches(
              /^((GE)|(GD)|(M)),?((((GE)|(GD)|(M)),)?)+((GE)|(GD)|(M))?$/,
              'Comandos válidos: GE, GD e M',
            )
            .required('Digite algum comando válido.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (userName) {
          const marsProbeData = await api.post(`/movements`, {
            name: userName,
            movement: data.movement,
          });
          setProbeData({
            pilot_name: userName,
            xCoordinate: marsProbeData.data.xCoordinate,
            yCoordinate: marsProbeData.data.yCoordinate,
            carDirection: marsProbeData.data.carDirection,
          });
        }
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        } else {
          formRef.current?.setErrors({
            movement:
              'Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de #vvv',
          });
        }
      }
    },
    [userName],
  );

  return (
    <Container>
      <div className="panel-controller">
        <h2>Coordenadas da Sonda Marciana</h2>
        <div className="car-coordinates">
          <div>
            <p>Coordenada X:</p>
            <p>{probeData.xCoordinate}</p>
          </div>
          <div>
            <p>Coordenada Y:</p>
            <p>{probeData.yCoordinate}</p>
          </div>
          <div>
            <p>Direção da Sonda:</p>
            <p>{probeData.carDirection}</p>
          </div>
        </div>
        <Button onClick={ResetCoordinates}>Resetar Coordenadas</Button>
        <Form ref={formRef} onSubmit={MoveProbe} id="move-probe">
          <Input
            placeholder="Digite apenas os comandos GD, GE ou M"
            name="movement"
            value={inputMovement}
            onChange={e => setInputMovement(e.target.value)}
          />
          <Button type="submit">Mover Sonda</Button>
        </Form>
      </div>
      <div className="field-table">
        <table>
          <tbody>
            {probeData.yCoordinate === 4 ? (
              <tr>
                {probeData.xCoordinate === 0 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 1 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 2 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 3 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 4 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ) : (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
            {probeData.yCoordinate === 3 ? (
              <tr>
                {probeData.xCoordinate === 0 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 1 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 2 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 3 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 4 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ) : (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
            {probeData.yCoordinate === 2 ? (
              <tr>
                {probeData.xCoordinate === 0 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 1 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 2 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 3 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 4 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ) : (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
            {probeData.yCoordinate === 1 ? (
              <tr>
                {probeData.xCoordinate === 0 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 1 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 2 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 3 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 4 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ) : (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
            {probeData.yCoordinate === 0 ? (
              <tr>
                {probeData.xCoordinate === 0 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 1 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 2 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 3 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}

                {probeData.xCoordinate === 4 ? (
                  <td>
                    <GiMarsPathfinder size={50} color="#116bd9" />
                    {arrowDirectionIcon}
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            ) : (
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MarsField;
