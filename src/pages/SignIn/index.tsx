/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import { Container, AnimationContainer, Content, Instructions } from './styles';
import LogoColorido from '../../assets/credere.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  signin: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          signin: Yup.string().required(
            'É necessário um nome! Examplo: John Doe',
          ),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          rawName: data.signin,
        });

        history.push('/painel_de_controle');
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoColorido} alt="Logo Credere" />
          <h3>Credere - Teste para Desenvolvedor Backend</h3>
          <Form ref={formRef} onSubmit={handleSubmit} id="signin-form">
            <Input placeholder="Type a name to sign in" name="signin" />
            <Button type="submit">Sign In</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Instructions>
        <div>
          <h1>Painel de Controle de Sonda Marciana</h1>
          <h2>Sobre a aplicação</h2>
          <p>
            Este é um <b>Painel de Controle de uma Sonda Marciana</b>. <br />
            Aqui você será capaz de <b>mover</b> uma sonda marciana da NASA em
            um campo de prova.
          </p>
          <p>
            Use os comandos{' '}
            <strong>GE (Girar Esquerda), GD (Girar Direita) e M (Mover)</strong>{' '}
            para fazer a sonda se mover. A informação de suas coordenadas serão
            mostradas no painel.
          </p>
          <h3>Divirta-se!</h3>
        </div>
      </Instructions>
    </Container>
  );
};

export default SignIn;
