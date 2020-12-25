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
        <MarsField />
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
