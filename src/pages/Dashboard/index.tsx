import React from 'react';
import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Dashboard</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
