import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MarsField from '../../components/MarsField';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="dashboard-divs">
          <div className="instructions">
            <div className="inst-1">
              <h1>
                <b>Instruções para movimentar a sonda</b>
              </h1>
              <p>Piloto(a), você precisa digitar os comandos!</p>

              <br />
              <p>Os Comandos são:</p>

              <br />
              <strong>
                <ul>
                  <li>GD - Girar a Direita</li>
                  <li>GE - Girar a Esquerda</li>
                  <li>M - Mover pra frente</li>
                </ul>
              </strong>
            </div>
            <div className="inst-2">
              <h2>Exemplos de comandos válidos:</h2>

              <br />
              <strong>
                <ul>
                  <li>M,M,M,GE,M,GD,M</li>
                  <li>M</li>
                  <li>M,GD,M,M,M,GE,M,GE</li>
                </ul>
              </strong>

              <br />
              <h3>
                OBS:
                <ul>
                  <li>
                    Separe os comandos por vírgulas e não adicione espaços.
                  </li>
                  <li>Só utilize letras maiúsculas.</li>
                  <li>Divirta-se!!</li>
                </ul>
              </h3>
            </div>
          </div>

          <MarsField />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
